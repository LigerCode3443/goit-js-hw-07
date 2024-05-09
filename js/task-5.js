function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");
const spanElem = document.querySelector(".color");

btnElem.addEventListener("click", (evt) => {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
  return;
});
