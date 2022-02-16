import { pageContentDiv } from "./index";
import mapImage from "./map.png";
const loadContactPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'contact';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Contact Us!';
    // Create subcontainer
    const subcontainer = document.createElement('div');
    subcontainer.id = 'subcontainer';
    // Create left container
    const leftContainer = document.createElement('div');
    leftContainer.id = 'left';
    // Create left divs
    let leftDivs = [];
    for (let i = 0; i < 3; i++) {
        const leftDiv = document.createElement('div');
        leftDiv.class = 'leftDiv';
        leftDivs.push(leftDiv);
    }
    // Address Div
    const addressDiv = leftDivs[0];
    const addressText = document.createElement('p');
    addressText.innerText = 'Address Text Here';
    addressDiv.appendChild(addressText);
    leftContainer.appendChild(addressDiv);

    // Email Div
    const emailDiv = leftDivs[1];
    const emailText = document.createElement('p');
    emailText.innerText = 'E-Mail Text Here';
    emailDiv.appendChild(emailText);
    leftContainer.appendChild(emailDiv);

    // Social Media Div
    const socialDiv = leftDivs[2];
    const socialText = document.createElement('p');
    socialText.innerText = 'Social Media';
    socialDiv.appendChild(socialText);
    leftContainer.appendChild(socialDiv);
    
    // Create right container
    const rightContainer = document.createElement('div');
    rightContainer.id = 'right';
    const map = new Image();
    map.src = mapImage;
    rightContainer.appendChild(map);
    subcontainer.appendChild(leftContainer);
    subcontainer.appendChild(rightContainer);
    container.appendChild(menuTextHeader);
    container.appendChild(subcontainer);

    pageContentDiv.appendChild(container);
        
};

export default loadContactPage;