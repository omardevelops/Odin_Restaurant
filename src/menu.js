import { pageContentDiv } from "./index";
import steakIcon from "./menu-steak.svg";
const categories = ['All', 'Steak', 'Ribs', 'Pizza', 'Drinks', 'Dessert'];
const menu = [
    {category:'Steak', name:'New York Style Strip'},
    {category:'Steak', name:'Sirloin Steak'},
    {category:'Steak', name:'Tenderloin Steak'},
    {category:'Steak', name:'Porterhouse Steak'},
    {category:'Steak', name:'Hanger Steak'},
    {category:'Ribs', name:'Baby Back Ribs'},
    {category:'Ribs', name:'St. Louis Style Ribs'},
    {category:'Ribs', name:'Short Ribs'},
    {category:'Ribs', name:'Country-Style Ribs'},
    {category:'Pizza', name:'Pepperoni'},
    {category:'Pizza', name:'Margharita'},
    {category:'Pizza', name:'Super Duper Meats Pizza'},
    {category:'Pizza', name:'Vegan Pizza'},
    {category:'Pizza', name:'Grilled Chicken'},
    {category:'Drinks', name:'Orange'},
    {category:'Drinks', name:'Apple'},
    {category:'Drinks', name:'Pineapple Mojito'},
    {category:'Drinks', name:'Blueberry Candy'},
    {category:'Dessert', name:'Hot Lava Cake'},
    {category:'Dessert', name:'Ice Cream'},
    {category:'Dessert', name:'Kunafa'},
    {category:'Dessert', name:'Um-Ali'},
    {category:'Dessert', name:'Nutella Crepe'},
    {category:'Dessert', name:'Chocolate Chip Pie'},

];

const loadMenuPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'menu';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Menu - Steak & More';

    // Create categories list
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
    const menuContainer = document.createElement('div');
    menu.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = steakIcon;

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