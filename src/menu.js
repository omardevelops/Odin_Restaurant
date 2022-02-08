import {clearContent, setNewCurrentPage, menuButton} from "./index";

const loadMenuPage = () => {
    // Clear existing content first
    clearContent();
    setNewCurrentPage(menuButton);
    console.log('sayonara');
};

export default loadMenuPage;