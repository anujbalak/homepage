import { linkPreset } from "./link-preset.mjs";
import githubImageSource from '../../assets/icons/light/github-light.svg'
import externalLinkImage from '../../assets/icons/dark/external-link-dark.svg'
import projects from '../../assets/data/projects_data.json'

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


    // battleship
    renderProject(projects.battleship.name, projects.battleship.description, projects.battleship.repo, projects.battleship.preview, 'src/assets/images/template.png', githubImageSource, externalLinkImage, projectsContainer)


    //aakhya
    renderProject(projects.aakhya.name, projects.aakhya.description, projects.aakhya.repo, projects.aakhya.preview, 'src/assets/images/template.png', githubImageSource, externalLinkImage, projectsContainer)

    projectsContainer.appendChild(closeBracket);
}

function renderProject(title, description, sourceLink, previewLink, image, githubLogo, externalLinkImg, projectsContainer) {
    const projectContainer = document.createElement('div');
    const projectInfo = document.createElement('div');
    const commaContainer = document.createElement('div');
    const projectImageContainer = document.createElement('div');
    const projectImage = document.createElement('img');
    const projectDescriptionContainer = document.createElement('div')
    const projectName = document.createElement('p');
    const projectDescription = document.createElement('p');
    const githubLink = linkPreset(sourceLink, githubLogo, 'github')
    const preview = linkPreset(previewLink, externalLinkImg, 'view preview')
    const comma = document.createElement('p');

    projectContainer.className = 'project-container';
    projectInfo.className = 'project-info';
    commaContainer.className = 'comma-container';
    comma.className = 'comma';
    projectImageContainer.className = 'project-image-container'
    projectImage.className = 'project-image';
    projectDescriptionContainer.className = 'project-description-container';
    projectDescription.className = 'project-description';
    projectName.className = 'project-name';

    projectImage.src = image;
    projectImage.alt = ''
    projectName.innerText = title
    projectDescription.innerText = description;
    comma.innerText = ',';

    projectContainer.appendChild(projectInfo);
    projectInfo.appendChild(projectImageContainer);
    projectImageContainer.appendChild(projectImage);
    projectInfo.appendChild(projectDescriptionContainer);
    projectDescriptionContainer.appendChild(projectName);
    projectDescriptionContainer.appendChild(githubLink)
    projectDescriptionContainer.appendChild(preview)
    projectDescriptionContainer.appendChild(projectDescription);
    projectContainer.appendChild(commaContainer);
    commaContainer.appendChild(comma);
    projectsContainer.appendChild(projectContainer);
}

