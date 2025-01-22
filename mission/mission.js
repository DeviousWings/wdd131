const themeSelector = document.getElementById("light_dark");
const byuilogo = document.getElementById("byui_logo");

if (themeSelector) {
  themeSelector.addEventListener("change", function () {
    const selectedTheme = this.value;
    console.log("Theme selected:", selectedTheme);

    if (selectedTheme === "dark") {
      document.body.className = "dark";
      byuilogo.src = "pic/byui-logo_white.webdp";
    } else if (selectedTheme === "light") {
      document.body.className = "light";
      byuiLogo.src = "pic/byui-logo_blue.webp";
    }
  });
} else {
  console.error("Theme selector not found!");
}
