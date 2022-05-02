function menu() {
    const menuElement = document.querySelector('.menu'),
          openMenu = document.querySelector('.burger'),
          closeMenu = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay');
    
    openMenu.addEventListener('click', () => {
        menuElement.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        menuElement.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menuElement.classList.remove('active');
    });
}

menu();