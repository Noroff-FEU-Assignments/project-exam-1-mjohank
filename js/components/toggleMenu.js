function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-menu-icon");

  menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
}
