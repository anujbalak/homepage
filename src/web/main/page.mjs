import '../styles/page.css'
import '../styles/header.css'
import "../styles/footer.css"
import { renderHeader } from "./header.mjs"
import { renderMainSection } from "./main.mjs";
import { renderFooter } from './footer.mjs';
import { animate } from './animate.mjs';

export function rednerPage() {
    const page = document.createElement('div');
    page.className = 'page';

    document.body.appendChild(page);

    renderHeader()
    renderMainSection()
    renderFooter();
    animate();
}