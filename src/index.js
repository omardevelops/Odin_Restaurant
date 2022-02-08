import './style.css';
import './steak.jpg';
import initialPageLoad from './initial-landing';
import loadMenuPage from './menu';
import loadContactPage from './contact';


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
const setNewCurrentPage = (element) => {
    // Clear all current pages
    
    navButtons.forEach(button => button.classList.remove('currentPage'));

    // Set new page
    element.classList.add('currentPage');
};
const addEventListenersToNavButtons = () => {
    homeButton.addEventListener('click', console.log('not yet'));
    menuButton.addEventListener('click', loadMenuPage);
    contactButton.addEventListener('click', loadContactPage);
};

addEventListenersToNavButtons();

export {
    clearContent, 
    setNewCurrentPage, 
    addEventListenersToNavButtons, 
    contentDiv,
    homeButton,
    menuButton,
    contactButton
};