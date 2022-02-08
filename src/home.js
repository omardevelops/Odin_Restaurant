const loadHomePage = () => {
    const pageContentDiv = document.getElementById('pageContent');
    const homeTopDiv = document.createElement('div');
    const homeText = document.createElement('p');
    const showMenuButton = document.createElement('button');

    homeText.innerText = 'Delicious Steak Available!';
    showMenuButton.innerText = 'Show Menu';
    homeTopDiv.id = 'home';

    homeTopDiv.appendChild(homeText);
    homeTopDiv.appendChild(showMenuButton);
    pageContentDiv.appendChild(homeTopDiv);
};

export default loadHomePage;