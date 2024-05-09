const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email.trim() || !password.trim()) {
    return alert("All form fields must be filled in");
  }

  const userData = {
    email,
    password,
  };
  console.log(userData);
  form.reset();
}
