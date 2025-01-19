const themeSelector = document.getElementById("light_dark");

if (themeSelector) {
  themeSelector.addEventListener("change", function () {
    const selectedTheme = this.value;
    console.log("Theme selected:", selectedTheme);

    if (selectedTheme === "dark") {
      document.body.className = "dark";
    } else if (selectedTheme === "light") {
      document.body.className = "light";
    }
  });
} else {
  console.error("Theme selector not found!");
}
