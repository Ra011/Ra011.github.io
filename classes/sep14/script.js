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
   
    if (moving>0) {
        document.getElementById("square").classList.remove("anim-square");
        moving =0
      } else {
        document.getElementById("square").classList.add("anim-square");
        moving =1
      }
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName)
}

window.onload = () => {
    document.getElementById("animate-button").onclick = animate;
    document.getElementById("button-show-name").onclick = displayName;
} 

