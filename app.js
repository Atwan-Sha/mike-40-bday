const imgContainer = document.querySelector(".img-container");
const revealContainer = document.querySelector(".reveal-container");
const revealQuotes = document.querySelector(".reveal-quotes");

imgContainer.addEventListener("click", () => {
  imgContainer.classList.add("hidden");
  revealContainer.classList.remove("hidden");
  revealQuotes.classList.remove("hidden");
});
