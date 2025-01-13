import { linkPreset } from "./link-preset.mjs";
import githubLogo from '../../assets/icons/light/github-light.svg'
import projects from '../../assets/data/projects_data.json'

// profile
import profile300w from "../../assets/images/profile/profile-300w.jpg"
import profile400w from "../../assets/images/profile/profile-400w.jpg"
import profile600w from "../../assets/images/profile/profile-600w.jpg"
import profile1000w from "../../assets/images/profile/profile-1000w.jpg"

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

    profileSource(profile1000w, 2000, image);
    profileSource(profile600w, 1200, image)
    profileSource(profile400w, 600, image)
    profileSource(profile300w, 300, image);
    profileImg(profile400w, image);
    aboutTextContainer.addEventListener('click', () => {
        projectClickHandler(aboutTextContainer);
    })
}

function profileSource(srcset, width, picture) {
    const src = document.createElement('source');
    src.srcset = srcset;
    src.media = `(min-width: ${width}px)`
    picture.appendChild(src);
}

function profileImg(src, picture) {
    const img = document.createElement('img');
    
    img.className = 'profile-img'
    img.src = src;
    img.alt = "A pebble"

    picture.appendChild(img);
}

function projectClickHandler(container) {
    container.classList.add('clicked');
    setTimeout(() => {
        container.classList.remove('clicked');
    }, 2000)
}

