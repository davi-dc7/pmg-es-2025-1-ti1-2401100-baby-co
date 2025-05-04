const navItems = document.querySelectorAll('.nav_info');
const sideContent = document.querySelectorAll('.side > div');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        sideContent.forEach(div => {
            div.style.display = 'none';
        });
        const targetDiv = document.querySelector(`.${target}`);
        if (targetDiv) {
            targetDiv.style.display = 'block';
        }   
        navItems.forEach(nav => {
            nav.style.backgroundColor = '';
            nav.style.color = '';
        });

      
        item.style.backgroundColor = '#004F44';
        item.style.color = '#fff'; 
    });
});

window.addEventListener('DOMContentLoaded', () => {
    if (navItems.length > 0) {
        navItems[0].click();
    }
});
