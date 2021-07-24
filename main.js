// Even Handlers (Touch Screens)
img.addEventListener("touchstart", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  icons.classList.toggle("active");
});

img.addEventListener("touchend", function (e) {
  e.preventDefault();
  closeMount();
});
