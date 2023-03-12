'use strict'

import {news} from './news.js'

const newsPages = Math.ceil((news.length)/4);
const newsSection = document.querySelector('.about');
const arrows = document.querySelector('.description__arrows');

///////////////////////////////////////
//news 

let newsPageNumber = 1;

const newsLoad = function(pageNumber) {
    newsSection.innerHTML = '';
    const lastNewsNumber = newsPageNumber*4-1; 
    const newsOnPage = news.slice(newsPageNumber-1, newsPageNumber*4);
    
    const newsForPage = newsOnPage.map(n => `<div class="description__news">
    <span class="description__news-data">${n.date}</span>
    <p class="description__news-text">${n.content}</p>
</div>`);
console.log(newsForPage);
    const markup = '<h3 class="description__header">Aktualności</h3>';
    newsSection.insertAdjacentHTML('afterbegin', markup);
}

arrows.addEventListener('click', function(e) {
    const clicked = e.target.closest('.description__arrows-icon');
    
})

newsLoad(1);


///////////////////////////////////////
//nav bar logic
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

///////////////////////////////////////
//message logic
const messageWindow = document.querySelector('.message')
const btnOpenMessage = document.querySelector('.user-nav__message-btn');
const btnCloseMessage = document.querySelector('.message__box-close');

const openMessage = function (e) {
    e.preventDefault();
    messageWindow.style.visibility = "visible";
    messageWindow.style.opacity = "1";
    // messageWindow.classList.remove('hidden');
}

const closeMessage = function () {
    messageWindow.style.visibility = "hidden";
    messageWindow.style.opacity = "0";
    // messageWindow.classList.add('hidden');
}


btnOpenMessage.addEventListener('click', openMessage);
btnCloseMessage.addEventListener('click', closeMessage);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !messageWindow.classList.contains('hidden')) {
        closeMessage();
    }
  });

messageWindow.addEventListener('click', function(e) {
    
    const clicked = e.target.closest('.message__container');
    if (!clicked) {
        closeMessage();
    }
    
})

///////////////////////////////////////
//DOWNLOAD

const downloadBtn = document.querySelector('.user-nav__icon-box');
const downloadPanel = document.querySelector('.download');
const downloadClose = document.querySelector('.download__close');

downloadBtn.addEventListener('click', function() {
    downloadPanel.style.right = "0";
})

downloadClose.addEventListener('click', function() {
    downloadPanel.style.right = "-30rem";
})

