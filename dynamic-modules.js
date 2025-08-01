// Dynamic Module Generator - Production Version
class ModuleGenerator {
    constructor(configPath = null) {
        this.configPath = configPath;
        this.modules = [];
        this.isSubpage = window.location.href.includes('/pages/');
        this.basePath = this.isSubpage ? '../' : '';
    }

    async init() {
        try {
            await this.loadConfig();
            
            if (!this.isSubpage) {
                this.generateMainModules();
            }
            
            this.generateSidebarModules();
        } catch (error) {
            console.error('Error initializing modules:', error);
        }
    }

    async loadConfig() {
        if (window.modulesConfig && window.modulesConfig.modules) {
            this.modules = window.modulesConfig.modules;
            return;
        }
        
        this.modules = [];
        console.warn('No module configuration found. Make sure modules-config.js is loaded before dynamic-modules.js');
    }

    createIconHTML(icon) {
        if (icon.type === 'material') {
            return `<span class="material-symbols-outlined">${icon.name}</span>`;
        } else if (icon.type === 'fontawesome') {
            return `<i class="${icon.name}"></i>`;
        }
        return '<i class="fas fa-circle"></i>';
    }

    generateMainModules() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        const existingModules = mainContent.querySelectorAll('.module');
        let themePreviewModule = null;
        
        existingModules.forEach(module => {
            const headerText = module.querySelector('.module-header span')?.textContent || '';
            if (headerText.includes('Theme Preview')) {
                themePreviewModule = module;
            } else {
                module.remove();
            }
        });

        this.modules.forEach(moduleData => {
            const moduleHTML = this.createMainModuleHTML(moduleData);
            if (themePreviewModule) {
                themePreviewModule.insertAdjacentHTML('beforebegin', moduleHTML);
            } else {
                mainContent.insertAdjacentHTML('beforeend', moduleHTML);
            }
        });
    }

    createMainModuleHTML(moduleData) {
        const iconHTML = this.createIconHTML(moduleData.icon);
        const linksHTML = moduleData.links.map(link => {
            const linkIconHTML = this.createIconHTML(link.icon);
            return `
                <a href="${link.url}" class="page-link hover-lift">
                    ${linkIconHTML}
                    <span>${link.name}</span>
                </a>
            `;
        }).join('');

        return `
            <div class="module collapsed">
                <div class="module-header" onclick="toggleModule(this)" role="button" tabindex="0">
                    <span>${iconHTML} ${moduleData.name}</span>
                </div>
                <div class="module-body">
                    <p>${moduleData.description}</p>
                    <div class="page-links">
                        ${linksHTML}
                    </div>
                </div>
            </div>
        `;
    }

    generateSidebarModules() {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (!sidebarContent) {
            console.error('No sidebar-content found!');
            return;
        }

        const existingSections = sidebarContent.querySelectorAll('.sidebar-section');
        existingSections.forEach(section => section.remove());

        this.modules.forEach(moduleData => {
            const sectionHTML = this.createSidebarSectionHTML(moduleData);
            sidebarContent.insertAdjacentHTML('beforeend', sectionHTML);
        });
    }

    createSidebarSectionHTML(moduleData) {
        const iconHTML = this.createIconHTML(moduleData.icon);
        const linksHTML = moduleData.links.map(link => {
            const linkIconHTML = this.createIconHTML(link.icon);
            
            let correctedUrl = link.url;
            if (this.isSubpage) {
                correctedUrl = `../${link.url}`;
            }
            
            return `
                <a href="${correctedUrl}">
                    ${linkIconHTML} ${link.name}
                </a>
            `;
        }).join('');

        return `
            <div class="sidebar-section collapsed">
                <div class="sidebar-header" onclick="toggleSidebarSection(this)" role="button" tabindex="0">
                    <span>${iconHTML} ${moduleData.name}</span>
                </div>
                <div class="sidebar-links">
                    ${linksHTML}
                </div>
            </div>
        `;
    }

    addModule(moduleData) {
        this.modules.push(moduleData);
        if (!this.isSubpage) {
            this.generateMainModules();
        }
        this.generateSidebarModules();
    }

    removeModule(moduleId) {
        this.modules = this.modules.filter(module => module.id !== moduleId);
        if (!this.isSubpage) {
            this.generateMainModules();
        }
        this.generateSidebarModules();
    }

    updateModule(moduleId, updatedData) {
        const index = this.modules.findIndex(module => module.id === moduleId);
        if (index !== -1) {
            this.modules[index] = { ...this.modules[index], ...updatedData };
            if (!this.isSubpage) {
                this.generateMainModules();
            }
            this.generateSidebarModules();
        }
    }

    getModule(moduleId) {
        return this.modules.find(module => module.id === moduleId);
    }

    async reload() {
        await this.init();
    }

    getCurrentPageInfo() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        for (const module of this.modules) {
            for (const link of module.links) {
                if (link.url.includes(filename)) {
                    return {
                        module: module,
                        link: link,
                        moduleId: module.id,
                        linkName: link.name
                    };
                }
            }
        }
        return null;
    }
}

