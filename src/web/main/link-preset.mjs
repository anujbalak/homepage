export function linkPreset(link, imageSource, name) {
  const url = document.createElement("a");
  const logo = document.createElement("img");

  url.className = "link-preset";

  logo.alt = name;
  logo.src = imageSource;
  url.href = link;
  url.target = "_blank";
  url.appendChild(logo);
  return url;
}
