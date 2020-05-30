'use strict';

const menu = document.querySelector('.menu-bar');
const toggleMenuBtn = document.querySelector('.js-toggle-menu');

const handleToggleMenuBtnClick = e => {
  menu.classList.toggle('show');
  toggleMenuBtn.classList.toggle('js-toggle-menu_show');
};

toggleMenuBtn.addEventListener('click', handleToggleMenuBtnClick);
