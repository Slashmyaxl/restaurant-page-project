import vegsam from './vegsam.jpg';
import kimque from './kimque.jpg';
import mac from './mac.jpg'
import stirFry from './stirfry.jpg'
import avoChoc from './avochoc.jpeg'
import pBread from './pbread.webp'

export default function() {
    const content = document.querySelector('#content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('page-container');

    const header = document.createElement('h2');
    header.textContent = 'Menu';
    menuPage.appendChild(header);
    
    const headerInfo = document.createElement('p');
    headerInfo.classList.add('header-info');
    headerInfo.textContent = 'Our fully plant-based menu features full-course meal items which may be combined. Ask your server about daily specials!';
    menuPage.appendChild(headerInfo);

    const addMenuItem = function (name, description, img, price, misc) {
        const menuCard = document.createElement('section');
        menuCard.classList.add('card');
        menuCard.classList.add('menu-card');

        const itemName = document.createElement('h4');
        itemName.classList.add('menu-item')
        itemName.textContent = `${name}`;
        menuCard.appendChild(itemName);

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('menu-desc')
        itemDesc.textContent = `${description}`;
        menuCard.appendChild(itemDesc);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const itemImg = new Image();
        itemImg.src = img;
        itemImg.classList.add('image');
        itemImg.classList.add('menu-img');
        imageContainer.appendChild(itemImg);
        menuCard.appendChild(imageContainer);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('menu-price')
        itemPrice.textContent = `${price}`;
        menuCard.appendChild(itemPrice);

        menuPage.appendChild(menuCard);
    }

    const apps = document.createElement('h3');
    apps.classList.add('menu-headers');
    apps.textContent = 'Appetizers';
    menuPage.appendChild(apps);

    addMenuItem('Veggie Samosas', 'Crispy pasty filled with potatoes and peas. Comes with mint and tamarind chutney dipping sauces', vegsam, '$5.99');

    addMenuItem('Kimchi Quesadilla', 'Traditional Mexican quesadilla with a Korean twist.', kimque, '$8.49');

    const entrees = document.createElement('h3');
    entrees.classList.add('menu-headers');
    entrees.textContent = 'Entrees';
    menuPage.appendChild(entrees);

    addMenuItem('Mac & Cheeze', 'In need of a comfort dish? Our cashew-cheese mac is warm and decadent.', mac, '$11.99 (mushrooms +$1.49)');

    addMenuItem('Tofu Stir Fry', 'Lots of veggies and a hardy helping of tofu topped with soy-sesame sauce, all over a bed of rice.', stirFry, '$13.99');

    const desserts = document.createElement('h3');
    desserts.classList.add('menu-headers');
    desserts.textContent = 'Desserts';
    menuPage.appendChild(desserts);

    addMenuItem('Avo Choco Pudding', 'You\'ll be surprised at how much this doesn\'t taste like avocadoes!', avoChoc, '$5.99');

    addMenuItem('Pumpkin Bread', 'Enjoy a slice of our seasonal dessert topped with pecans and Biscoff glaze', pBread, '$4.99');

    content.appendChild(menuPage);
}