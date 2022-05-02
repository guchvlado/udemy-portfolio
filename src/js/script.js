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

function skills() {
    const elementsWidth = document.querySelectorAll('.skills__ratings-counter'),
          elementsLine = document.querySelectorAll('.skills__ratings-line span');

    for (let i = 0; i < elementsWidth.length; i++) {
        const width = parseInt(elementsWidth[i].textContent);
        if (width > 100) {
            elementsLine[i].style.width = '100%';
        }
        else {
            elementsLine[i].style.width = width + "%";
        }
    }
}

menu();
skills();