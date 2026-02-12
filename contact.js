document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  // Validation
  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required.";
    return;
  }

  error.textContent = "";

  // Get existing submissions or empty array
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  // New submission object
  const newSubmission = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  submissions.push(newSubmission);

  // Save back to LocalStorage
  localStorage.setItem("submissions", JSON.stringify(submissions));

  // Clear form
  document.getElementById("contactForm").reset();

  alert("Message submitted successfully!");
});
