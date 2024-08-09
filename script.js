const toggleButton = document.getElementById("toggle-mode");

const bodyElement = document.body;

toggleButton.addEventListener("click", function () {
  let isDarkMode = bodyElement.classList.contains("dark-mode");

  if (isDarkMode) {
    bodyElement.classList.remove("dark-mode");
    toggleButton.textContent = "🌙";
  } else {
    bodyElement.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
});
