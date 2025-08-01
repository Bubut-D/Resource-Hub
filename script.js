// =============================================================================
// CORE NAVIGATION FUNCTIONS
// =============================================================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    setTimeout(() => {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.style.transitionDelay = sidebar.classList.contains('open') ? '0.2s' : '0s';
        }
    }, 50);
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

function toggleSidebarSection(header) {
    const section = header.parentElement;
    const allSections = document.querySelectorAll('.sidebar-section');
    
    allSections.forEach(s => {
        if (s !== section) s.classList.add('collapsed');
    });
    
    section.classList.toggle('collapsed');
}

function toggleModule(header) {
    const module = header.parentElement;
    const allModules = document.querySelectorAll('.module');
    
    allModules.forEach(m => {
        if (m !== module) m.classList.add('collapsed');
    });
    
    module.classList.toggle('collapsed');
}

// =============================================================================
// MODAL FUNCTIONS
// =============================================================================

function showModal(src, title = '', description = '') {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImg.src = src;
    modalImg.alt = title;
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = description || 'Click to download this image';
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    modal.dataset.currentImage = src;
    modal.dataset.currentTitle = title;
    
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
    
    document.body.style.overflow = '';
}

function downloadImage() {
    const modal = document.getElementById('imageModal');
    const src = modal.dataset.currentImage;
    const title = modal.dataset.currentTitle || 'image';
    
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}_${Date.now()}.jpg`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// =============================================================================
// DOWNLOAD FUNCTIONS
// =============================================================================

function downloadFile(filename, actualPath = null) {
    const downloadItems = document.querySelectorAll('.download-item');
    downloadItems.forEach(item => {
        if (item.dataset.filename === filename) {
            const originalContent = item.innerHTML;
            item.innerHTML = `
                <div class="spinner"></div>
                <div class="file-details">
                    <div class="file-name">Preparing download...</div>
                    <div class="file-size">Please wait</div>
                </div>
            `;
            
            setTimeout(() => {
                item.innerHTML = originalContent;
            }, 1500);
        }
    });
    
    if (actualPath) {
        const link = document.createElement('a');
        link.href = actualPath;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        showNotification(`Download started: ${filename}`, 'success');
    }
}

// =============================================================================
// THEME MANAGEMENT SYSTEM
// =============================================================================

class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        this.callbacks = [];
        this.initializeTheme();
        this.createThemeToggle();
        this.bindEvents();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    initializeTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggleIcon();
    }

    createThemeToggle() {
        if (document.querySelector('.theme-toggle')) return;

        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.setAttribute('title', 'Switch between light and dark mode');
        
        themeToggle.innerHTML = `
            <span class="icon sun-icon">☀️</span>
            <span class="icon moon-icon">🌙</span>
        `;

        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.appendChild(themeToggle);
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                this.toggleTheme();
            }
        });

        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    this.currentTheme = e.matches ? 'light' : 'dark';
                    this.applyTheme();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.storeTheme();
        this.animateToggle();
        this.notifyCallbacks();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggleIcon();
        this.updateMetaThemeColor();
    }

    storeTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }

    updateThemeToggleIcon() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        
        if (this.currentTheme === 'light') {
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0deg) scale(1)';
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-180deg) scale(0)';
        } else {
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(180deg) scale(0)';
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0deg) scale(1)';
        }
    }

    updateMetaThemeColor() {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        metaThemeColor.content = this.currentTheme === 'light' ? '#ffffff' : '#0f0f0f';
    }

    animateToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.style.transform = 'translateX(-50%) scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'translateX(-50%) scale(1)';
            }, 100);
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            this.currentTheme = theme;
            this.applyTheme();
            this.storeTheme();
            this.notifyCallbacks();
        }
    }

    onThemeChange(callback) {
        this.callbacks.push(callback);
    }

    notifyCallbacks() {
        this.callbacks.forEach(callback => callback(this.currentTheme));
    }
}

// Theme utility functions
const ThemeUtils = {
    isDarkMode() {
        return document.documentElement.getAttribute('data-theme') === 'dark';
    },

    isLightMode() {
        return document.documentElement.getAttribute('data-theme') === 'light';
    },

    getThemeColor(lightColor, darkColor) {
        return this.isLightMode() ? lightColor : darkColor;
    },

    onThemeChange(callback) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    callback(document.documentElement.getAttribute('data-theme'));
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return observer;
    }
};

// =============================================================================
// NOTIFICATION SYSTEM
// =============================================================================

function showNotification(message, type = 'info', duration = 3000) {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: var(--bg-gradient-primary);
        color: var(--text-color); padding: 15px 20px; border-radius: var(--radius-medium);
        box-shadow: var(--shadow-medium); z-index: 10000; max-width: 400px;
        animation: slideInRight 0.3s ease; display: flex; align-items: center;
        justify-content: space-between; gap: 15px;
        border-left: 4px solid var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'}-color);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || icons.info;
}

// =============================================================================
// KEYBOARD SHORTCUTS
// =============================================================================

function showKeyboardShortcuts() {
    const shortcuts = `
        <div class="shortcuts-modal">
            <h3><i class="fas fa-keyboard"></i> Keyboard Shortcuts</h3>
            <div class="shortcuts-list">
                <div class="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>
                    <span>Toggle theme</span>
                </div>
                <div class="shortcut-item">
                    <kbd>M</kbd>
                    <span>Toggle sidebar</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Esc</kbd>
                    <span>Close modal/sidebar</span>
                </div>
                <div class="shortcut-item">
                    <kbd>?</kbd>
                    <span>Show this help</span>
                </div>
            </div>
            <button class="btn btn-primary" onclick="hideModal()">Got it!</button>
        </div>
    `;
    
    const modal = document.getElementById('imageModal');
    const originalContent = modal.innerHTML;
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="hideModal()">×</button>
            ${shortcuts}
        </div>
    `;
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    const originalHideModal = window.hideModal;
    window.hideModal = function() {
        modal.innerHTML = originalContent;
        originalHideModal();
        window.hideModal = originalHideModal;
    };
}

