const burgerBtn = document.querySelector(".header__burger");
const burgerNav = document.querySelector(".burger__nav");
const burgerClose = document.querySelector(".burger__close");



burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerNav.classList.add('burger__nav-active')
    // уюирает прокрутку
    document.body.style.overflow = "hidden"
    if (header.classList.contains('active')) {
        hideScroll()
    } else {
        showScroll()
    }
});

burgerClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerNav.classList.remove('burger__nav-active');
    // добавляет прокрутку
    document.body.style.overflow = '';
});


// get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';


    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
}



// функции которые прячут скролл и возвращают
const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';


}

const showScroll = () => {

    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';


}



// убирает бургер если ресайзить страницу
const resetNav = () => {
    burgerNav.classList.remove('burger__nav-active');
    showScroll()
}

window.addEventListener('resize', resetNav);

