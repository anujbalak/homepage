import { renderHeader } from "./header.mjs";
import { rednerPage } from "./page.mjs";
import { renderProjects } from "./projects.mjs";

export function renderWeb() {
    rednerPage();
    renderHeader();
    renderProjects();
}

