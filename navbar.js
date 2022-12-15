const btn = document.querySelector(".btn-toggle");
const listItem = document.querySelector(".list-item");

btn.addEventListener("click", toggler);

function toggler() {
  listItem.classList.toggle("active");
}
