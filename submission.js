const container = document.getElementById("submissions");
const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

if (submissions.length === 0) {
  container.innerHTML = "<p>No submissions yet.</p>";
} else {
  submissions.forEach((item) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Email:</strong> ${item.email}</p>
      <p><strong>Message:</strong> ${item.message}</p>
      <p><strong>Date:</strong> ${item.date}</p>
    `;

    container.appendChild(div);
  });
}
