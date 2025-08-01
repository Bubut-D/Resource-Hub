// Examples of how to manage modules dynamically
// These functions can be called from the browser console or integrated into your admin interface

// Example 1: Add a new module
function addNewModule() {
    const newModule = {
        id: "data-science",
        name: "Data Science",
        icon: {
            type: "fontawesome",
            name: "fas fa-chart-line"
        },
        description: "Comprehensive resources for data analysis, machine learning, and statistical modeling.",
        links: [
            {
                name: "Python for Data Science",
                url: "pages/python-data-science.html",
                icon: {
                    type: "fontawesome",
                    name: "fab fa-python"
                }
            },
            {
                name: "Machine Learning",
                url: "pages/machine-learning.html",
                icon: {
                    type: "material",
                    name: "psychology"
                }
            },
            {
                name: "Data Visualization",
                url: "pages/data-visualization.html",
                icon: {
                    type: "fontawesome",
                    name: "fas fa-chart-bar"
                }
            },
            {
                name: "Statistics",
                url: "pages/statistics.html",
                icon: {
                    type: "material",
                    name: "trending_up"
                }
            }
        ]
    };
    
    if (window.moduleGenerator) {
        moduleGenerator.addModule(newModule);
        console.log("Data Science module added successfully!");
    }
}

// Example 2: Update an existing module
function updateModule() {
    const updatedData = {
        description: "Updated: Explore comprehensive C# development resources with new content.",
        links: [
            // Add existing links
            ...moduleGenerator.getModule("csharp-advanced").links,
            // Add a new link
            {
                name: "LINQ",
                url: "pages/linq.html",
                icon: {
                    type: "material",
                    name: "filter_list"
                }
            }
        ]
    };
    
    if (window.moduleGenerator) {
        moduleGenerator.updateModule("csharp-advanced", updatedData);
        console.log("C# Advanced module updated successfully!");
    }
}

// Example 3: Remove a module
function removeModule() {
    if (window.moduleGenerator) {
        moduleGenerator.removeModule("design");
        console.log("Design module removed successfully!");
    }
}

// Example 4: Add a module with custom functionality
function addAdvancedModule() {
    const advancedModule = {
        id: "devops",
        name: "DevOps & Infrastructure",
        icon: {
            type: "fontawesome",
            name: "fas fa-cogs"
        },
        description: "Tools and practices for continuous integration, deployment, and infrastructure management.",
        links: [
            {
                name: "Docker",
                url: "pages/docker.html",
                icon: {
                    type: "fontawesome",
                    name: "fab fa-docker"
                }
            },
            {
                name: "Kubernetes",
                url: "pages/kubernetes.html",
                icon: {
                    type: "material",
                    name: "hub"
                }
            },
            {
                name: "CI/CD Pipelines",
                url: "pages/cicd.html",
                icon: {
                    type: "material",
                    name: "account_tree"
                }
            },
            {
                name: "Cloud Platforms",
                url: "pages/cloud.html",
                icon: {
                    type: "fontawesome",
                    name: "fas fa-cloud"
                }
            },
            {
                name: "Monitoring & Logging",
                url: "pages/monitoring.html",
                icon: {
                    type: "material",
                    name: "monitoring"
                }
            }
        ]
    };
    
    if (window.moduleGenerator) {
        moduleGenerator.addModule(advancedModule);
        console.log("DevOps module added successfully!");
    }
}

// Example 5: Bulk update multiple modules
function bulkUpdateModules() {
    const updates = [
        {
            id: "resources",
            updates: {
                description: "Enhanced: Essential tools, downloads, and documentation with premium resources."
            }
        },
        {
            id: "learning",
            updates: {
                description: "Expanded: Comprehensive learning paths with certification tracking."
            }
        }
    ];
    
    if (window.moduleGenerator) {
        updates.forEach(({ id, updates }) => {
            moduleGenerator.updateModule(id, updates);
        });
        console.log("Bulk updates completed successfully!");
    }
}

// Example 6: Create a module from form data (for admin interface)
function createModuleFromForm(formData) {
    const module = {
        id: formData.id || generateId(formData.name),
        name: formData.name,
        icon: {
            type: formData.iconType || "fontawesome",
            name: formData.iconName || "fas fa-circle"
        },
        description: formData.description,
        links: formData.links || []
    };
    
    if (window.moduleGenerator) {
        moduleGenerator.addModule(module);
        return true;
    }
    return false;
}

// Helper function to generate ID from name
function generateId(name) {
    return name.toLowerCase()
              .replace(/[^a-z0-9\s]/g, '')
              .replace(/\s+/g, '-');
}

// Example 7: Export current configuration (useful for backups)
function exportConfiguration() {
    if (window.moduleGenerator) {
        const config = {
            modules: moduleGenerator.modules,
            exportDate: new Date().toISOString(),
            version: "1.0"
        };
        
        const dataStr = JSON.stringify(config, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.url = url;
        link.download = 'modules-config-backup.json';
        link.click();
        
        console.log("Configuration exported successfully!");
    }
}

// Example 8: Validate module data before adding
function validateAndAddModule(moduleData) {
    const errors = [];
    
    // Validate required fields
    if (!moduleData.id) errors.push("Module ID is required");
    if (!moduleData.name) errors.push("Module name is required");
    if (!moduleData.description) errors.push("Module description is required");
    if (!moduleData.links || !Array.isArray(moduleData.links)) {
        errors.push("Module links must be an array");
    }
    
    // Validate icon structure
    if (!moduleData.icon || !moduleData.icon.type || !moduleData.icon.name) {
        errors.push("Module icon must have type and name properties");
    }
    
    // Validate each link
    if (moduleData.links) {
        moduleData.links.forEach((link, index) => {
            if (!link.name) errors.push(`Link ${index + 1}: name is required`);
            if (!link.url) errors.push(`Link ${index + 1}: url is required`);
            if (!link.icon || !link.icon.type || !link.icon.name) {
                errors.push(`Link ${index + 1}: icon must have type and name properties`);
            }
        });
    }
    
    if (errors.length > 0) {
        console.error("Module validation failed:", errors);
        return false;
    }
    
    if (window.moduleGenerator) {
        moduleGenerator.addModule(moduleData);
        console.log("Module added successfully after validation!");
        return true;
    }
    
    return false;
}

// Make functions available globally for console testing
window.moduleManagement = {
    addNewModule,
    updateModule,
    removeModule,
    addAdvancedModule,
    bulkUpdateModules,
    createModuleFromForm,
    exportConfiguration,
    validateAndAddModule
};