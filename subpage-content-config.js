// Subpage Content Configuration
// This file contains all content definitions for subpages
// Import this file on any subpage that needs dynamic content

window.subpageContentConfig = {
    "pages": {
        "subtopic1.html": {
            "title": "Reflection",
            "icon": {
                "type": "material",
                "name": "search"
            },
            "breadcrumb": {
                "category": "C# Advanced",
                "page": "Reflection"
            },
            "sections": [
                {
                    "id": "reflection-basics",
                    "title": "Reflection Basics",
                    "type": "content",
                    "content": {
                        "text": "Reflection in C# provides a way to inspect and interact with object types at runtime. It allows you to examine assemblies, modules, and types, and dynamically create instances, invoke methods, and access fields and properties.",
                        "subsections": [
                            {
                                "title": "Key Concepts",
                                "text": "Understanding the fundamental concepts of reflection is essential for effective usage in C# applications."
                            }
                        ]
                    }
                },
                {
                    "id": "reflection-resources",
                    "title": "Reflection Resources",
                    "type": "links",
                    "content": {
                        "text": "Master reflection with these comprehensive resources and documentation.",
                        "links": [
                            {
                                "name": "Reflection in .NET",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection",
                                "external": true
                            },
                            {
                                "name": "Viewing Type Information",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/viewing-type-information",
                                "external": true
                            },
                            {
                                "name": "Reflection and Generic Types",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection-and-generic-types",
                                "external": true
                            },
                            {
                                "name": "How to: Examine and Instantiate Generic Types with Reflection",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/how-to-examine-and-instantiate-generic-types-with-reflection",
                                "external": true
                            },
                            {
                                "name": "Type Class",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.type?view=net-7.0",
                                "external": true
                            },
                            {
                                "name": "Dynamically Loading and Using Types (the section InvokeMember and CreateInstance)",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/dynamically-loading-and-using-types#invokemember-and-createinstance",
                                "external": true
                            },
                            {
                                "name": "Object.GetType Method",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-7.0",
                                "external": true
                            },
                            {
                                "name": 'Type-testing operators and cast expressions - is, as, typeof and casts (the section "typeof operator")',
                                "url": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast#typeof-operator",
                                "external": true
                            },
                            {
                                "name": "BindingFlags Enum",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.bindingflags?view=net-7.0",
                                "external": true
                            }
                        ]
                    }
                },
                {
                    "id": "additional-resources",
                    "title": "Additional Resources",
                    "type": "links",
                    "content": {
                        "text": "Master reflection with these comprehensive resources and documentation.",
                        "links": [
                            {
                                "name": "MethodBase Class",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.methodbase?view=net-7.0",
                                "external": true
                            },
                            {
                                "name": "CLR Inside Out: Reflection on Reflection",
                                "url": "https://learn.microsoft.com/en-us/archive/msdn-magazine/2007/june/clr-inside-out-reflections-on-reflection",
                                "external": true
                            }
                        ]
                    }
                },
                {
                    "id": "downloadable-resources",
                    "title": "Downloadable Resources",
                    "type": "downloads",
                    "content": {
                        "text": "Download these resources to enhance your reflection knowledge and skills.",
                        "downloads": [
                            {
                                "filename": "reflection-cheatsheet.pdf",
                                "displayName": "C# Reflection Cheatsheet",
                                "size": "2.1 MB",
                                "type": "pdf",
                                "description": "Quick reference guide for common reflection operations"
                            },
                            {
                                "filename": "reflection-examples.zip",
                                "displayName": "Reflection Code Examples",
                                "size": "1.8 MB",
                                "type": "zip",
                                "description": "Complete source code examples demonstrating reflection usage"
                            },
                            {
                                "filename": "performance-guide.pdf",
                                "displayName": "Reflection Performance Guide",
                                "size": "1.2 MB",
                                "type": "pdf",
                                "description": "Best practices for optimizing reflection performance"
                            }
                        ]
                    }
                },
                {
                    "id": "visual-examples",
                    "title": "Visual Examples",
                    "type": "images",
                    "content": {
                        "text": "Explore reflection concepts through visual diagrams and code examples.",
                        "images": [
                            {
                                "src": "../assets/Reflection_Insights.png",
                                "alt": "Reflection Insights",
                                "title": "Reflection Insights",
                                "description": "Information regarding better usage of reflection."
                            },
                            {
                                "src": "https://picsum.photos/400/300?random=20",
                                "alt": "Reflection Type Hierarchy",
                                "title": "Reflection Type Hierarchy",
                                "description": "Visual representation of .NET type hierarchy and reflection access patterns"
                            },
                            {
                                "src": "https://picsum.photos/400/300?random=21",
                                "alt": "Assembly Loading Process",
                                "title": "Assembly Loading Process",
                                "description": "Step-by-step diagram of how assemblies are loaded and inspected"
                            },
                            {
                                "src": "https://picsum.photos/400/300?random=22",
                                "alt": "Dynamic Method Invocation",
                                "title": "Dynamic Method Invocation",
                                "description": "Flow chart showing dynamic method invocation using reflection"
                            },
                            {
                                "src": "https://picsum.photos/400/300?random=23",
                                "alt": "Attribute Inspection",
                                "title": "Attribute Inspection",
                                "description": "Code example demonstrating custom attribute inspection"
                            }
                        ]
                    }
                },
                {
                    "id": "advanced-topics",
                    "title": "Advanced Reflection Techniques",
                    "type": "mixed",
                    "content": {
                        "text": "Dive deeper into advanced reflection scenarios and optimization techniques.",
                        "subsections": [
                            {
                                "title": "Emit and Dynamic Code Generation",
                                "text": "Learn how to generate code at runtime using System.Reflection.Emit namespace for maximum performance."
                            }
                        ],
                        "links": [
                            {
                                "name": "System.Reflection.Emit",
                                "url": "https://docs.microsoft.com/en-us/dotnet/api/system.reflection.emit",
                                "external": true
                            },
                            {
                                "name": "Expression Trees",
                                "url": "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/expression-trees/",
                                "external": true
                            }
                        ],
                        "downloads": [
                            {
                                "filename": "emit-examples.zip",
                                "displayName": "IL Emit Code Examples",
                                "size": "3.2 MB",
                                "type": "zip",
                                "description": "Advanced examples using Reflection.Emit for code generation"
                            }
                        ],
                        "images": [
                            {
                                "src": "https://picsum.photos/400/300?random=24",
                                "alt": "IL Code Generation",
                                "title": "IL Code Generation Process",
                                "description": "Visualization of Intermediate Language code generation workflow"
                            }
                        ]
                    }
                }
            ]
        },
        "json.html": {
            "title": "JSON",
            "icon": {
                "type": "material",
                "name": "data_object"
            },
            "breadcrumb": {
                "category": "C# Advanced",
                "page": "JSON"
            },
            "sections": [
                {
                    "id": "json-basics",
                    "title": "JSON in C#",
                    "type": "content",
                    "content": {
                        "text": "JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write. In C#, there are several ways to work with JSON data.",
                        "subsections": [
                            {
                                "title": "Popular JSON Libraries",
                                "text": "Newtonsoft.Json and System.Text.Json are the most commonly used libraries for JSON processing in .NET applications."
                            }
                        ]
                    }
                },
                {
                    "id": "json-libraries",
                    "title": "JSON Libraries & Tools",
                    "type": "links",
                    "content": {
                        "text": "Essential libraries and tools for working with JSON in C#.",
                        "links": [
                            {
                                "name": "Newtonsoft.Json (Json.NET)",
                                "url": "https://www.newtonsoft.com/json",
                                "external": true
                            },
                            {
                                "name": "System.Text.Json",
                                "url": "https://docs.microsoft.com/en-us/dotnet/api/system.text.json",
                                "external": true
                            },
                            {
                                "name": "JSON Schema .NET",
                                "url": "https://github.com/gregsdennis/json-everything",
                                "external": true
                            }
                        ]
                    }
                },
                {
                    "id": "json-resources",
                    "title": "JSON Resources",
                    "type": "downloads",
                    "content": {
                        "text": "Download comprehensive guides and examples for JSON processing.",
                        "downloads": [
                            {
                                "filename": "json-guide.pdf",
                                "displayName": "Complete JSON Guide for C#",
                                "size": "2.8 MB",
                                "type": "pdf",
                                "description": "Comprehensive guide covering both Newtonsoft.Json and System.Text.Json"
                            },
                            {
                                "filename": "json-examples.zip",
                                "displayName": "JSON Code Examples",
                                "size": "1.5 MB",
                                "type": "zip",
                                "description": "Sample code for serialization, deserialization, and custom converters"
                            }
                        ]
                    }
                }
            ]
        }
    }
};

