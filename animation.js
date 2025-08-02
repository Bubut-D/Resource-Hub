// Simple Animation Functions - FIXED VERSION
// Focus on movement animations only - REMOVED CONFLICTING BUTTON POSITIONING

// Module toggle with auto-close and CSS-based fade-in animation
function toggleModule(header) {
    const currentModule = header.closest('.module');
    const isCurrentlyOpen = !currentModule.classList.contains('collapsed');
    
    // Close ALL other modules first
    const allModules = document.querySelectorAll('.module');
    allModules.forEach(module => {
        if (module !== currentModule) {
            module.classList.add('collapsed');
            // Reset content in other modules
            const otherContent = module.querySelectorAll('.module-body > *');
            otherContent.forEach(element => {
                element.classList.remove('animate-fade-in-up', 'animate-complete');
                element.classList.remove('delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800', 'delay-900', 'delay-1000');
            });
        }
    });
    
    // Toggle current module
    currentModule.classList.toggle('collapsed');
    
    // If opening, add CSS animation classes
    if (!isCurrentlyOpen) {
        const allContent = currentModule.querySelectorAll('.module-body > *');
        
        // Wait for module body to start opening (reduced delay for faster animation)
        setTimeout(() => {
            // Add CSS animation class to each element with staggered delays
            allContent.forEach((element, index) => {
                // Remove any existing classes
                element.classList.remove('animate-fade-in-up', 'animate-complete');
                element.classList.remove('delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800', 'delay-900', 'delay-1000');
                
                // Add delay class based on index (faster 75ms increments instead of 100ms)
                const delayValue = Math.min((index + 1) * 75, 750);
                const delayClass = `delay-${Math.ceil(delayValue / 100) * 100}`; // Round to nearest 100 for existing classes
                
                // Add animation class
                element.classList.add('animate-fade-in-up', delayClass);
                
                // After animation completes, mark as complete (faster timing)
                setTimeout(() => {
                    element.classList.add('animate-complete');
                    element.classList.remove('animate-fade-in-up', delayClass);
                }, 400 + delayValue); // Reduced animation duration to 400ms
            });
        }, 0); // No delay - animations start immediately!
    } else {
        // Reset when closing
        const allContent = currentModule.querySelectorAll('.module-body > *');
        allContent.forEach(element => {
            element.classList.remove('animate-fade-in-up', 'animate-complete');
            element.classList.remove('delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800', 'delay-900', 'delay-1000');
        });
    }
}

// Sidebar toggle with movement animation - FIXED VERSION
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebarSections = sidebar.querySelectorAll('.sidebar-section');
    
    sidebar.classList.toggle('open');
    
    if (sidebar.classList.contains('open')) {
        overlay.classList.add('active');
        
        // Remove any existing animation classes first
        sidebarSections.forEach(section => {
            section.classList.remove('animate-in');
        });
        
        // Start animations immediately - no delay
        setTimeout(() => {
            sidebarSections.forEach((section) => {
                // Add animation class to trigger CSS animation
                section.classList.add('animate-in');
            });
        }, 0); // No delay - start immediately
    } else {
        overlay.classList.remove('active');
        // Reset animations when closing
        sidebarSections.forEach(section => {
            section.classList.remove('animate-in');
        });
    }
}

// Close sidebar - FIXED VERSION with proper cleanup
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebarSections = sidebar.querySelectorAll('.sidebar-section');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    
    // Properly reset all sidebar section animations
    sidebarSections.forEach(section => {
        section.classList.remove('animate-in');
    });
}

// Sidebar section toggle with movement
function toggleSidebarSection(header) {
    const section = header.closest('.sidebar-section');
    const links = section.querySelectorAll('.sidebar-links a');
    
    section.classList.toggle('collapsed');
    
    // If opening, animate links sliding in
    if (!section.classList.contains('collapsed')) {
        setTimeout(() => {
            links.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(-30px)';
                link.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 50);
            });
        }, 100);
    } else {
        // Reset when closing
        links.forEach(link => {
            link.style.opacity = '';
            link.style.transform = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Make sure sidebar buttons are clickable
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const homeButton = document.querySelector('.home-button');
    
    if (sidebarToggle) {
        sidebarToggle.style.zIndex = '1002';
        sidebarToggle.style.position = 'relative';
    }
    if (homeButton) {
        homeButton.style.zIndex = '1002';
        // Remove this line that was causing the positioning issue:
        // homeButton.style.position = 'relative';
    }
});