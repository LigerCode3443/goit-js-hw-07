function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreateEl = document.querySelector(".js-btn-create");
const btnDestroyEl = document.querySelector(".js-btn-destroy");
const inputEl = document.querySelector(".js-input");
const divEl = document.querySelector("#boxes");
btnCreateEl.addEventListener("click", onBtnCreateEl);
btnDestroyEl.addEventListener("click", onBtnDestroyEl);

function createBoxes(amount) {
  const arrDiv = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    arrDiv.push(newDiv);
    console.log(arrDiv);
  }

  divEl.append(...arrDiv);
}

function onBtnCreateEl(e) {
  const amount = +inputEl.value;
  if (amount >= 1 && amount <= 100) createBoxes(amount);
}

function onBtnDestroyEl(evt) {
  divEl.innerHTML = "";
  inputEl.value = "";
}
