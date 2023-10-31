const getCocktails = async (url) => {

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};


const showCocktails = async (url) => {
  let cocktails = await getCocktails(url);
  let cocktailsSection = document.getElementById("cocktails");
  cocktailsSection.innerHTML ="";
  cocktails.drinks.forEach((cocktail) =>
    cocktailsSection.append(getCocktail(cocktail))
  );
};

const getCocktail = (cocktail) => {
  let section = document.createElement("section");
  section.classList.add("drink");

  let h3 = document.createElement("h3");
  h3.innerText = cocktail.strDrink;
  section.append(h3);

  let img = document.createElement("img");
  section.append(img);
  img.src = cocktail.strDrinkThumb;

  return section;
};



window.onload = () => {
  console.log("test");
  showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  document.getElementById("a").onclick =  ()=>{
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  }
   
  document.getElementById("b").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b");
  }
  document.getElementById("c").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"); }
  document.getElementById("d").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d");}
  document.getElementById("e").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e");}
  document.getElementById("f").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f");}
  document.getElementById("g").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g");}
  document.getElementById("h").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h");}
  document.getElementById("i").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i");}
  document.getElementById("j").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j");}
  document.getElementById("k").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k");}
  document.getElementById("l").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l");}
  document.getElementById("m").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m");}
  document.getElementById("n").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n");}
  document.getElementById("o").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o");}
  document.getElementById("p").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p");}
  document.getElementById("q").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q");}
  document.getElementById("r").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r");}
  document.getElementById("s").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s");}
  document.getElementById("t").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t");}
  document.getElementById("u").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u");}
  document.getElementById("v").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v");}
  document.getElementById("w").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w");}
  document.getElementById("x").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x");}
  document.getElementById("y").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y");}
  document.getElementById("z").onclick =  ()=>{ 
    showCocktails("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z");}
}