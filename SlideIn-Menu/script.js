const sideMenu = document.getElementById("sideMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menu-overlay");

openMenu.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});
