import menuList from '../menu.json';
import menuListTpl from '../templates/menu.hbs';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainerRef = document.querySelector('.js-menu');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

setDarkTheme();

const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);

themeSwitcherRef.addEventListener('change', onThemeSwitcherClick);

function onThemeSwitcherClick(e) {
  if (e.target.checked) {
    bodyRef.classList.replace(theme.LIGHT, theme.DARK);
    localStorage.setItem('theme', theme.DARK);
  }
  if (!e.target.checked) {
    bodyRef.classList.replace(theme.DARK, theme.LIGHT);
    localStorage.setItem('theme', theme.LIGHT);
  }
}

function setDarkTheme() {
  if (localStorage.getItem('theme') === theme.DARK) {
    themeSwitcherRef.checked = true;
    bodyRef.classList.add(theme.DARK);
  }
  if (localStorage.getItem('theme') === theme.LIGHT) {
    themeSwitcherRef.checked = false;
    bodyRef.classList.add(theme.LIGHT);
  }
}