// =============================================================================
// EVENT LISTENERS AND INITIALIZATION
// =============================================================================

let themeManager;

document.addEventListener('DOMContentLoaded', function() {
    themeManager = new ThemeManager();
    
    document.querySelectorAll('.module, .sidebar-section').forEach(element => {
        element.classList.add('collapsed');
    });
    
    document.querySelectorAll('.image-item img').forEach(img => {
        img.addEventListener('click', function() {
            const src = this.src;
            const title = this.alt || this.parentElement.querySelector('.image-overlay')?.textContent || 'Image';
            showModal(src, title);
        });
    });
    
    document.querySelectorAll('.download-item').forEach(item => {
        item.addEventListener('click', function() {
            const filename = this.dataset.filename || this.querySelector('.file-name').textContent;
            const filepath = this.dataset.filepath || null;
            downloadFile(filename, filepath);
        });
    });
    
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) hideModal();
        });
    }
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });
    }
    
    themeManager.onThemeChange((newTheme) => {
        const themeIndicator = document.querySelector('.theme-indicator small');
        if (themeIndicator) {
            const icon = newTheme === 'light' ? '☀️' : '🌙';
            themeIndicator.innerHTML = `${icon} <strong>Current theme:</strong> ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode. Press <kbd>Ctrl+Shift+T</kbd> to toggle.`;
        }
    });
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    showNotification(`Welcome! Currently using ${currentTheme} theme`, 'info', 4000);
});

// Keyboard event handlers
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('imageModal');
        const sidebar = document.getElementById('sidebar');
        
        if (modal && modal.classList.contains('show')) {
            hideModal();
        } else if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    }
    
    if (e.key === 'm' || e.key === 'M') {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
            e.preventDefault();
            toggleSidebar();
        }
    }
    
    if (e.key === '?' && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        showKeyboardShortcuts();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Image lazy loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 5px;
        border-radius: var(--radius-small);
        transition: all var(--transition-fast);
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--text-color);
    }
    
    .shortcuts-list {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .shortcut-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--border-light);
    }
    
    .shortcut-item:last-child {
        border-bottom: none;
    }
    
    kbd {
        background: var(--bg-accent);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 2px 6px;
        font-size: 0.9em;
        font-family: monospace;
        color: var(--text-color);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
`;

document.head.appendChild(notificationStyles);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, ThemeUtils };
} else if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
    window.ThemeUtils = ThemeUtils;
}

function initializeThemeSystem() {
    if (!themeManager) {
        themeManager = new ThemeManager();
    }
}