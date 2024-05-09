const inputElem = document.querySelector("#name-input");

const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();

  spanElem.textContent = value || "Anonymous";
});
