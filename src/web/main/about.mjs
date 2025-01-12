import { linkPreset } from "./link-preset.mjs";
import githubLogo from '../../assets/icons/light/github-light.svg'
import projects from '../../assets/data/projects_data.json'

export function renderAbout() {
    about();
}

function about() {
    const aboutPage = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('picture');
    const nameContainer = document.createElement('div');
    const name = document.createElement('h1');
    const aboutTextContainer = document.createElement('div');
    const aboutMeText = document.createElement('h2');
    const aboutText = document.createElement('p');
    const githubLink = linkPreset(projects.github, githubLogo, 'github')

    aboutPage.className = 'about-page';
    imageContainer.className = 'profile-image-container';
    image.className = 'profile-image'
    nameContainer.className = 'my-name-container';
    name.className = 'my-name';
    aboutTextContainer.className = 'about-text-container';
    aboutMeText.className = 'about-me-text';
    aboutText.className = 'about-text';

    name.innerText = 'Anuj';
    aboutMeText.innerText = 'About me';
    aboutText.innerText = 'Hello, gentlemen! by looking at me you can easily say what I am a. Yes! a pebble and I design websites, good looking websites like... like me, I am beautiful, right? Wanna know more about this pebble visit your beach or anywhere where you can find pebbles or I think you can visit me by clicking that icon with a ca.. cat?'

    const main = document.querySelector('main.main');
    main.appendChild(aboutPage);
    aboutPage.appendChild(imageContainer);
    imageContainer.appendChild(image);
    aboutPage.appendChild(nameContainer);
    nameContainer.appendChild(name);
    aboutPage.appendChild(aboutTextContainer);
    aboutTextContainer.appendChild(aboutMeText);
    aboutTextContainer.appendChild(aboutText);
    aboutTextContainer.appendChild(githubLink);
}