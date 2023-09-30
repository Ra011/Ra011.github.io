const showImage = () => {
  document.getElementById("random-image").classList.remove("hide");
}
const hideImage = () => {
  document.getElementById("random-image").classList.add("hide");
}

const runningImage = () => {
  document.getElementById('running-images').src='images/run.png';
}
const walkingImage = () => {
  document.getElementById('running-images').src='images/walk.png';
}


const makeRun = () => {
  console.log("test");
  let margin = 0;
  let run =0;
  let screenWidth  = window.screen.width;
  screenWidth = screenWidth/3.5;
  let runningImages =document.getElementById('running-images')
    const interval = setInterval(() => {
      if ((run==0)&& (margin<=screenWidth)) {
        runningImages.src='images/run.png';
        runningImages.style.marginleft= `${margin}px`;
        run=1;
        margin+=20;
      }
      else if (margin<=screenWidth){
        runningImages.src='images/walk.png';
        runningImages.style.marginLeft= `${margin}px`;
        run=0
        margin+=20;
      }
      else{
        clearInterval(interval);
      }
      

    }, 500);
}


const displayFunds = () => {
  let funds = parseInt(document.getElementById("target-amount").value);
  funds = (funds / 10000) * 100
  let counter = 0;
  let myElement = document.querySelector("#rectangle");
  //while(counter<=funds){
    const interval = setInterval(() => {
      if (counter<funds){
        myElement.style.background = `linear-gradient(0deg, red ${counter}%, azure ${counter}%)`;
      counter+=1;
      }
      else{
        clearInterval(interval);
      }
    }, 5);
  //}
}

window.onload = () => {
  //  document.getElementById("animate-button").onclick = animate;
  document.getElementById("button-display").onclick = displayFunds;
makeRun();
}


