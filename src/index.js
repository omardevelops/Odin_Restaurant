import './style.css';
import './steak.jpg';
import initialBuildWebpage from './initial_build';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';


initialBuildWebpage(); // Build initial page
const pageContentDiv = document.getElementById('pageContent');
loadHomePage(); // Add First Page Content

const clearPageContent = () => {
    const divChildren = Array.from(pageContentDiv.childNodes);
    divChildren.forEach(div => pageContentDiv.removeChild(div));
};

const addEventListenersToButtons = () => {
    const navButtons = Array.from(document.getElementsByClassName('navButton'));
    navButtons.forEach((button, index) => {
        button.addEventListener('click', clearPageContent);
        if (index === 0) {
            button.addEventListener('click', loadHomePage);
        } else if (index === 1) {
            button.addEventListener('click', loadMenuPage);
        } else {
            button.addEventListener('click', loadContactPage);
        }
    });
};

addEventListenersToButtons();

export {clearPageContent, pageContentDiv};