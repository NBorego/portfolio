const $switchButton = document.querySelector(".switch-button");
const $switchIconImage = document.querySelector("#switch-img");
const $root = document.documentElement;

$switchButton.addEventListener("click", () => {
    if ($root.classList.contains("light")) {
        $switchButton.style.justifyContent = "flex-end";
        $switchIconImage.src = "./assets/moon.svg";

        $root.classList.replace("light", "dark");
    } else {
        $switchIconImage.src = "./assets/sun.svg";
        $switchButton.style.justifyContent = "flex-start";

        $root.classList.replace("dark", "light");
    }
});
