const btn = document.querySelector(".btn1");

btn.addEventListener("click", addActiveClass);

function addActiveClass() {
  btn.classList.toggle("active");
}
