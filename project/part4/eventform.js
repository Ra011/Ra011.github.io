const submitEventForm = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("event-form");
    const eventName = form.elements["event-name"].value;
    const eventDate = form.elements["event-date"].value;
    const eventDescription = form.elements["event-description"].value;
    const eventImage = form.elements["event-image"].value;
  
    console.log(eventName);
    console.log(eventDate);
    console.log(eventDescription);
    console.log(eventImage);
    let results = document.getElementById("results");

        const pName = document.createElement("p");
        pName.innerHTML = "<b>Event Name:</b> "+ eventName;
        results.append(pName);

        const pDate = document.createElement("p");
        pDate.innerHTML = "<b>Event date:</b> "+ eventDate;
        results.append(pDate);
        const pDesc = document.createElement("p");
        pDesc.innerHTML = "<b>Event description:</b> "+ eventDescription;
        results.append(pDesc);
        const pImg = document.createElement("p");
        pImg.innerHTML = "<b>Event image source:</b> "+ eventImage;
        results.append(pImg);
};

document.getElementById("event-form").onsubmit = submitEventForm
