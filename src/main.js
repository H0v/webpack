import "../src/styles/styles.css";
import photo from "./assets/avocado.png";
const printTitle = () => {
  const main = document.querySelector("body > div.main");
  const div = document.createElement("div");
  div.innerText = "Counter App";
  div.className = "title";
  main.appendChild(div);
};

const printCsv = (data) => {
  const cvs = document.querySelector("body > div.cvs");
  cvs.innerText = data;
};

const printImage = (img) => {
  const image = document.querySelector("body > div.image");
  const imgElement = document.createElement("img");
  imgElement.src = photo;
  imgElement.style.width = "200px";
  image.appendChild(imgElement);
};

printImage(photo);

export { printTitle, printCsv };
