import { pageContentDiv } from "./index";
import steakIcon from "./menu-steak.svg";

const loadMenuPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'menu';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Menu - Steak & More';

    // Create categories list
    const categories = ['Steak', 'Ribs', 'Pizza', 'Drinks', 'Dessert'];
    const categoriesUl = document.createElement('ul');
    categories.forEach((category, index) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = category;
        button.classList.add('menuCategory');
        // Set Home As Current Page
        if (index === 0) button.classList.add('currentCategory');
        listItem.appendChild(button);
        categoriesUl.appendChild(listItem);
    });

    // Create menu container with items
    const menu = ['New York Style Strip', 'chicken2', 'chicken3', 'chicken4', 'chicken5', 'chicken6', 'chicken'];
    const menuContainer = document.createElement('div');
    menu.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = steakIcon;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item;

        menuItemDiv.appendChild(menuImage);
        menuItemDiv.appendChild(menuItemName);
        menuContainer.appendChild(menuItemDiv);
    });

    container.appendChild(menuTextHeader);
    container.appendChild(categoriesUl);
    container.appendChild(menuContainer);

    pageContentDiv.appendChild(container);

};

export default loadMenuPage;