// Dynamic Subpage Content Generator
class SubpageContentGenerator {
    constructor() {
        this.currentPageConfig = null;
        this.pageName = this.getCurrentPageName();
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        return path.split('/').pop();
    }

    async init() {
        try {
            await this.loadPageConfig();
            if (this.currentPageConfig) {
                this.generatePageContent();
            }
        } catch (error) {
            console.error('Error initializing subpage content:', error);
        }
    }

    async loadPageConfig() {
        if (window.subpageContentConfig && window.subpageContentConfig.pages) {
            this.currentPageConfig = window.subpageContentConfig.pages[this.pageName];
            if (this.currentPageConfig) {
                return;
            }
        }
        
        console.warn('No content configuration found for page:', this.pageName);
    }

    generatePageContent() {
        this.updatePageTitle();
        this.updateBreadcrumb();
        this.generateSections();
    }

    updatePageTitle() {
        const titleElement = document.querySelector('h1');
        if (titleElement && this.currentPageConfig.title) {
            const iconHTML = this.createIconHTML(this.currentPageConfig.icon);
            titleElement.innerHTML = `${iconHTML} ${this.currentPageConfig.title}`;
        }
    }

    updateBreadcrumb() {
        const categoryElement = document.getElementById('current-category');
        const currentElement = document.querySelector('.breadcrumb .current');
        
        if (categoryElement && this.currentPageConfig.breadcrumb) {
            categoryElement.textContent = this.currentPageConfig.breadcrumb.category;
        }
        
        if (currentElement && this.currentPageConfig.breadcrumb) {
            currentElement.textContent = this.currentPageConfig.breadcrumb.page;
        }
    }

