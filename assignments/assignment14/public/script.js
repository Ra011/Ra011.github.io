const getTeams = async() => {
    try {
        return (await fetch("api/teams/")).json();
    } catch (error) {
        console.log(error);
    }
};

const showTeams = async() => {
    let teams = await getTeams();
    let teamsDiv = document.getElementById("team-list");
    teamsDiv.innerHTML = "";
    teams.forEach((team) => {
        const section = document.createElement("section");
        section.classList.add("team");
        teamsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = team.name;
        a.append(h3);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(team);
        };
    });
};

const displayDetails = (team) => {
    const teamDetails = document.getElementById("team-information");
    teamDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = team.name;
    teamDetails.append(h3);


    const p1 = document.createElement("p");
    teamDetails.append(p1);
    p1.innerHTML = team.name + "'s nickname is <b>"+ team.nickname + "</b";

    const p2 = document.createElement("p");
    teamDetails.append(p2);
    p2.innerHTML = "They are based in <b>"+ team.country + "</b";


    const p3 = document.createElement("p");
    teamDetails.append(p3);
    p3.innerHTML = team.name + " play in a <b>"+ team.kitcolour + "</b" + " kit";

    const p4 = document.createElement("p");
    teamDetails.append(p4);
    p4.innerHTML =  "Last season " + team.name + " finished <b>"+ team.position + "</b" + " in the league";

    const p5 = document.createElement("p");
    teamDetails.append(p5);
    p5.innerHTML =  "Some of their key players include:";



    const ul = document.createElement("ul");
    teamDetails.append(ul);

    team.players.forEach((player) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = player;
    });


};



const addTeam = async(e) => {
    e.preventDefault();
    const form = document.getElementById("add-team-form");
    const formData = new FormData(form);
    let response;

    if (form._id.value == -1) {
        formData.delete("_id");
        formData.append("players", getPlayers());

        console.log(...formData);

        response = await fetch("/api/teams", {
            method: "POST",
            body: formData
        });
    }


    if (response.status != 200) {
        console.log("Error posting data");
    }

    response = await response.json();
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showTeams();
};

const getPlayers = () => {
    const inputs = document.querySelectorAll("#player-boxes input");
    let players = [];
    inputs.forEach((input) => {
        players.push(input.value);
    });
    return players;
}

const resetForm = () => {
    const form = document.getElementById("add-team-form");
    form.reset();
    form._id = "-1";
    document.getElementById("player-boxes").innerHTML = "";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-title").innerHTML = "Add Team";
    resetForm();
};

const addPlayer = (e) => {
    e.preventDefault();
    const section = document.getElementById("player-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
}

window.onload = () => {
    showTeams();
    document.getElementById("add-team-form").onsubmit = addTeam;
    document.getElementById("add-link").onclick = showHideAdd;
    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };
    document.getElementById("add-player").onclick = addPlayer;
};