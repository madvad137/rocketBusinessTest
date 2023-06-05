const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const headerNavigationItems = document.querySelectorAll('.nav__link-header');
const buttons = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalClose = document.querySelector('.modal__close');

burger.addEventListener('click', () =>{
    navigation.classList.toggle('header__navigation-active');
    burger.classList.toggle('burger-active');
})

headerNavigationItems.forEach((item) =>{
    item.addEventListener('click', () => {
        navigation.classList.remove('header__navigation-active');
        burger.classList.remove('burger-active');
    })
})

buttons.forEach((item) =>{
    item.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.add('modal-active');
        modalContent.classList.add('modal__content-active')
    })
})

modal.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    modalContent.classList.remove('modal__content-active')
})

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    modalContent.classList.remove('modal__content-active')
})

const swiper = new Swiper('.swiper',{

    navigation: {
        nextEl:'.button-next',
        prevEl:'.button-prev'
    },
    pagination: {
        el:'.pagination',
        type: 'fraction'
    }
});