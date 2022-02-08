import loadHomePage from "./home";

// This file is for the initial build of the website only
const initialBuildWebpage = () => {
    const contentDiv = document.getElementById('content');
    
    // Create Nav
    const nav = document.createElement('nav');
    const logoHeader = document.createElement('h1');
    logoHeader.innerText = 'Steak 4 All';
    const navUl = document.createElement('ul');
    const tabs = ['Home', 'Menu', 'Contact'];

    tabs.forEach((tab, index) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = tab;
        button.classList.add('navButton');
        // Set Home As Current Page
        if (index === 0) button.classList.add('currentPage');
        listItem.appendChild(button);
        navUl.appendChild(listItem);
    });
    nav.appendChild(logoHeader);
    nav.appendChild(navUl);
    contentDiv.appendChild(nav);

    // Add Placeholder for Individual Page Content
    const pageContentDiv = document.createElement('div');
    pageContentDiv.id = 'pageContent';
    contentDiv.appendChild(pageContentDiv);

    // Add Footer
    const footer = document.createElement('footer');
    contentDiv.appendChild(footer);
    footer.textContent = 'Copyright 2022 - Omarpixel9';

    // Add First Page Content
    loadHomePage();
};

export default initialBuildWebpage;