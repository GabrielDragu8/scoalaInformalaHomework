const darkMode = document.getElementById("darkMode");
const darkModeText = document.getElementById("darkModeText");

let isDarkMode = true;

const reverseColor = () => {
  if (isDarkMode) {
    history.pushState({}, "", "/dark-mode");
    document.body.style.backgroundColor = "black";
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
    darkModeText.style.color = "white";
    darkMode.textContent = "Dark Mode";
    darkModeText.textContent = "This is the dark mode, click the button if you wanna change it.";
  } else {
    history.pushState({}, "", "/light-mode");
    document.body.style.backgroundColor = "white";
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
    darkModeText.style.color = "black";
    darkMode.textContent = "Light Mode";
    darkModeText.textContent = "This is the light mode, click the button if you wanna change it.";
  }
};

darkMode.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  reverseColor();
});
