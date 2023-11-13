const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images" });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let teams = [{
        _id: 1,
        name: "Arsenal", 
        position: "2nd", 
        country: "England", 
        nickname: "The Gunners", 
        kitcolour: "Red", 
        players: [
            "Sake",
            "Odegaard",
            "Saliba",
        ],
    },
    {
        _id: 2,
        name: "Juventus",
        position: "7th",
        country: "Italy",
        nickname: "The Old Lady",
        kitcolour: "Black and White",
        players: [
            "Vlahovic",
            "Chiesa",
            "Locatelli",
        ],
    },
    {
        _id: 3,
        name: "Barcelona",
        position: "2nd",
        country: "Spain",
        nickname: "Barca",
        kitcolour: "Red and Blue",
        players: [
            "Lewandowski",
            "De jong",
            "Pedri",
        ],
    },
    {
        _id: 4,
        name: "Real Madrid",
        position: "1st",
        country: "Spain",
        nickname: "	Los Blancos",
        kitcolour: "White",
        players: [
            "Vinicious Jr",
            "Modric",
            "Kroos",
        ],
    },
    {
        _id: 5,
        name: "PSG",
        position: "1st",
        country: "France",
        nickname: "Les Parisiens",
        kitcolour: "Red, Blue and White",
        players: [
            "Mbappe",
            "Dembele",
            "Hakimi",
        ],
    },
    {
        _id: 6,
        name: "Bayern Munich",
        position: "1st",
        country: "Germany",
        nickname: "	Die Bayern (The Bavarians)",
        kitcolour: "Red",
        players: [
            "Kane",
            "Kimmich",
            "Muller",
        ],
    },
];

app.get("/api/teams", (req, res) => {
    res.send(teams);
});

app.post("/api/teams", upload.single("img"), (req, res) => {
    const result = validateTeam(req.body);

    if (result.error) {
        res.status(400).send(result.error.information[0].message);
        return;
    }

    const team = {
        _id: teams.length + 1,
        name: req.body.name,
        position: req.body.position,
        country: req.body.county,
        nickname: req.body.nickname,
        kitcolour: req.body.kitcolour,
        players: req.body.players.split(",")
    }

    teams.push(team);
    res.send(teams);
});

const validateTeam = (team) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        position: Joi.string().max(4).required(),
        country: Joi.string().min(4).required(),
        nickname: Joi.string().min(3).required(),
        kitcolour: Joi.string().min(3).required(),
        players: Joi.allow(""),
    });

    return schema.validate(team);
};

app.listen(3000, () => {
    console.log("Listening");
});

