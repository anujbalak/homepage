import { renderHeader } from "./header.mjs";
import { rednerPage } from "./page.mjs";
import { renderProjects } from "./projects.mjs";
import { renderAbout } from "./about.mjs";
export function renderWeb() {
    rednerPage();
    renderHeader();
    renderAbout();
    renderProjects();

}

