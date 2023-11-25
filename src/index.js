import './styles.css';
import loadFrontPage from './front.js';
import loadMenuPage from './menu.js';
import loadContactsPage from './contacts.js';

const content = document.querySelector('#content');

function loadPage(page) {
    switch (page) {
        case 'menu':
            loadMenuPage();
            break;
        case 'contacts':
            loadContactsPage();
            break;
        default:
            loadFrontPage();
    };
}

function loadNavBar() {
    const navbar = document.createElement('nav');
    const navContainer = document.createElement('ul');

    navbar.classList.add('navbar');
    content.appendChild(navbar);

    navContainer.classList.add('nav-container');
    navbar.appendChild(navContainer);

    const addNavItem = function(name, id) {
        const newItem = document.createElement('li');
        newItem.setAttribute('id', `${id}`);
        newItem.classList.add('nav-item');
        newItem.textContent = name;
        navContainer.appendChild(newItem);
    }

    addNavItem('Home', 'home');
    addNavItem('Menu', 'menu');
    addNavItem('Contacts', 'contacts');

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(navItem => 
        {navItem.addEventListener('click', (e) => {
            content.removeChild(content.lastChild);
            loadPage(`${e.target.id}`);
        });
    });
};

loadNavBar();

loadPage('home');

console.log('Initialization successful... out!');