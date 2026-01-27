function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.style.color = "red";
    error.innerText = "All fields are required!";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
