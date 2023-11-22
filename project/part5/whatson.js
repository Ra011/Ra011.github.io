const getEvents = async () => {
    const url = "https://ra011.github.io./project/part5/events.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showEvents = async () => {
    let events = await getEvents();
    let eventsSection = document.getElementById("whatson-list");
  

    events.forEach((event) => {
      eventsSection.append(getEventItem(event));
    });
  };
  
  const getEventItem = (event) => {
    let ul = document.createElement("ul");
    ul.classList.add("whatson-items");
    let li = document.createElement("li");
    ul.append(li);
    let columns = document.createElement("div");
    columns.classList.add("columns");
    li.append(columns);

    let col10f5 = document.createElement("div");
    col10f5.classList.add("col10f5");
    columns.append(col10f5);
    let img = document.createElement("img");
    img.classList.add("whatson-img");
    img.src=event.image;
    col10f5.append(img);

let col40f5 = document.createElement("div");
    col40f5.classList.add("col40f5");
    columns.append(col40f5);

    let h2 = document.createElement("h2");
    h2.classList.add("whatson-header");
    h2.innerText = event.name;
    col40f5.append(h2);

    let p1 = document.createElement("p");
    p1.classList.add("whatson-date");
    p1.innerText = event.date;
    col40f5.append(p1);

    let p2 = document.createElement("p");
    p2.classList.add("whatson-para");
    p2.innerText = event.description;
    col40f5.append(p2);

    return ul;
  };
  
  const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };
  
  const getReviews = (reviews) => {
    const section = document.createElement("section");
  
    reviews.forEach((review) => {
      const p = document.createElement("p");
      p.textContent = review;
      section.append(p);
    });
  
    return section;
  };
  
  window.onload = () => showEvents();