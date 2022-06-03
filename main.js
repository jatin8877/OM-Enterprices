const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".nav-expand");
  nav.classList.toggle("visible");
});

// ------------ image slider -----------
let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);
