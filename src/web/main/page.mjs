import { renderHeader } from "./header.mjs"
import { renderMainSection } from "./main.mjs";

export function rednerPage() {
    const page = document.createElement('div');
    page.className = 'page';

    document.body.appendChild(page);

    renderHeader()
    renderMainSection()
}