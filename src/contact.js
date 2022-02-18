import { pageContentDiv } from "./index";
import mapImage from "./map.png";
import githubIcon from "./github.svg";
import twitterIcon from "./twitter.svg";
import instagramIcon from "./instagram.svg";

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
        leftDiv.classList.add('leftDiv');
        leftDivs.push(leftDiv);
    }
    // Address Div
    const addressDiv = leftDivs[0];
    const addressText = document.createElement('p');
    addressText.innerText = 'Address: Somewhere in Texas...?';
    addressDiv.appendChild(addressText);
    leftContainer.appendChild(addressDiv);

    // Email Div
    const emailDiv = leftDivs[1];
    const emailText = document.createElement('p');
    emailText.innerText = 'E-mail: steak4all@steak.steak';
    emailDiv.appendChild(emailText);
    leftContainer.appendChild(emailDiv);

    // Social Media Div
    const socialDiv = leftDivs[2];
    const socialText = document.createElement('p');
    socialText.innerText = 'Social Media';
    socialDiv.appendChild(socialText);
    leftContainer.appendChild(socialDiv);
    // Social Media Buttons
    const github = new Image();
    github.src = githubIcon;
    github.id = 'githubIcon';
    const instagram = new Image();
    instagram.src = instagramIcon;
    instagram.id = 'instagramIcon';
    const twitter = new Image();
    twitter.src = twitterIcon;
    twitter.id = 'twitterIcon';
    const socialSubDiv = document.createElement('div');
    socialSubDiv.id = 'socialSub';
    const socialButtons = [github, instagram, twitter];
    for (const button of socialButtons) {
        socialSubDiv.appendChild(button);
        button.addEventListener('click', () => {
            if (button.id === 'githubIcon') {
                window.open('http://github.com/omarpixel9', '_blank');
            } else if (button.id === 'instagramIcon') {
                window.open('http://instagram.com/omarpixel9', '_blank');
            } else {
                window.open('http://twitter.com/omarpixel9', '_blank');
            }
        });
    }
    socialDiv.appendChild(socialSubDiv);
    
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