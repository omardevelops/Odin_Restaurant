function initialPageLoad(contentDiv) {
    // Nav Bar and Nav Elements
    const nav = document.createElement('nav');
    const logoHeader = document.createElement('h1');
    logoHeader.textContent = `Butchin' and Cuttin'`;
    
    const navList = document.createElement('ul');
    const pages = ['Home', 'Menu', 'Content'];
    for (const page of pages) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = page;
        link.textContent = page;
        item.appendChild(link);
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
    taglineText.textContent = 'Amazing Steak\nFresh Delivery';
    const showMenuButton = document.createElement('button');
    showMenuButton.addEventListener('click', () => console.log('Menu'));
    showMenuButton.textContent = 'Show Menu';
    homeTopContentDiv.appendChild(taglineText);
    homeTopContentDiv.appendChild(showMenuButton);
    homeTopDiv.appendChild(homeTopContentDiv);

    
    contentDiv.appendChild(nav);
    contentDiv.appendChild(homeTopDiv);
}

export default initialPageLoad;