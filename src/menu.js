import {
    pageContentDiv
} from "./index";
import menu from "./model_menu";
const categories = ['All', 'Steak', 'Ribs', 'Pizza', 'Drinks', 'Dessert'];

const updateMenuToContainerView = (category) => {
    let newMenu = menu.filter(item => item.category === category);
    if (newMenu.length === 0)
        newMenu = menu;
    newMenu.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = item.image;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item.name;

        menuItemDiv.appendChild(menuImage);
        menuItemDiv.appendChild(menuItemName);
        menuContainer.appendChild(menuItemDiv);
    });

};

const loadCategory = (category) => {
    const categoryButtonsList = Array.from(document.getElementsByClassName('menuCategory'));
    const categoryButton = document.getElementById(category + 'Category');
    const menuContainer = document.getElementById('menuContainer');
    // Clear current category
    categoryButtonsList.forEach(button => button.classList.remove('currentCategory'));
    // Set new current category
    categoryButton.classList.add('currentCategory');

    // Clear Menu Container
    const menuItemDivs = Array.from(document.getElementsByClassName('menuItem'));
    menuItemDivs.forEach(div => menuContainer.removeChild(div));

    // Add Relevant Category Items
    updateMenuToContainerView(category);
};

const loadMenuPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'menu';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Menu - Steak & More';

    // Create categories list
    const categoriesUl = document.createElement('ul');
    categoriesUl.id = 'categories';
    categories.forEach((category, index) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = category;
        button.classList.add('menuCategory');
        button.id = category + 'Category';
        // Set Home As Current Page
        if (index === 0) button.classList.add('currentCategory');
        button.addEventListener('click', () => {
            loadCategory(category);
        })
        listItem.appendChild(button);
        categoriesUl.appendChild(listItem);
    });

    // Create menu container with items
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    menu.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = item.image;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item.name;

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