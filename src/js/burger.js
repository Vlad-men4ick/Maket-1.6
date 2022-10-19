
export const Burger = () => {
    const openBurger = document.querySelector('.header__burger-btn');
    const closeBurger = document.querySelector('.main-menu__close-burger-btn');
    const mainMenu = document.querySelector('.main-menu__container');
    const shadow = document.querySelector('.shadow__menu');

    openBurger.addEventListener('click', function() {
        mainMenu.classList.add('main-menu__container--active');
        shadow.classList.add('shadow__menu--activ');
        mainMenu.scrollIntoView({
            block: 'nearest', 
            behavior: 'smooth'
        });
    });
    closeBurger.addEventListener('click', function(){
        mainMenu.classList.remove('main-menu__container--active');
        shadow.classList.remove('shadow__menu--activ');
    });
    shadow.addEventListener('click', function(evt){
            mainMenu.classList.remove('main-menu__container--active');
            shadow.classList.remove('shadow__menu--activ');
});
}