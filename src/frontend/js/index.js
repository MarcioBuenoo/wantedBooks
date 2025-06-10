// Script sidebar

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});
