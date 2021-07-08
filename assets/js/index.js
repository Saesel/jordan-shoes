// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Modal
const items = document.querySelectorAll(".item");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
let modalImage = document.querySelector(".modal-image");
let currentImage = 0;

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal.classList.add("active");
    const itemAttribute = item.getAttribute("src");
    modalImage.setAttribute("src", itemAttribute);
    console.log(item, index);
  });
});

// Modal Interactions
window.addEventListener("keydown", (key) => {
  const keyPressed = key.code;

  if (keyPressed === "Escape") {
    modal.classList.remove("active");
  }
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("active");
});
