const openButton = document.querySelector("button");
const modal = document.querySelector(".modal");
const closeBurron = modal.querySelector("button");
const modalBackground = modal.querySelector(".modal--background");

function displayModal() {
    modal.classList.toggle("hidden");
}

openButton.addEventListener("click", displayModal);
closeBurron.addEventListener("click", displayModal);
modalBackground.addEventListener("click", displayModal);