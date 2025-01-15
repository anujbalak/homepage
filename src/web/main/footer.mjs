import { linkPreset } from "./link-preset.mjs";
import projects from "../../assets/data/projects_data.json";

import mobileIcon from "../../assets/icons/light/phone-light.svg";
import emailIcon from "../../assets/icons/light/email-light.svg";
import githubLogo from "../../assets/icons/light/github-light.svg";

import image828w from "../../assets/images/footer/footer-828w.jpg";
import image1200w from "../../assets/images/footer/footer-1200w.jpg";
import image1600w from "../../assets/images/footer/footer-1600w.jpg";

export function renderFooter() {
  footer();
}

function footer() {
  const footerPage = document.createElement("footer");

  footerPage.id = "footer";
  footerPage.className = "footer-page";
  const page = document.querySelector("div.page");
  page.appendChild(footerPage);
  details(footerPage);
  image(footerPage);
}

function details(footer) {
  const detailContainer = document.createElement("div");
  detailContainer.className = "detail-container";
  footer.appendChild(detailContainer);

  contactMeText(detailContainer);
  address(detailContainer);
  mobile(detailContainer);
  email(detailContainer);
  social(detailContainer);
}

function contactMeText(detailContainer) {
  const contactMeTextContainer = document.createElement("div");
  const contactMeText = document.createElement("h2");
  const revokeContainer = document.createElement("div");
  const revokeText = document.createElement("p");

  contactMeTextContainer.className = "contact-me-text-container";
  contactMeText.className = "contact-me-text";
  revokeContainer.className = "revoke-container";
  revokeText.className = "revoke-text";

  contactMeText.innerText = "Contact Me";
  revokeText.innerText =
    "Tired throwing pebbles on lake/river? and want to get your own website? well you are always welcome.";

  detailContainer.appendChild(contactMeTextContainer);
  contactMeTextContainer.appendChild(contactMeText);
  detailContainer.appendChild(revokeContainer);
  revokeContainer.appendChild(revokeText);
}

function address(detailContainer) {
  const addressContainer = document.createElement("div");
  const addressText = document.createElement("p");

  addressContainer.className = "address-container";
  addressText.className = "address-text";

  addressText.innerText =
    "1234, Random Road, Random Town, Random State, India 123456";

  detailContainer.appendChild(addressContainer);
  addressContainer.appendChild(addressText);
}

function mobile(detailContainer) {
  const mobileContainer = document.createElement("div");
  const mobileImg = document.createElement("img");
  const mobileNum = document.createElement("p");

  mobileContainer.className = "mobile-container";
  mobileImg.className = "mobile-img";
  mobileNum.className = "mobile-number";

  mobileImg.src = mobileIcon;
  mobileImg.alt = "";

  mobileNum.innerText = "+91 0123456789";
  detailContainer.appendChild(mobileContainer);
  mobileContainer.appendChild(mobileImg);
  mobileContainer.appendChild(mobileNum);
}

function email(detailContainer) {
  const emailContainer = document.createElement("div");
  const emailImg = document.createElement("img");
  const emailNum = document.createElement("p");

  emailContainer.className = "email-container";
  emailImg.className = "email-img";
  emailNum.className = "email";

  emailImg.src = emailIcon;
  emailImg.alt = "";

  emailNum.innerText = "anuj.pebble.is.fake@gmail.com";
  detailContainer.appendChild(emailContainer);
  emailContainer.appendChild(emailImg);
  emailContainer.appendChild(emailNum);
}

function social(detailContainer) {
  const socialContainer = document.createElement("div");
  const github = linkPreset(projects.github, githubLogo, "github");
  const githubText = document.createElement("a");

  socialContainer.className = "social-container";
  githubText.className = "github-text";

  githubText.innerText = "Github";
  githubText.href = projects.github;
  githubText.target = "_blank";
  detailContainer.appendChild(socialContainer);
  socialContainer.appendChild(github);
  socialContainer.appendChild(githubText);
}

function image(footerPage) {
  const imageContainer = document.createElement("div");
  const picture = document.createElement("picture");

  imageContainer.className = "image-container";
  picture.className = "footer-image";

  footerPage.appendChild(imageContainer);
  imageContainer.appendChild(picture);
  profileSource(image1600w, 2400, picture);
  profileSource(image1200w, 1800, picture);
  profileSource(image828w, 1200, picture);
  profileImg(image828w, picture);
}

function profileSource(srcset, width, picture) {
  const src = document.createElement("source");
  src.srcset = srcset;
  src.media = `(min-width: ${width}px)`;
  picture.appendChild(src);
}

function profileImg(src, picture) {
  const img = document.createElement("img");

  img.className = "footer-img";
  img.src = src;
  img.alt = "A shore of sea.";

  picture.appendChild(img);
}
