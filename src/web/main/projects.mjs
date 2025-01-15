import { linkPreset } from "./link-preset.mjs";
import githubImageSource from "../../assets/icons/light/github-light.svg";
import externalLinkImage from "../../assets/icons/dark/external-link-dark.svg";
import projects from "../../assets/data/projects_data.json";

// project screenshots
import battleshipImg from "../../assets/images/projects/battleship.jpg";
import aakhyaImg from "../../assets/images/projects/aakhya.jpg";
import calcImg from "../../assets/images/projects/calc.jpg";
import mausamImg from "../../assets/images/projects/mausam.jpg";
import picksImg from "../../assets/images/projects/picks.jpg";
import t3Img from "../../assets/images/projects/t3.jpg";

//

export function renderProjects() {
  const projectsBodyContainer = document.createElement("div");
  const projectsTextContainer = document.createElement("div");
  const projectsText = document.createElement("h2");
  const projectsArray = document.createElement("div");
  const projectsContainer = document.createElement("div");
  const startBracket = document.createElement("span");
  const closeBracket = document.createElement("span");

  projectsBodyContainer.id = "projects";
  projectsBodyContainer.className = "projects-body-container";
  projectsTextContainer.className = "projects-text-container";
  projectsText.className = "projects-text";
  projectsArray.className = "projects-array";
  projectsContainer.className = "projects-container";
  startBracket.className = "start-bracket";
  closeBracket.className = "close-bracket";
  projectsText.innerText = "myProjects";

  projectsBodyContainer.appendChild(projectsTextContainer);
  projectsTextContainer.appendChild(projectsText);
  const main = document.querySelector("main.main");
  main.appendChild(projectsBodyContainer);
  projectsBodyContainer.appendChild(projectsArray);

  projectsArray.appendChild(startBracket);
  projectsArray.appendChild(projectsContainer);

  // battleship
  renderProject(
    projects.battleship.name,
    projects.battleship.description,
    projects.battleship.repo,
    projects.battleship.preview,
    battleshipImg,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  //aakhya
  renderProject(
    projects.aakhya.name,
    projects.aakhya.description,
    projects.aakhya.repo,
    projects.aakhya.preview,
    aakhyaImg,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  //mausam
  renderProject(
    projects.mausam.name,
    projects.mausam.description,
    projects.mausam.repo,
    projects.mausam.preview,
    mausamImg,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  // picks
  renderProject(
    projects.pick.name,
    projects.pick.description,
    projects.pick.repo,
    projects.pick.preview,
    picksImg,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  //calc
  renderProject(
    projects.calc.name,
    projects.calc.description,
    projects.calc.repo,
    projects.calc.preview,
    calcImg,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  // t3
  renderProject(
    projects.t3.name,
    projects.t3.description,
    projects.t3.repo,
    projects.t3.preview,
    t3Img,
    githubImageSource,
    externalLinkImage,
    projectsContainer,
  );

  projectsArray.appendChild(closeBracket);
}

function renderProject(
  title,
  description,
  sourceLink,
  previewLink,
  image,
  githubLogo,
  externalLinkImg,
  projectsContainer,
) {
  const projectContainer = document.createElement("div");
  const projectInfo = document.createElement("div");
  const commaContainer = document.createElement("div");
  const projectImageContainer = document.createElement("a");
  const projectImage = document.createElement("img");
  const projectDescriptionContainer = document.createElement("div");
  const projectName = document.createElement("h3");
  const projectDescription = document.createElement("p");
  const githubLink = linkPreset(sourceLink, githubLogo, "github");
  const preview = linkPreset(previewLink, externalLinkImg, "view preview");
  const comma = document.createElement("p");

  projectContainer.className = "project-container";
  projectInfo.className = "project-info";
  commaContainer.className = "comma-container";
  comma.className = "comma";
  projectImageContainer.className = "project-image-container";
  projectImage.className = "project-image";
  projectDescriptionContainer.className = "project-description-container";
  projectDescription.className = "project-description";
  projectName.className = "project-name";

  projectImageContainer.href = previewLink;
  projectImageContainer.alt = title;
  projectImageContainer.target = "_blank";
  projectImage.src = image;
  projectImage.alt = "";
  projectName.innerText = title;
  projectDescription.innerText = description;
  comma.innerText = ",";

  projectContainer.appendChild(projectInfo);
  projectInfo.appendChild(projectImageContainer);
  projectImageContainer.appendChild(projectImage);
  projectInfo.appendChild(projectDescriptionContainer);
  projectDescriptionContainer.appendChild(projectName);
  projectDescriptionContainer.appendChild(githubLink);
  projectDescriptionContainer.appendChild(preview);
  projectDescriptionContainer.appendChild(projectDescription);
  projectContainer.appendChild(commaContainer);
  commaContainer.appendChild(comma);
  projectsContainer.appendChild(projectContainer);
  projectContainer.addEventListener("click", () => {
    projectClickHandler(projectContainer);
  });
}

function projectClickHandler(container) {
  container.classList.add("clicked");
  setTimeout(() => {
    container.classList.remove("clicked");
  }, 2000);
}
