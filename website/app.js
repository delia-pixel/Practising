const btnMenu = document.querySelector(".menu");
const listeNav = document.querySelector(".liste-nav");
const allItems = document.querySelectorAll(".item-nav");

btnMenu.addEventListener("click", () => {
  listeNav.classList.toggle("active");
});

allItems.forEach((item) => {
  item.addEventListener("click", () => {
    listeNav.classList.toggle("active");
  });
});
