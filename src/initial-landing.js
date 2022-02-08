function initialPageLoad(contentDiv) {
    // Nav Bar and Nav Elements
    const nav = document.createElement('nav');
    const logoHeader = document.createElement('h1');
    logoHeader.textContent = `Butchin' and Cuttin'`;
    
    const navList = document.createElement('ul');
    const pages = ['Home', 'Menu', 'Contact'];
    for (const page of pages) {
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.id = page + 'Btn';
        button.textContent = page;
        if (page === 'Home')  button.classList.add('currentPage');
        item.appendChild(button);
        navList.appendChild(item);
    }

    nav.appendChild(logoHeader);
    nav.appendChild(navList);

    // Landing Page Main (Top) Box
    const homeTopDiv = document.createElement('div');
    homeTopDiv.id = 'home-top';
    const homeTopContentDiv = document.createElement('div');
    homeTopContentDiv.id = 'home-top-content';
    const taglineText = document.createElement('p');
    taglineText.textContent = 'Delcious Steak Available!';
    const showMenuButton = document.createElement('button');
    showMenuButton.addEventListener('click', () => console.log('Menu'));
    showMenuButton.textContent = 'Show Menu';
    homeTopContentDiv.appendChild(taglineText);
    homeTopContentDiv.appendChild(showMenuButton);
    homeTopDiv.appendChild(homeTopContentDiv);

    const footer = document.createElement('footer');
    footer.textContent = 'Copyright 2022 - Omarpixel9';
    contentDiv.appendChild(nav);
    contentDiv.appendChild(homeTopDiv);
    contentDiv.appendChild(footer);
}

export default initialPageLoad;