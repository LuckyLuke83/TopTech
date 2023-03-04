'use strict'

const navBtns = document.querySelectorAll('.side-nav__item');
const navContainer = document.querySelector('.side-nav');

const sideContent = document.querySelectorAll('.description');

navContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.side-nav__item');
    if (!clicked) return;

    console.log(clicked);

    navBtns.forEach(li => li.classList.remove('side-nav__item--active'));
    sideContent.forEach(c => c.classList.remove('description-active'));

    clicked.classList.add('side-nav__item--active');

    document
    .querySelector(`.${clicked.dataset.tab}`)
    .classList.add('description-active');
});