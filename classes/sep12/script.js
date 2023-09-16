// const loadFunction = () => {
//     const helloP = document.getElementById('date')
//     helloP.innerHTML = "here's a <b>new</b> test"
// }

// window.onload = loadFunction;

// // or

// window.onload = () => {
//     const helloP = document.getElementById('date')
//     helloP.innerHTML = "here's a <b>new</b> test"
// }

const changeText = () => {
    const helloP = document.getElementById('date');
    helloP.innerHTML = " <b>new</b> test";
    helloP.classList.add("java-test");
}

// window.onload = () => {
//     const clickButton = document.getElementById("test-button");
//     clickButton.onclick = changeText;
// }

//              OR

window.onload = () => {
    document.getElementById("test-button").onclick = changeText;
    document.getElementById("hide-button").onclick = hideImage;
    document.getElementById("show-button").onclick = showImage;
}

//              OR all in 1 function

// window.onload = () => {
//  document.getElementById("test-button").onclick = () => {
//     const helloP = document.getElementById('date')
//     helloP.innerHTML = " <b>new</b> test"
//  }
// }


const showImage = () => {
document.getElementById("random-image").classList.remove("hide");
}
const hideImage = () => {
    document.getElementById("random-image").classList.add("hide");
}