const showTeams = async () => {
  const teamsJSON = await getTeams();
  const teamsDiv = document.getElementById("teams-div");

  if (teamsJSON == "") {
    console.log("Invalid load of json");
    return;
  }

  teamsJSON.forEach((team) => {
    const section = document.createElement("section");
    section.className = "section-class";
    teamsDiv.append(section);

    const h3 = document.createElement("h3");
    h3.innerHTML = team.name;
    section.append(h3);
    const p = document.createElement("p");
    p.innerHTML = team.name + " plays in a " + "<b>" + team.kitColor + "</b>" + " kit." + "<br>" + "They are based in " + "<b>" + team.country + "</b>" + "." + "<br>" + "Last season they finished " + "<b>" + team.position + "</b>"
      + "." + "<br>" + "Their key players are: " + "<b>" + team.keyPlayers[0] + ", " + team.keyPlayers[1] + "</b>" + " and " + "<b>" + team.keyPlayers[2] + "</b>" + ".";
    section.append(p);

    const img = document.createElement("img");
    img.src = "http://localhost:3000/" + team.img;
    img.className = "image"
    section.append(img);
  });

}

const getTeams = async () => {
  try {
    return (await fetch("http://localhost:3000/api/teams")).json();
  } catch (error) {
    console.log("error retrieving JSON");
    return "";
  }
}


window.onload = () => showTeams();
