const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/teams", (req, res) => {
    const teams = [];
    teams[0] = {
        name: "Arsenal",
        kitColor: "Red",
        country: "England",
        position: "2nd",
        keyPlayers: ["Saka", "Odegaard", "Saliba"],
        img: "images/arsenal.png"
    };
    teams[1] = {
        name: "Juventus",
        kitColor: "Black and white",
        country: "Italy",
        position: "7th",
        keyPlayers: ["Vlahovic", "Chiesa", "Locatelli"],
        img: "images/juventus.png"
    };
    teams[2] = {
        name: "Barcelona",
        kitColor: "Red and Blue",
        country: "Spain",
        position: "2nd",
        keyPlayers: ["Lewandowski", "De Jong", "Pedri"],
        img: "images/barcelona.png"
    };
    teams[3] = {
        name: "Manchester City",
        kitColor: "Sky blue",
        country: "England",
        position: "1st",
        keyPlayers: ["Haaland", "De Bruyne", "Rodri"],
        img: "images/city.png"
    };
    teams[4] = {
        name: "Real Madrid",
        kitColor: "white",
        country: "Spain",
        position: "1st",
        keyPlayers: ["Vinicius Jr", "Modric", "kroos"],
        img: "images/madrid.png"
    };
    teams[5] = {
        name: "PSG",
        kitColor: "Red, blue and white",
        country: "France",
        position: "1st",
        keyPlayers: ["Mbappe", "Dembele", "Hakimi"],
        img: "images/psg.png"
    };
  
    res.json(teams);
});

app.listen(3000, () => {
    console.log("listening");
});