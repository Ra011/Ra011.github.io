const showAssignments = () => {
    console.log("asssign");
    document.getElementById("assignment").classList.remove("hide-ex");
    document.getElementById("assignment").classList.add("show-ex");
    document.getElementById("project").classList.remove("show-ex");
    document.getElementById("project").classList.add("hide-ex");
    document.getElementById("assignments-button").classList.add("this-ex");
    document.getElementById("project-button").classList.remove("this-ex");
  }
  const showProject = () => {
    console.log("proj");
    document.getElementById("assignment").classList.add("hide-ex");
    document.getElementById("assignment").classList.remove("show-ex");
    document.getElementById("project").classList.add("show-ex");
    document.getElementById("project").classList.remove("hide-ex");
    document.getElementById("assignments-button").classList.remove("this-ex");
    document.getElementById("project-button").classList.add("this-ex");
  }


  window.onload = () => {
    console.log("test");
    document.getElementById("assignments-button").onclick = showAssignments;
    document.getElementById("project-button").onclick = showProject;
  }
  
  