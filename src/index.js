import './styles.css';
import loadFrontPage from './front.js';

function loadNavBar() {
    const content = document.querySelector('#content');
    const navbar = document.createElement('nav');
    const navContainer = document.createElement('ul');

    navbar.classList.add('navbar');
    content.appendChild(navbar);

    navContainer.classList.add('nav-container');
    navbar.appendChild(navContainer);

    const navItem = function(name, id) {
        const newItem = document.createElement('li');
        newItem.setAttribute('id', `${id}`);
        newItem.classList.add('nav-item');
        newItem.textContent = name;
        navContainer.appendChild(newItem);
    }

    navItem('Home', 'homepage');
    navItem('Menu', 'menu');
    navItem('Contacts', 'contacts');

};

loadNavBar();

loadFrontPage();

console.log('Initialization successful... out!');