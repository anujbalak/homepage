
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
    credits.href = 'credits.html'
    
    document.body.appendChild(menuPage);
    menuPage.appendChild(menuOptions);
    menuOptions.appendChild(about);
    menuOptions.appendChild(projects);
    menuOptions.appendChild(contact);
    menuOptions.appendChild(credits);
    
    [about, projects, contact, credits].forEach(link => {
        link.addEventListener("click", () => {
            btnEventHandler(menuBtn, menuPage, menuBtnContainer); 
        })
    })

    toggleMenu(menuBtn, menuPage, menuBtnContainer)
}

function toggleMenu(btn, menuPage, menuBtnContainer) {
    btn.addEventListener("click", () => {
        btnEventHandler(btn, menuPage, menuBtnContainer);
    })
}

function btnEventHandler(btn, menuPage, menuBtnContainer) {
    const page = document.querySelector('div.page');
        document.body.classList.toggle('menu-screen')
        page.classList.toggle('none');
        menuPage.classList.toggle("none");
        btn.classList.toggle('clicked')
        if (((menuBtnContainer.className).length) === 18) {
            btn.innerText = "✖";
        } else {
            btn.innerText = "☰";
        }
        menuBtnContainer.classList.toggle('clicked');
}