const getEvents = async () => {
    const url = "whatson.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showEvents = async () => {
    let events = await getEvents();
    let eventsSection = document.getElementById("whatson-items");
  
    events.forEach((event) =>
      eventsSection.append(getEventItem(event))
    );
  };
  
  const getEventItem = (event) => {
    const eventSection = document.createElement("section");
    eventSection.classList.add("event");
  
  
    const h3 = document.createElement("h3");
    h3.innerText = event.name;
    a.append(h3);
  

    return eventSection;
  };
  

  
  window.onload = () => showEvents();