var $navLinks = document.querySelector(".nav-links");
var $iconBurger = document.querySelector(".icon-burger");
var $iconClose = document.querySelector(".icon-close");

$iconBurger.addEventListener("click", () => {
    $navLinks.style.display = "flex";

    $iconBurger.style.display = "none";
    $iconClose.style.display = "block";
});

$iconClose.addEventListener("click", () => {
    $navLinks.style.display = "none";

    $iconClose.style.display = "none";
    $iconBurger.style.display = "block";
});

window.addEventListener("resize", () => {
    if (innerWidth >= 768) {
        $navLinks.style.display = "flex";
        $iconBurger.style.display = "none";
        $iconClose.style.display = "none";
    } else {
        if ($iconClose.style.display === "block") {
            return;
        } else {
            $iconBurger.style.display = "block";
            $navLinks.style.display = "none";
        }
    }
});
