// Module Configuration
// This file contains all module definitions for the website
// Import this file on any page that needs module data

window.modulesConfig = {
    "modules": [
        {
            "id": "csharp-advanced",
            "name": "C# Advanced",
            "icon": {
                "type": "material",
                "name": "deployed_code"
            },
            "description": "Explore comprehensive C# development resources.",
            "links": [
                {
                    "name": "Reflection",
                    "url": "pages/subtopic1.html",
                    "icon": {
                        "type": "material",
                        "name": "search"
                    }
                },
                {
                    "name": "JSON",
                    "url": "pages/json.html",
                    "icon": {
                        "type": "material",
                        "name": "data_object"
                    }
                },
                {
                    "name": "XML",
                    "url": "pages/xml.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-code"
                    }
                },
                {
                    "name": "Threads and Thread Pool",
                    "url": "pages/threads.html",
                    "icon": {
                        "type": "material",
                        "name": "gesture"
                    }
                },
                {
                    "name": "Synchronization",
                    "url": "pages/synchronization.html",
                    "icon": {
                        "type": "material",
                        "name": "sync"
                    }
                },
                {
                    "name": "TPL",
                    "url": "pages/tpl.html",
                    "icon": {
                        "type": "material",
                        "name": "process_chart"
                    }
                },
                {
                    "name": "Async",
                    "url": "pages/async.html",
                    "icon": {
                        "type": "material",
                        "name": "sync_disabled"
                    }
                }
            ]
        },
        {
            "id": "design",
            "name": "Design",
            "icon": {
                "type": "fontawesome",
                "name": "fas fa-palette"
            },
            "description": "Creative design resources, tools, and inspiration for UI/UX, graphics, and branding projects.",
            "links": [
                {
                    "name": "UI/UX Design",
                    "url": "pages/ui-design.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-paint-brush"
                    }
                },
                {
                    "name": "Graphic Design",
                    "url": "pages/graphic-design.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-image"
                    }
                },
                {
                    "name": "Branding & Identity",
                    "url": "pages/branding.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-tag"
                    }
                },
                {
                    "name": "Web Design",
                    "url": "pages/web-design.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-desktop"
                    }
                }
            ]
        },
        {
            "id": "resources",
            "name": "Resources",
            "icon": {
                "type": "fontawesome",
                "name": "fas fa-tools"
            },
            "description": "Essential tools, downloads, and documentation for your development and design workflow.",
            "links": [
                {
                    "name": "Tutorials",
                    "url": "pages/tutorials.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-play-circle"
                    }
                },
                {
                    "name": "Downloads",
                    "url": "pages/downloads.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-download"
                    }
                },
                {
                    "name": "Tools",
                    "url": "pages/tools.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-wrench"
                    }
                },
                {
                    "name": "Documentation",
                    "url": "pages/documentation.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-book"
                    }
                }
            ]
        },
        {
            "id": "learning",
            "name": "Learning",
            "icon": {
                "type": "fontawesome",
                "name": "fas fa-graduation-cap"
            },
            "description": "Expand your knowledge with courses, books, certifications, and hands-on practice projects.",
            "links": [
                {
                    "name": "Online Courses",
                    "url": "pages/courses.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-video"
                    }
                },
                {
                    "name": "Books & eBooks",
                    "url": "pages/books.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-book-open"
                    }
                },
                {
                    "name": "Certifications",
                    "url": "pages/certifications.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-certificate"
                    }
                },
                {
                    "name": "Practice Projects",
                    "url": "pages/practice.html",
                    "icon": {
                        "type": "fontawesome",
                        "name": "fas fa-code-branch"
                    }
                }
            ]
        }
    ]
};

// Helper functions for easier module management
window.ModulesAPI = {
    getAllModules() {
        return window.modulesConfig.modules;
    },

    getModule(id) {
        return window.modulesConfig.modules.find(module => module.id === id);
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

        window.modulesConfig.modules.push(moduleData);
        
        if (window.moduleGenerator) {
            window.moduleGenerator.modules = window.modulesConfig.modules;
            window.moduleGenerator.generateMainModules();
            window.moduleGenerator.generateSidebarModules();
        }
        
        return true;
    },

    updateModule(id, updatedData) {
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
            window.moduleGenerator.generateMainModules();
            window.moduleGenerator.generateSidebarModules();
        }

        return true;
    },

    removeModule(id) {
        const moduleIndex = window.modulesConfig.modules.findIndex(module => module.id === id);
        if (moduleIndex === -1) {
            console.error(`Module with ID '${id}' not found`);
            return false;
        }

        window.modulesConfig.modules.splice(moduleIndex, 1);

        if (window.moduleGenerator) {
            window.moduleGenerator.modules = window.modulesConfig.modules;
            window.moduleGenerator.generateMainModules();
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
                    window.moduleGenerator.generateMainModules();
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