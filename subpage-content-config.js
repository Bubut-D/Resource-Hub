// Enhanced Subpage Content Configuration with Stylish Links
// This file contains all content definitions for subpages with new link display options

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
                    "type": "stylish-links", // New type for enhanced styling
                    "content": {
                        "text": "Master reflection with these comprehensive resources and documentation.",
                        "links": [
                            {
                                "name": "Reflection in .NET",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection",
                                "external": true,
                                "description": "Complete guide to reflection fundamentals in the .NET Framework",
                                "category": "Documentation",
                                "icon": {
                                    "type": "material",
                                    "name": "book"
                                }
                            },
                            {
                                "name": "Viewing Type Information",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/viewing-type-information",
                                "external": true,
                                "description": "Learn how to examine types and their members at runtime",
                                "category": "Tutorial",
                                "icon": {
                                    "type": "material",
                                    "name": "visibility"
                                }
                            },
                            {
                                "name": "Reflection and Generic Types",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection-and-generic-types",
                                "external": true,
                                "description": "Working with generic types using reflection techniques",
                                "category": "Advanced",
                                "icon": {
                                    "type": "material",
                                    "name": "code"
                                }
                            },
                            {
                                "name": "Type Class",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.type?view=net-7.0",
                                "external": true,
                                "description": "API reference for the System.Type class",
                                "category": "API Reference",
                                "icon": {
                                    "type": "material",
                                    "name": "api"
                                }
                            },
                            {
                                "name": "Object.GetType Method",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-7.0",
                                "external": true,
                                "description": "Gets the Type of the current instance",
                                "category": "API Reference",
                                "icon": {
                                    "type": "material",
                                    "name": "get_app"
                                }
                            },
                            {
                                "name": "BindingFlags Enum",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.bindingflags?view=net-7.0",
                                "external": true,
                                "description": "Specifies flags that control binding and invocation",
                                "category": "API Reference",
                                "icon": {
                                    "type": "material",
                                    "name": "flag"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "additional-resources",
                    "title": "Additional Resources",
                    "type": "links", // Keep old style for comparison
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
                                "external": true,
                                "description": "Dynamic code generation at runtime",
                                "category": "Advanced",
                                "icon": {
                                    "type": "material",
                                    "name": "build"
                                }
                            },
                            {
                                "name": "Expression Trees",
                                "url": "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/expression-trees/",
                                "external": true,
                                "description": "Represent code as data structures",
                                "category": "Advanced",
                                "icon": {
                                    "type": "material",
                                    "name": "account_tree"
                                }
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
        "reflection.html": {
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
                    "id": "reflection-overview",
                    "title": "Understanding Reflection in C#",
                    "type": "content",
                    "content": {
                        "text": "Reflection in C# is a powerful feature that allows you to inspect and interact with object types at runtime. It provides the ability to examine assemblies, modules, and types, dynamically create instances, invoke methods, and access fields and properties without knowing them at compile time.",
                        "subsections": [
                            {
                                "title": "Core Benefits",
                                "text": "Reflection enables dynamic programming scenarios such as creating flexible frameworks, implementing serialization, building dependency injection containers, and developing tools that work with unknown types at compile time."
                            },
                            {
                                "title": "Performance Considerations",
                                "text": "While powerful, reflection operations are generally slower than direct code access. Understanding when and how to use reflection efficiently is crucial for maintaining application performance."
                            }
                        ]
                    }
                },
                {
                    "id": "reflection-fundamentals",
                    "title": "Reflection Fundamentals",
                    "type": "stylish-links",
                    "content": {
                        "text": "Master the core concepts and APIs that form the foundation of reflection in .NET.",
                        "links": [
                            {
                                "name": "Reflection in .NET",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection",
                                "external": true,
                                "description": "Complete guide to reflection fundamentals and architecture in the .NET Framework",
                                "category": "Core Concepts",
                                "icon": {
                                    "type": "material",
                                    "name": "foundation"
                                }
                            },
                            {
                                "name": "System.Type Class",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.type?view=net-7.0",
                                "external": true,
                                "description": "The fundamental class representing type declarations in the .NET type system",
                                "category": "API Reference",
                                "icon": {
                                    "type": "material",
                                    "name": "data_object"
                                }
                            },
                            {
                                "name": "Object.GetType Method",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.object.gettype?view=net-7.0",
                                "external": true,
                                "description": "Gets the Type of the current instance - your gateway to runtime type information",
                                "category": "Core Methods",
                                "icon": {
                                    "type": "material",
                                    "name": "get_app"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "type-inspection",
                    "title": "Type Inspection & Information",
                    "type": "stylish-links",
                    "content": {
                        "text": "Learn how to examine types and their members to understand object structure at runtime.",
                        "links": [
                            {
                                "name": "Viewing Type Information",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/viewing-type-information",
                                "external": true,
                                "description": "Comprehensive guide to examining types and discovering their members at runtime",
                                "category": "Type Analysis",
                                "icon": {
                                    "type": "material",
                                    "name": "visibility"
                                }
                            },
                            {
                                "name": "BindingFlags Enumeration",
                                "url": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.bindingflags?view=net-7.0",
                                "external": true,
                                "description": "Control how reflection searches for and binds to members with precise filtering options",
                                "category": "Member Access",
                                "icon": {
                                    "type": "material",
                                    "name": "tune"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "generic-types-reflection",
                    "title": "Working with Generic Types",
                    "type": "mixed",
                    "content": {
                        "text": "Generic types present unique challenges in reflection scenarios. Understanding how to work with generic type definitions, constructed generic types, and type parameters is essential for advanced reflection usage.",
                        "subsections": [
                            {
                                "title": "Generic Type Definitions vs Constructed Types",
                                "text": "Learn the difference between generic type definitions (like List<T>) and constructed generic types (like List<string>), and how to work with both using reflection."
                            }
                        ],
                        "links": [
                            {
                                "name": "Reflection and Generic Types",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection-and-generic-types",
                                "external": true,
                                "description": "Master the complexities of using reflection with generic types and type parameters",
                                "category": "Advanced Topics",
                                "icon": {
                                    "type": "material",
                                    "name": "code"
                                }
                            },
                            {
                                "name": "Examine and Instantiate Generic Types",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/how-to-examine-and-instantiate-generic-types-with-reflection",
                                "external": true,
                                "description": "Step-by-step guide to examining and creating instances of generic types using reflection",
                                "category": "How-To Guide",
                                "icon": {
                                    "type": "material",
                                    "name": "construction"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "dynamic-operations",
                    "title": "Dynamic Loading and Invocation",
                    "type": "mixed",
                    "content": {
                        "text": "Reflection enables dynamic loading of types and invocation of members at runtime, opening up possibilities for plugin architectures, configuration-driven behavior, and runtime code generation.",
                        "subsections": [
                            {
                                "title": "InvokeMember and CreateInstance",
                                "text": "These powerful methods allow you to call methods, access properties, and create object instances dynamically without compile-time knowledge of the types involved."
                            },
                            {
                                "title": "Type Operators in Reflection Context",
                                "text": "Understanding how typeof, is, and as operators work in conjunction with reflection provides a complete picture of runtime type operations."
                            }
                        ],
                        "links": [
                            {
                                "name": "Dynamically Loading and Using Types",
                                "url": "https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/dynamically-loading-and-using-types#invokemember-and-createinstance",
                                "external": true,
                                "description": "Learn to dynamically load assemblies and create instances with InvokeMember and CreateInstance",
                                "category": "Dynamic Operations",
                                "icon": {
                                    "type": "material",
                                    "name": "dynamic_form"
                                }
                            },
                            {
                                "name": "Type-testing Operators",
                                "url": "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast#typeof-operator",
                                "external": true,
                                "description": "Master typeof, is, as, and cast expressions for comprehensive type testing and conversion",
                                "category": "Type Operations",
                                "icon": {
                                    "type": "material",
                                    "name": "compare"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "reflection-best-practices",
                    "title": "Best Practices & Performance",
                    "type": "content",
                    "content": {
                        "text": "Following established best practices when using reflection ensures your applications remain performant, secure, and maintainable while leveraging reflection's powerful capabilities.",
                        "subsections": [
                            {
                                "title": "Implement Caching for Reflection",
                                "text": "If you need to use reflection repeatedly, consider caching the retrieved type or member information to reduce overhead, which can significantly improve performance."
                            },
                            {
                                "title": "Handle Errors Gracefully",
                                "text": "Wrap reflection-related code in appropriate error-handling mechanisms. Reflection can throw various exceptions, such as TypeLoadException or MethodAccessException. Handle these exceptions gracefully to ensure your application remains stable."
                            },
                            {
                                "title": "Prioritize Security Considerations",
                                "text": "Be cautious when using reflection; it can potentially bypass access modifiers and security mechanisms. Avoid exposing sensitive data or methods that should not be accessible outside their intended scope."
                            },
                            {
                                "title": "Test Reflection-Based Code Thoroughly",
                                "text": "Test reflection-based code thoroughly. Create unit tests that cover various scenarios to ensure reflection-related operations behave as expected."
                            }
                        ]
                    }
                },
                {
                    "id": "additional-resources",
                    "title": "Extended Learning Resources",
                    "type": "links",
                    "content": {
                        "text": "Expand your reflection knowledge with these specialized resources and deep-dive materials.",
                        "links": [
                            {
                                "name": "MethodBase Class Reference",
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
                    "id": "visual-examples",
                    "title": "Visual Learning & Examples",
                    "type": "images",
                    "content": {
                        "text": "Explore reflection concepts through visual diagrams and practical examples that demonstrate key concepts.",
                        "images": [
                            {
                                "src": "../assets/Reflection_Insights.png",
                                "alt": "Reflection Best Practices and Insights",
                                "title": "Reflection Insights",
                                "description": "Expert recommendations and best practices for implementing caching, error handling, security considerations, and thorough testing in reflection-based code."
                            }
                        ]
                    }
                }
            ]
        }
    }
};

// Enhanced Dynamic Subpage Content Generator
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
            case 'stylish-links':
                sectionHTML += this.createStylishLinksHTML(content);
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

    createStylishLinksHTML(content) {
        if (!content.links) return '';
        
        let html = '<div class="stylish-links-container">';
        
        content.links.forEach(link => {
            const target = link.external ? ' target="_blank"' : '';
            const iconHTML = this.createIconHTML(link.icon);
            const category = link.category || 'Resource';
            const description = link.description || 'Click to learn more';
            
            html += `
                <a href="${link.url}" class="stylish-link-card" data-category="${category}"${target}>
                    <div class="stylish-link-header">
                        <div class="stylish-link-icon">
                            ${iconHTML}
                        </div>
                        <div class="stylish-link-title-area">
                            <h3 class="stylish-link-title">${link.name}</h3>
                            <span class="stylish-link-category">${category}</span>
                        </div>
                    </div>
                    <p class="stylish-link-description">${description}</p>
                    ${link.external ? '<div class="stylish-link-external"><i class="fas fa-external-link-alt"></i></div>' : ''}
                </a>
            `;
        });
        
        html += '</div>';
        return html;
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
            // Check if links have enhanced properties for stylish display
            const hasEnhancedLinks = content.links.some(link => 
                link.description || link.category || link.icon
            );
            
            if (hasEnhancedLinks) {
                html += this.createStylishLinksHTML(content);
            } else {
                html += this.createLinksHTML(content);
            }
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
        if (!icon) return '<i class="fas fa-link"></i>';
        
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