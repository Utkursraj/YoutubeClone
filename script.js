document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mainContent = document.getElementById('main-content');

    // This script only runs on index.html, which has these elements
    if (menuBtn && sidebar && sidebarOverlay && mainContent) {
        const toggleSidebar = () => {
            if (window.innerWidth < 1024) {
                // Mobile view: toggle slide-in overlay
                sidebar.classList.toggle('open');
                sidebarOverlay.classList.toggle('open');
            } else {
                // Desktop view: toggle collapsed state
                sidebar.classList.toggle('collapsed');
                mainContent.classList.toggle('sidebar-collapsed');
            }
        };

        menuBtn.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);

        // Adjust sidebar on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                // If window is now desktop, close mobile overlay
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('open');
            } else {
                // If window is now mobile, remove desktop collapsed state
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('sidebar-collapsed');
            }
        });
    }
});
