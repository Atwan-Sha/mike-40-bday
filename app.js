const imgContainer = document.querySelector(".img-container");
const revealContainer = document.querySelector(".reveal-container");

function run_anim() {
  document.getElementsByClassName("atw")[0].classList.remove("hidden");
  document.getElementsByClassName("mic")[0].classList.remove("hidden");

  var tfms = {
    "fabulous.jpg":      "translate(140%, 60%)",
    "bjj.png":           "translate(-120%, -70%) rotate(-20deg) scale(0.8)",
    "happy-420.jpg":     "translate(100%, 60%) rotate(-17deg)",
    "becky.png":         "translate(-110%, 50%)",
    "drums.png":         "translateY(300%) rotate(-10deg)",
    "philosophy.png":    "translateY(-100%) scale(1.04)",
    "ska2.gif":          "translateY(330%)",
    "mike-40-dance.jpg": "translate(100%, -100%) rotate(10deg) scale(1.1)",
    "ska-mic.gif":       "translate(210%, 70%) rotate(10deg)",
    "ska-atw.gif":       "translate(-200%, 170%) rotate(-10deg)",
  }

  for (img of document.getElementsByTagName('img')) {
    var fname = img.src.split("/").slice(-1)
    if (fname in tfms) {
      console.log("tfms", fname, tfms[fname])
      img.style.transform = tfms[fname]
    }
  }
}

imgContainer.addEventListener("click", () => {
  imgContainer.classList.add("hidden");
  revealContainer.classList.remove("hidden");

  setTimeout(() => run_anim(), "400");
});
