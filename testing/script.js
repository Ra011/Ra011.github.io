var moving = 1
const animate = () => {

  if (moving > 0) {
    document.getElementsByClassName("load-icon").classList.remove("loading");
    moving = 0
  } else {
    document.getElementById("load-icon").classList.add("loading");
    moving = 1
  }
}


window.onload = () => {
  document.getElementById("animate-button").onclick = animate;
  document.getElementById("button-show-name").onclick = displayName;
  document.getElementById("hide-button").onclick = hideImage;
  document.getElementById("show-button").onclick = showImage;
}