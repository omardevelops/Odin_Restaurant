import { pageContentDiv } from "./index";
const loadContactPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'contact';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Contact Us!';

    container.appendChild(menuTextHeader);
    pageContentDiv.appendChild(container);
        
};

export default loadContactPage;