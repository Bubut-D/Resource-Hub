// Dynamic Glistening Animation Based on HORIZONTAL Mouse Direction Only - FIXED VERSION
// Only applies to main content page links, not sidebar links

class DynamicGlisteningEffect {
    constructor() {
        this.elements = [];
        this.previousMouseX = 0;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupElements());
        } else {
            this.setupElements();
        }
        
        // Track horizontal mouse movement globally
        this.setupMouseTracking();
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.previousMouseX = e.clientX;
        });
    }

    setupElements() {
        // Target ONLY main content page links, exclude sidebar links
        const selectors = [
            '.main-content .page-link',  // Only page links inside main content
            '.module-header',            // Module headers (but not sidebar headers)
            '.main-content .module-header' // Be explicit about main content module headers
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                // Double-check that we're not adding to sidebar elements
                if (!element.closest('.sidebar')) {
                    this.addGlisteningEffect(element);
                }
            });
        });

        // Set up a mutation observer to handle dynamically added elements
        this.observeNewElements();
    }

    addGlisteningEffect(element) {
        // Skip if already processed
        if (element.dataset.glisteningSetup) return;
        element.dataset.glisteningSetup = 'true';

        // Store the element for tracking
        this.elements.push(element);

        // Add necessary CSS classes
        element.classList.add('dynamic-glistening');

        // Store initial mouse position when element is first hovered
        let elementMouseX = 0;

        // Add event listeners
        element.addEventListener('mouseenter', (e) => {
            elementMouseX = e.clientX;
            this.handleMouseEnter(e, elementMouseX);
        });

        element.addEventListener('mouseleave', (e) => {
            this.handleMouseLeave(e, elementMouseX);
        });

        // Track mouse movement within the element to update direction
        element.addEventListener('mousemove', (e) => {
            const deltaX = e.clientX - elementMouseX;
            if (Math.abs(deltaX) > 5) { // Only update if significant movement
                elementMouseX = e.clientX;
            }
        });
    }

    handleMouseEnter(event, initialMouseX) {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX;
        const elementCenterX = rect.left + rect.width / 2;
        
        // Determine horizontal direction based on where mouse entered relative to element center
        const direction = mouseX < elementCenterX ? 'left-to-right' : 'right-to-left';
        
        // Remove any existing animation classes
        this.clearAnimationClasses(element);
        
        // Add the appropriate horizontal direction class
        element.classList.add(`glisten-${direction}`);
        
        // Store the last direction
        element.dataset.lastDirection = direction;
    }

    handleMouseLeave(event, lastMouseX) {
        const element = event.currentTarget;
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX;
        
        // Determine exit direction based on current mouse position relative to element
        let direction;
        if (mouseX < rect.left) {
            // Exiting from left side
            direction = 'right-to-left';
        } else if (mouseX > rect.right) {
            // Exiting from right side
            direction = 'left-to-right';
        } else {
            // Exiting from top or bottom, use last known horizontal direction
            direction = element.dataset.lastDirection || 'left-to-right';
        }
        
        // Remove any existing animation classes
        this.clearAnimationClasses(element);
        
        // Add the appropriate direction class for exit
        element.classList.add(`glisten-${direction}`);
        
        // Store the last direction
        element.dataset.lastDirection = direction;
    }

    clearAnimationClasses(element) {
        const classes = [
            'glisten-left-to-right',
            'glisten-right-to-left'
        ];
        element.classList.remove(...classes);
    }

    observeNewElements() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Only check main content elements, not sidebar
                        if (node.closest && !node.closest('.sidebar')) {
                            // Check if the node itself matches our selectors
                            const selectors = ['.main-content .page-link', '.module-header'];
                            selectors.forEach(selector => {
                                if (node.matches && node.matches(selector.replace('.main-content ', ''))) {
                                    // Make sure it's in main content
                                    if (node.closest('.main-content')) {
                                        this.addGlisteningEffect(node);
                                    }
                                }
                                // Check for child elements
                                if (node.querySelectorAll) {
                                    node.querySelectorAll(selector.replace('.main-content ', '')).forEach(element => {
                                        if (element.closest('.main-content') && !element.closest('.sidebar')) {
                                            this.addGlisteningEffect(element);
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Enhanced CSS for HORIZONTAL-ONLY dynamic glistening effect
function addDynamicGlisteningCSS() {
    const style = document.createElement('style');
    style.textContent = `
        /* Base setup for dynamic glistening elements - ONLY FOR MAIN CONTENT */
        .main-content .dynamic-glistening {
            position: relative;
            overflow: hidden;
        }

        .main-content .dynamic-glistening::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            transform: translateX(-100%);
            transition: none;
            z-index: 1;
            pointer-events: none;
        }

        /* HORIZONTAL ONLY - Left to right glistening - MAIN CONTENT ONLY */
        .main-content .dynamic-glistening.glisten-left-to-right::before {
            left: -100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            animation: glisteningLeftToRight 0.4s ease-out;
        }

        /* HORIZONTAL ONLY - Right to left glistening - MAIN CONTENT ONLY */
        .main-content .dynamic-glistening.glisten-right-to-left::before {
            left: 100%;
            background: linear-gradient(270deg, transparent, rgba(255, 255, 255, 0.15), transparent);
            animation: glisteningRightToLeft 0.4s ease-out;
        }

        /* HORIZONTAL ONLY Keyframe animations */
        @keyframes glisteningLeftToRight {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(200%);
            }
        }

        @keyframes glisteningRightToLeft {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-200%);
            }
        }

        /* Enhanced effect for main content page links */
        .main-content .page-link.dynamic-glistening::before {
            background: linear-gradient(90deg, transparent, rgba(168, 218, 220, 0.3), transparent);
        }

        .main-content .page-link.dynamic-glistening.glisten-right-to-left::before {
            background: linear-gradient(270deg, transparent, rgba(168, 218, 220, 0.3), transparent);
        }

        /* Enhanced effect for module headers in main content */
        .main-content .module-header.dynamic-glistening::before {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
        }

        .main-content .module-header.dynamic-glistening.glisten-right-to-left::before {
            background: linear-gradient(270deg, transparent, rgba(255, 255, 255, 0.12), transparent);
        }

        /* Light theme adjustments - MAIN CONTENT ONLY */
        [data-theme="light"] .main-content .dynamic-glistening::before {
            background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent);
        }

        [data-theme="light"] .main-content .dynamic-glistening.glisten-right-to-left::before {
            background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.08), transparent);
        }

        [data-theme="light"] .main-content .page-link.dynamic-glistening::before {
            background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.18), transparent);
        }

        [data-theme="light"] .main-content .page-link.dynamic-glistening.glisten-right-to-left::before {
            background: linear-gradient(270deg, transparent, rgba(37, 99, 235, 0.18), transparent);
        }

        /* Ensure the glistening effect appears above background but below text */
        .main-content .dynamic-glistening > * {
            position: relative;
            z-index: 2;
        }

        /* IMPORTANT: Disable the effect for sidebar elements completely */
        .sidebar .page-link::before,
        .sidebar .module-header::before,
        .sidebar .sidebar-header::before,
        .sidebar .dynamic-glistening::before {
            display: none !important;
        }

        /* Ensure sidebar elements don't get the dynamic glistening class */
        .sidebar .dynamic-glistening {
            position: static;
            overflow: visible;
        }

        /* Clean up after animation */
        .main-content .dynamic-glistening.glisten-left-to-right::before,
        .main-content .dynamic-glistening.glisten-right-to-left::before {
            animation-fill-mode: forwards;
        }

        /* No transition delays for instant effect */
        .main-content .dynamic-glistening::before {
            transition: none;
        }

        /* Enhanced visibility for the glistening effect */
        .main-content .dynamic-glistening:hover::before {
            opacity: 1;
        }
    `;

    document.head.appendChild(style);
}

// Horizontal-only direction detector
class HorizontalDirectionDetector {
    constructor() {
        this.previousMouseX = 0;
        this.tracking = false;
        this.setupMouseTracking();
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            if (this.tracking) {
                this.previousMouseX = e.clientX;
            }
        });

        // Start tracking when mouse is over any trackable element in main content only
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('dynamic-glistening') && 
                e.target.closest('.main-content') && 
                !e.target.closest('.sidebar')) {
                this.tracking = true;
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('dynamic-glistening')) {
                this.tracking = false;
            }
        });
    }

    getHorizontalDirection(event) {
        const currentX = event.clientX;
        const deltaX = currentX - this.previousMouseX;

        // Only consider horizontal movement, ignore vertical
        if (Math.abs(deltaX) > 2) { // Minimum threshold for direction change
            return deltaX > 0 ? 'left-to-right' : 'right-to-left';
        }
        
        // If no significant horizontal movement, return null
        return null;
    }
}

// Initialize the horizontal-only dynamic glistening effect
function initializeDynamicGlistening() {
    // Add the CSS
    addDynamicGlisteningCSS();
    
    // Initialize the effect
    const glisteningEffect = new DynamicGlisteningEffect();
    
    // Initialize the horizontal detector
    const horizontalDetector = new HorizontalDirectionDetector();
    
    // Make it globally accessible for debugging
    window.dynamicGlisteningEffect = glisteningEffect;
    window.horizontalDirectionDetector = horizontalDetector;
    
    // Clean up any existing glistening effects on sidebar elements immediately
    document.querySelectorAll('.sidebar .dynamic-glistening').forEach(element => {
        element.classList.remove('dynamic-glistening');
        // Remove event listeners by cloning and replacing the element
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    });

    console.log('Horizontal-only Dynamic Glistening Effect initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicGlistening);
} else {
    initializeDynamicGlistening();
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DynamicGlisteningEffect, HorizontalDirectionDetector };
} else if (typeof window !== 'undefined') {
    window.DynamicGlisteningEffect = DynamicGlisteningEffect;
    window.HorizontalDirectionDetector = HorizontalDirectionDetector;
}