const toggleNav = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};


const showEx1 = () => {
  document.getElementById("ex-1").classList.remove("hide-ex");
  document.getElementById("ex-1").classList.add("show-ex");
  document.getElementById("ex-2").classList.remove("show-ex");
  document.getElementById("ex-2").classList.add("hide-ex");
  document.getElementById("ex1-button").classList.add("this-ex");
  document.getElementById("ex2-button").classList.remove("this-ex");
}
const showEx2 = () => {
  document.getElementById("ex-1").classList.add("hide-ex");
  document.getElementById("ex-1").classList.remove("show-ex");
  document.getElementById("ex-2").classList.add("show-ex");
  document.getElementById("ex-2").classList.remove("hide-ex");
  document.getElementById("ex1-button").classList.remove("this-ex");
  document.getElementById("ex2-button").classList.add("this-ex");
}


const compareAge = () => {
  let errorCheck = 0;
  const name1 = document.getElementById("txt-name1").value;
  const age1 = parseInt(document.getElementById("number-age1").value);
  const name2 = document.getElementById("txt-name2").value;
  const age2 = parseInt(document.getElementById("number-age2").value);
  const name3 = document.getElementById("txt-name3").value;
  const age3 = parseInt(document.getElementById("number-age3").value);
  const errorAge1 = document.getElementById("error-num1");
  const errorAge2 = document.getElementById("error-num2");
  const errorAge3 = document.getElementById("error-num3");
  const errorName1 = document.getElementById("error-name1");
  const errorName2 = document.getElementById("error-name2");
  const errorName3 = document.getElementById("error-name3");
  const orderDiv = document.getElementById("sorted-order");
  errorAge1.classList.add("hide-small");
  errorAge2.classList.add("hide-small");
  errorAge3.classList.add("hide-small");
  errorName1.classList.add("hide-small");
  errorName2.classList.add("hide-small");
  errorName3.classList.add("hide-small");
  orderDiv.classList.add("hide-small");

  if (isNaN(age1)) {
    errorAge1.classList.remove("hide-small");
    errorAge1.innerHTML = "Not a valid number";
    errorCheck = 1;
  } else if (age1 < 0) {
    errorAge1.classList.remove("hide-small");
    errorAge1.innerHTML = "Negative Number";
    errorCheck = 1;
  }
  if (isNaN(age2)) {
    errorAge2.classList.remove("hide-small");
    errorAge2.innerHTML = "Not a valid number";
    errorCheck = 1;
  } else if (age2 < 0) {
    errorAge1.classList.remove("hide-small");
    errorAge1.innerHTML = "Negative Number";
    errorCheck = 1;
  }
  if (isNaN(age3)) {
    errorAge3.classList.remove("hide-small");
    errorAge3.innerHTML = "Not a valid number";
    errorCheck = 1;
  } else if (age3 < 0) {
    errorAge3.classList.remove("hide-small");
    errorAge3.innerHTML = "Negative Number";
    errorCheck = 1;
  }

  if ((age1 > age2) && errorCheck == 0) {
    if (age1 > age3) {
      if (age2 > age3) {
        //age1 biggest
        //age2 2nd biggest
        //age3 smallest
        orderDiv.innerHTML = `Oldest to Youngest: ${name1}, ${name2}, ${name3}`;
        orderDiv.classList.remove("hidden");
      }else {
        //age 1 biggest
        //age3 2nd 
        //age2 3rd
        orderDiv.innerHTML = `Oldest to Youngest: ${name1}, ${name3}, ${name2}`;
        orderDiv.classList.remove("hidden");
      }
    }else {
      //age3 biggest
      //age1 2nd
      //age2 smallest
      orderDiv.innerHTML = `Oldest to Youngest: ${name3}, ${name1}, ${name2}`;
      orderDiv.classList.remove("hidden");
    }
  }else {
    if (age2 > age3) {
      if (age3 > 1) {
        //age2 biggst
        //age3 2nd
        //age1 3rd
        orderDiv.innerHTML = `Oldest to Youngest: ${name2}, ${name3}, ${name1}`;
        orderDiv.classList.remove("hidden");
      }else {
        //age2 biggst
        //age1 2nd
        //age3 3rd
        orderDiv.innerHTML = `Oldest to Youngest: ${name2}, ${name1}, ${name3}`;
        orderDiv.classList.remove("hidden");
      }
    }else {
      if (errorCheck == 0) {
        //age3 biggest
        //age2 2nd
        //age1 3rd
        orderDiv.innerHTML = `Oldest to Youngest: ${name3}, ${name2}, ${name1}`;
        orderDiv.classList.remove("hidden");
      }
    }
  }
}



const displayFunds = () => {
  let funds = parseInt(document.getElementById("target-amount").value);
  funds = (funds / 10000) * 100
  let myElement = document.querySelector("#rectangle");
  myElement.style.background = `linear-gradient(0deg, red ${funds}%, azure ${funds}%)`;
}

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleNav;
  document.getElementById("ex1-button").onclick = showEx1;
  document.getElementById("ex2-button").onclick = showEx2;
  document.getElementById("button-compare-age").onclick = compareAge;
  document.getElementById("button-display").onclick = displayFunds;
}


