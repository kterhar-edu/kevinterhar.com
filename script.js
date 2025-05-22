// This script handles any custom functionality needed for the portfolio site
document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap's tab functionality is handled by their JS library
    // This file is mostly for any additional custom functionality
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Optional: Add active class to current tab based on URL hash
    if (window.location.hash) {
        const hash = window.location.hash;
        const tabId = hash.replace('-tab-pane', '-tab');
        const tab = document.querySelector(tabId);
        
        if (tab) {
            const bootstrapTab = new bootstrap.Tab(tab);
            bootstrapTab.show();
        }
    }
    
    // Update URL hash when tab changes (for bookmarking)
    const tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');
    tabEls.forEach(tabEl => {
        tabEl.addEventListener('shown.bs.tab', function(event) {
            const targetPaneId = event.target.getAttribute('data-bs-target');
            history.replaceState(null, null, targetPaneId);
        });
    });

    // ===== MOBILE NAVIGATION DROPDOWN FUNCTIONALITY =====
    
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    const currentTabText = document.getElementById('currentTabText');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Only set up mobile navigation if elements exist
    if (mobileNavItems.length > 0 && currentTabText) {
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all mobile nav items
                mobileNavItems.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Update dropdown button text
                currentTabText.textContent = this.textContent;
                
                // Hide all tab panes
                tabPanes.forEach(pane => {
                    pane.classList.remove('show', 'active');
                });
                
                // Show selected tab pane
                const targetTab = this.getAttribute('data-tab');
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                }
                
                // Close the dropdown
                const dropdownButton = document.getElementById('mobileNavDropdown');
                if (dropdownButton) {
                    const dropdown = bootstrap.Dropdown.getInstance(dropdownButton);
                    if (dropdown) {
                        dropdown.hide();
                    }
                }
                
                // Update URL hash for mobile navigation too
                history.replaceState(null, null, '#' + targetTab);
            });
        });
        
        // Sync desktop tabs with mobile dropdown when desktop tabs are clicked
        const desktopTabs = document.querySelectorAll('.nav-tabs .nav-link');
        desktopTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-bs-target');
                const tabName = this.textContent;
                
                // Update mobile dropdown to match
                if (currentTabText) {
                    currentTabText.textContent = tabName;
                }
                
                // Update active state in mobile dropdown
                mobileNavItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-tab') === targetId.replace('#', '')) {
                        item.classList.add('active');
                    }
                });
            });
        });

        // Handle URL hash for mobile navigation on page load
        if (window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            const matchingMobileItem = document.querySelector(`.mobile-nav-item[data-tab="${hash}"]`);
            if (matchingMobileItem) {
                // Update mobile dropdown
                mobileNavItems.forEach(item => item.classList.remove('active'));
                matchingMobileItem.classList.add('active');
                currentTabText.textContent = matchingMobileItem.textContent;
            }
        }
    }
});