import '../styles/profile.css'
import '../styles/projects.css'
import { renderProjects } from "./projects.mjs";
import { renderAbout } from "./profile.mjs";

export function renderMainSection() {
    main();
    renderAbout();
    renderProjects()
}

function main() {
    const main = document.createElement('main');
    main.className = 'main';

    const page = document.querySelector('div.page');
    page.appendChild(main);
}