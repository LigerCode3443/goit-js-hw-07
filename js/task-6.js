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
  let markup = "";
  // const arrDiv = [];
  // const container = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    // const newDiv = document.createElement("div");
    // newDiv.style.width = `${30 + i * 10}px`;
    // newDiv.style.height = `${30 + i * 10}px`;
    // newDiv.style.backgroundColor = getRandomHexColor();
    // arrDiv.push(newDiv);
    // container.appendChild(newDiv);
    markup += `
    <div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }
  console.log(markup);
  divEl.innerHTML = markup;
  // divEl.append(container);
  // divEl.append(...arrDiv);
}

function onBtnCreateEl(e) {
  divEl.innerHTML = "";
  const amount = +inputEl.value;
  if (amount >= 1 && amount <= 100) createBoxes(amount);
}

function onBtnDestroyEl(evt) {
  divEl.innerHTML = "";
  inputEl.value = "";
}
