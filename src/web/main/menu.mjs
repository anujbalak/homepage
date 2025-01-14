import menuBtnIcon from "../../assets/icons/dark/menu.svg";
import closeMenuBtnIcon from "../../assets/icons/dark/x.svg"

export function menu() {
    menuButton();
}

function menuButton() {
    const menuBtnContainer = document.createElement('div');
    const menuBtn = document.createElement('button');

    
    menuBtnContainer.className = 'menu-btn-container';
    menuBtn.className = 'menu-btn';

    menuBtn.innerText = "☰";
   
    document.body.appendChild(menuBtnContainer);
    menuBtnContainer.appendChild(menuBtn)
    renderMenu(menuBtn, menuBtnContainer);
}

function renderMenu(menuBtn, menuBtnContainer) {
    const menuPage = document.createElement('menu');
    const menuOptions = document.createElement('div');
    const about = document.createElement('a');
    const projects = document.createElement('a');
    const contact = document.createElement('a');
    const credits = document.createElement('a');
    
    menuPage.className = 'menu-page';
    menuPage.classList.add("none");
    menuOptions.className = 'menu-options';
    about.className = 'about';
    projects.className = 'projects';
    contact.className = 'contact';
    credits.className = 'credits';
    
    about.innerText = 'About';
    projects.innerText = 'Projects';
    contact.innerText = 'Contact';
    credits.innerText = 'Credits';
    
    about.href = '#about'
    projects.href = "#projects"
    contact.href = '#footer';
    credits.href = '#credits'
    
    document.body.appendChild(menuPage);
    menuPage.appendChild(menuOptions);
    menuOptions.appendChild(about);
    menuOptions.appendChild(projects);
    menuOptions.appendChild(contact);
    menuOptions.appendChild(credits);
    
    toggleMenu(menuBtn, menuPage, menuBtnContainer)
}

function toggleMenu(btn, menuPage, menuBtnContainer) {
    btn.addEventListener("click", () => {
        const page = document.querySelector('div.page');
        page.classList.toggle('none');
        menuPage.classList.toggle("none");
        btn.classList.toggle('clicked')
        if (((menuBtnContainer.className).length) === 18) {
            btn.innerText = "✖";
        } else {
            btn.innerText = "☰";
        }
        menuBtnContainer.classList.toggle('clicked');
    })
}