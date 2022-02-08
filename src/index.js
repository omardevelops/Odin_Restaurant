import './style.css';
import './steak.jpg';
import initialPageLoad from './initial-landing';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import loadHomePage from './home';


const contentDiv = document.getElementById('content');
initialPageLoad(contentDiv);

const homeButton = document.getElementById('HomeBtn');
const menuButton = document.getElementById('MenuBtn');
const contactButton = document.getElementById('ContactBtn');
const navButtons = [homeButton, menuButton, contactButton];

// Clear out content of page (other than nav and footer)
const clearContent = () => {
    const divsToBeRemoved = Array.from(contentDiv.childNodes);
    console.log(divsToBeRemoved);
    divsToBeRemoved.forEach(element => {
        if (element.tagName === 'DIV')
            contentDiv.removeChild(element);
    }
    );
};
const switchTab = (tab) => {
    if (tab.classList.contains('currentPage') === false) {
        // Clear page contents
        clearContent();
        // Clear all current pages
        navButtons.forEach(button => button.classList.remove('currentPage'));
        // Set new page
        tab.classList.add('currentPage');
    }
};
const addEventListenersToNavButtons = () => {
    homeButton.addEventListener('click', loadHomePage);
    menuButton.addEventListener('click', loadMenuPage);
    contactButton.addEventListener('click', loadContactPage);
};

addEventListenersToNavButtons();

export {
    clearContent,
    switchTab,
    addEventListenersToNavButtons,
    contentDiv,
    homeButton,
    menuButton,
    contactButton
};