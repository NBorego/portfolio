window.addEventListener("scroll", () => {
  const scrolldown = document.querySelector(".scrolldown");
  const position = window.pageYOffset;
  var opacity = 1 - position / 200;

  if (opacity < 0) opacity = 0;
  scrolldown.style.opacity = opacity;
});
