// const add = (a,b)=> a+b;
// const add = (a, b) => { return a + b; }

// console.log(add(5, 6));

// const hello = () => console.log("testing- hello")
// hello();

// const helloSpecific = userName => console.log("Hello " + userName + "!");
// helloSpecific("Raph");


// const helloFullName = (firstName, lastName) => {
//     console.log("Hello " + firstName + " " + lastName + "!");
//     console.log("another message");
// }
// helloFullName("Raphael", "Attfield");
var moving = 0
const animate = () => {

  if (moving > 0) {
    document.getElementById("load-icon").classList.remove("loading-anim");
    moving = 0
  } else {
    document.getElementById("load-icon").classList.add("loading-anim");
    moving = 1
   }
}


function elementFromHtml(html) {
  console.log(html);
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

const displayText = () => {
  const productName = document.getElementById("txt-product-name").value;
  const comment = document.getElementById("txt-comment").value;
  const rating = document.getElementById("txt-rating").value;
  const username = document.getElementById("txt-username").value;
  html = '<section class="text-output"> <h3>'+ productName +'</h3> <p>'+ rating + ' ' + comment + '</p><p>' + username +'</p></section>'
  html = elementFromHtml(html);
document.getElementById("responses").appendChild(html);
}

const showImage = () => {
  document.getElementById("random-image").classList.remove("hide");
}
const hideImage = () => {
  document.getElementById("random-image").classList.add("hide");
}





window.onload = () => {
   document.getElementById("animate-button").onclick = animate;
  document.getElementById("button-add-comment").onclick = displayText;
  document.getElementById("hide-button").onclick = hideImage;
  document.getElementById("show-button").onclick = showImage;
}