    generateSections() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        const existingSections = mainContent.querySelectorAll('.content-section');
        existingSections.forEach(section => section.remove());

        const relatedSection = mainContent.querySelector('.content-section:last-child');
        const insertPoint = relatedSection || mainContent;

        this.currentPageConfig.sections.forEach(sectionConfig => {
            const sectionHTML = this.createSectionHTML(sectionConfig);
            if (relatedSection) {
                relatedSection.insertAdjacentHTML('beforebegin', sectionHTML);
            } else {
                insertPoint.insertAdjacentHTML('beforeend', sectionHTML);
            }
        });
    }

    createSectionHTML(sectionConfig) {
        const content = sectionConfig.content;
        let sectionHTML = `
            <div class="content-section" id="${sectionConfig.id}">
                <h2>${sectionConfig.title}</h2>
        `;

        if (content.text) {
            sectionHTML += `<p>${content.text}</p>`;
        }

        switch (sectionConfig.type) {
            case 'content':
                sectionHTML += this.createContentHTML(content);
                break;
            case 'links':
                sectionHTML += this.createLinksHTML(content);
                break;
            case 'downloads':
                sectionHTML += this.createDownloadsHTML(content);
                break;
            case 'images':
                sectionHTML += this.createImagesHTML(content);
                break;
            case 'mixed':
                sectionHTML += this.createMixedHTML(content);
                break;
        }

        sectionHTML += '</div>';
        return sectionHTML;
    }

    createContentHTML(content) {
        let html = '';
        
        if (content.subsections) {
            content.subsections.forEach(subsection => {
                html += `
                    <h3>${subsection.title}</h3>
                    <p>${subsection.text}</p>
                `;
            });
        }
        
        return html;
    }

    createLinksHTML(content) {
        if (!content.links) return '';
        
        let html = '<div class="resource-links">';
        content.links.forEach(link => {
            const target = link.external ? ' target="_blank"' : '';
            html += `<a href="${link.url}"${target}>${link.name}</a>`;
        });
        html += '</div>';
        
        return html;
    }

    createDownloadsHTML(content) {
        if (!content.downloads) return '';
        
        let html = '';
        content.downloads.forEach(download => {
            const iconClass = this.getFileIconClass(download.type);
            html += `
                <div class="download-item" data-filename="${download.filename}">
                    <div class="file-icon ${download.type}">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="file-details">
                        <div class="file-name">${download.displayName}</div>
                        <div class="file-size">${download.size}</div>
                    </div>
                </div>
            `;
        });
        
        return html;
    }

    createImagesHTML(content) {
        if (!content.images) return '';
        
        let html = '<div class="image-gallery">';
        content.images.forEach(image => {
            html += `
                <div class="image-item">
                    <img src="${image.src}" alt="${image.alt}" title="${image.title}">
                    <div class="image-overlay">${image.title}</div>
                </div>
            `;
        });
        html += '</div>';
        
        return html;
    }

    createMixedHTML(content) {
        let html = '';
        
        if (content.subsections) {
            html += this.createContentHTML(content);
        }
        
        if (content.links) {
            html += this.createLinksHTML(content);
        }
        
        if (content.downloads) {
            html += this.createDownloadsHTML(content);
        }
        
        if (content.images) {
            html += this.createImagesHTML(content);
        }
        
        return html;
    }

    createIconHTML(icon) {
        if (!icon) return '';
        
        if (icon.type === 'material') {
            return `<span class="material-symbols-outlined">${icon.name}</span>`;
        } else if (icon.type === 'fontawesome') {
            return `<i class="${icon.name}"></i>`;
        }
        return '<i class="fas fa-circle"></i>';
    }

    getFileIconClass(type) {
        const iconMap = {
            'pdf': 'fas fa-file-pdf',
            'zip': 'fas fa-file-archive',
            'doc': 'fas fa-file-word',
            'docx': 'fas fa-file-word',
            'txt': 'fas fa-file-alt',
            'code': 'fas fa-file-code'
        };
        return iconMap[type] || 'fas fa-file';
    }

    getPageConfig(pageName) {
        return window.subpageContentConfig?.pages?.[pageName] || null;
    }
}

