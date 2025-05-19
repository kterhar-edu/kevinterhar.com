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
});
