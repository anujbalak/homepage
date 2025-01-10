import { linkPreset } from "./link-preset.mjs";
import githubImageSource from '../../assets/icons/light/github-light.svg'
import externalImageLinkSource from '../../assets/icons/dark/external-link-dark.svg'

export function renderProjects() {
    const projectsBodyContainer = document.createElement('main');
    const projectsTextContainer = document.createElement('div');
    const projectsText = document.createElement('p');
    const projectsContainer = document.createElement('div');
    const startBracket = document.createElement('span');
    const closeBracket = document.createElement('span');
    
    projectsBodyContainer.className = 'projects-body-container';
    projectsTextContainer.className = 'projects-text-container';
    projectsText.className = 'projects-text';
    projectsContainer.className = 'projects-container'
    startBracket.className = 'start-bracket'
    closeBracket.className = 'close-bracket';
    projectsText.innerText = 'myProjects'

    projectsBodyContainer.appendChild(projectsTextContainer);
    projectsTextContainer.appendChild(projectsText);
    projectsBodyContainer.appendChild(projectsContainer);
    const page = document.querySelector('div.page');
    page.appendChild(projectsBodyContainer);

    projectsContainer.appendChild(startBracket);
    renderProject('src/assets/images/template.png', 'just a placeholder of a dogshit website', githubImageSource, 'www.google.com', 'www.github.com', externalImageLinkSource, projectsContainer)
    renderProject('src/assets/images/template.png', 'just a placeholder of a dogshit website', githubImageSource, 'www.google.com', 'www.github.com', externalImageLinkSource, projectsContainer)

    projectsContainer.appendChild(closeBracket);
}

function renderProject(projectImg, description, githubLogo, livePreview, sourceLink, externalLinkImg, projects) {
    const projectContainer = document.createElement('div');
    const projectInfo = document.createElement('div');
    const commaContainer = document.createElement('div');
    const projectImageContainer = document.createElement('div');
    const projectImage = document.createElement('img');
    const projectDescriptionContainer = document.createElement('div')
    const projectDescription = document.createElement('p');
    const githubLink = linkPreset(sourceLink, githubLogo, 'github')
    const preview = linkPreset(livePreview, externalLinkImg, 'view preview')
    const comma = document.createElement('p');

    projectContainer.className = 'project-container';
    projectInfo.className = 'project-info';
    commaContainer.className = 'comma-container';
    comma.className = 'comma';
    projectImageContainer.className = 'project-image-container'
    projectImage.className = 'project-image';
    projectDescriptionContainer.className = 'project-description-container';
    projectDescription.className = 'project-description';

    projectImage.src = projectImg;
    projectImage.alt = ''
    projectDescription.innerText = description;
    comma.innerText = ',';

    projectContainer.appendChild(projectInfo);
    projectInfo.appendChild(projectImageContainer);
    projectImageContainer.appendChild(projectImage);
    projectInfo.appendChild(projectDescriptionContainer);
    projectDescriptionContainer.appendChild(projectDescription);
    projectDescriptionContainer.appendChild(githubLink)
    projectDescriptionContainer.appendChild(preview)
    projectContainer.appendChild(commaContainer);
    commaContainer.appendChild(comma);
    projects.appendChild(projectContainer);
}

