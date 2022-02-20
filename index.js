
(function () {
    window.document.getElementById('burger').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('is-active')
        document.querySelector('.header__menu').classList.toggle('show-menu')
        document.querySelector('body').classList.toggle('overflow-hidden')
    })

    window.document.querySelector('.header__nav').addEventListener('click', () => {
        document.querySelector('.header__menu').classList.remove('show-menu')
        document.querySelector('.burger').classList.remove('is-active')
        document.querySelector('body').classList.remove('overflow-hidden')
    })

    $('.slider').slick({
        prevArrow: $('.arrow1'),
        nextArrow: $('.arrow2')
    })
})()