// Initialize the module generator when the page loads
let moduleGenerator;

document.addEventListener('DOMContentLoaded', async () => {
    setTimeout(async () => {
        moduleGenerator = new ModuleGenerator();
        await moduleGenerator.init();
        window.moduleGenerator = moduleGenerator;
    }, 100);
});

// Enhanced ModulesAPI that works with path detection
window.ModulesAPI = {
    isSubpage() {
        return window.location.href.includes('/pages/');
    },

    getAllModules() {
        return window.modulesConfig?.modules || [];
    },

    getModule(id) {
        return this.getAllModules().find(module => module.id === id);
    },

    getCurrentPageInfo() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        for (const module of this.getAllModules()) {
            for (const link of module.links) {
                if (link.url.includes(filename)) {
                    return {
                        module: module,
                        link: link,
                        moduleId: module.id,
                        linkName: link.name
                    };
                }
            }
        }
        return null;
    },

    getCorrectedUrl(url) {
        if (this.isSubpage()) {
            return `../${url}`;
        }
        return url;
    },

    addModule(moduleData) {
        if (!moduleData.id || !moduleData.name || !moduleData.description) {
            console.error('Module must have id, name, and description');
            return false;
        }

        if (this.getModule(moduleData.id)) {
            console.error(`Module with ID '${moduleData.id}' already exists`);
            return false;
        }

        if (!window.modulesConfig) {
            window.modulesConfig = { modules: [] };
        }

        window.modulesConfig.modules.push(moduleData);
        
        if (window.moduleGenerator) {
            window.moduleGenerator.modules = window.modulesConfig.modules;
            if (!window.moduleGenerator.isSubpage) {
                window.moduleGenerator.generateMainModules();
            }
            window.moduleGenerator.generateSidebarModules();
        }
        
        return true;
    },

    updateModule(id, updatedData) {
        if (!window.modulesConfig?.modules) return false;

        const moduleIndex = window.modulesConfig.modules.findIndex(module => module.id === id);
        if (moduleIndex === -1) {
            console.error(`Module with ID '${id}' not found`);
            return false;
        }

        window.modulesConfig.modules[moduleIndex] = {
            ...window.modulesConfig.modules[moduleIndex],
            ...updatedData,
            id: id
        };

        if (window.moduleGenerator) {
            window.moduleGenerator.modules = window.modulesConfig.modules;
            if (!window.moduleGenerator.isSubpage) {
                window.moduleGenerator.generateMainModules();
            }
            window.moduleGenerator.generateSidebarModules();
        }

        return true;
    },

    removeModule(id) {
        if (!window.modulesConfig?.modules) return false;

        const moduleIndex = window.modulesConfig.modules.findIndex(module => module.id === id);
        if (moduleIndex === -1) {
            console.error(`Module with ID '${id}' not found`);
            return false;
        }

        window.modulesConfig.modules.splice(moduleIndex, 1);

        if (window.moduleGenerator) {
            window.moduleGenerator.modules = window.modulesConfig.modules;
            if (!window.moduleGenerator.isSubpage) {
                window.moduleGenerator.generateMainModules();
            }
            window.moduleGenerator.generateSidebarModules();
        }

        return true;
    },

    exportAsJSON() {
        return JSON.stringify(window.modulesConfig, null, 2);
    },

    importFromJSON(jsonString) {
        try {
            const config = JSON.parse(jsonString);
            if (config.modules && Array.isArray(config.modules)) {
                window.modulesConfig = config;
                
                if (window.moduleGenerator) {
                    window.moduleGenerator.modules = window.modulesConfig.modules;
                    if (!window.moduleGenerator.isSubpage) {
                        window.moduleGenerator.generateMainModules();
                    }
                    window.moduleGenerator.generateSidebarModules();
                }
                
                return true;
            } else {
                console.error('Invalid JSON structure. Must have a "modules" array.');
                return false;
            }
        } catch (error) {
            console.error('Invalid JSON string:', error);
            return false;
        }
    }
};

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModuleGenerator;
}