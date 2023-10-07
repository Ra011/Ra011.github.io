let count = 1;
const quoteList = ['"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela', '"So we beat on, boats against the current, borne back ceaselessly into the past." - F. Scott Fitzgerald','"A journey of a thousand miles begins with a single step." - Lao Tzu','"I cant change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean','"The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart." - Helen Keller'];

const quoteChange = () => {
  var quoteElement = document.getElementById("quotes");
  quoteElement.innerHTML = quoteList[count];
  count++;
  if(count>4){
    count=0;
  }
};


const colours = ["red","orange","yellow","green","blue","purple"]
const coloursID = ["#red","#orange","#yellow","#green","#blue","#purple"]
let colourCounter =0;


const drawrainbow = () => {
  colourCounter =0;
  setTimeout(drawrainbowred, 0);
  setTimeout(drawrainbowred, 800);
  setTimeout(drawrainbowred, 1600);
  setTimeout(drawrainbowred, 2400);
  setTimeout(drawrainbowred, 3200);
  setTimeout(drawrainbowred, 4000);
  setTimeout(showPot, 4800);
}

const drawrainbowred = () => {
  let counter = 0;
  let Element = document.querySelector(`${coloursID[colourCounter]}`);
  console.log(Element);
  const interval = setInterval(() => {
    if (counter<=100){
      //I have no idea why this needs to be a -1 to get the correct colour, but it fixed my bug
      Element.style.background = `linear-gradient(90deg, ${colours[colourCounter-1]} ${counter}%, #a8d0e9 ${counter}%)`;
    counter++;
    }
    else{
      clearInterval(interval);
    }
  }, 5);
  colourCounter++;
}

const showPot= () => {
  console.log("here");
  let potOfGold = document.getElementById("pot-of-gold");
  potOfGold.style.visibility = "visible";
}


window.onload = () => {
  setInterval(quoteChange, 2000);
  document.getElementById("button-rainbow").onclick = drawrainbow;
};


