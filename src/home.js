import { pageContentDiv, switchTab } from "./index";
import loadMenuPage from "./menu";
import { clearPageContent } from "./index";

const loadHomePage = () => {
    const homeTopDiv = document.createElement('div');
    const homeText = document.createElement('p');
    const showMenuButton = document.createElement('button');

    homeText.innerText = 'Delicious Steak Available!';
    showMenuButton.innerText = 'Show Menu';
    showMenuButton.addEventListener('click', () => {
        clearPageContent();
        const menuButton = document.getElementById('MenuButton');
        menuButton.classList.add('currentPage');
        const homeButton = document.getElementById('HomeButton');
        homeButton.classList.remove('currentPage');
        loadMenuPage();
    });
    homeTopDiv.id = 'home';

    homeTopDiv.appendChild(homeText);
    homeTopDiv.appendChild(showMenuButton);
    pageContentDiv.appendChild(homeTopDiv);
};

export default loadHomePage;