// Initialize the subpage content generator when the page loads
let subpageContentGenerator;

document.addEventListener('DOMContentLoaded', async () => {
    if (window.location.href.includes('/pages/')) {
        subpageContentGenerator = new SubpageContentGenerator();
        await subpageContentGenerator.init();
        window.subpageContentGenerator = subpageContentGenerator;
    }
});

// SubpageContentAPI for external use
window.SubpageContentAPI = {
    getPageConfig(pageName) {
        return window.subpageContentConfig?.pages?.[pageName] || null;
    },

    getCurrentPageConfig() {
        const pageName = window.location.pathname.split('/').pop();
        return this.getPageConfig(pageName);
    },

    addPageConfig(pageName, config) {
        if (!window.subpageContentConfig) {
            window.subpageContentConfig = { pages: {} };
        }
        
        window.subpageContentConfig.pages[pageName] = config;
        
        if (window.location.pathname.split('/').pop() === pageName && window.subpageContentGenerator) {
            window.subpageContentGenerator.currentPageConfig = config;
            window.subpageContentGenerator.generatePageContent();
        }
        
        return true;
    },

    exportAsJSON() {
        return JSON.stringify(window.subpageContentConfig, null, 2);
    },

    importFromJSON(jsonString) {
        try {
            const config = JSON.parse(jsonString);
            if (config.pages && typeof config.pages === 'object') {
                window.subpageContentConfig = config;
                
                if (window.subpageContentGenerator) {
                    window.subpageContentGenerator.init();
                }
                
                return true;
            } else {
                console.error('Invalid JSON structure. Must have a "pages" object.');
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
    module.exports = SubpageContentGenerator;
}