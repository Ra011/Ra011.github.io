class Toy {
  constructor(toyName, toyPrice, toyAge, toyRating, toyPicture) {
    this.toyName = toyName;
    this.toyPrice = toyPrice;
    this.toyAge = toyAge;
    this.toyRating = toyRating;
    this.toyPicture = toyPicture;
  }
  get tableRow() {
    const tr = document.createElement("tr");
    tr.append(this.tableColumn(this.firstName));
    tr.append(this.tableColumn(this.lastName));
    tr.append(this.tableColumn(this.grade));
    tr.onclick = () => {
      this.displayDetails(this);
    }
    /*
    tr.onclick = () => {
        console.log(this.firstName);
    }
    */

    return tr;
  }

  displayDetails(child) {
    const section = document.getElementById("child-details");
    section.innerHTML = "";
    const img = document.createElement("img");
    img.src = "images/" + child.picture;
    section.append(img);
  }

  tableColumn(data) {
    const td = document.createElement("td");
    td.textContent = data;
    return td;
  }

}




const displayToy = () => {
  const toyLayout = document.getElementById("toy-display");
  const toy = [];
  toys.push(new toy("Doll", "£25.00", "2-7", 3, doll.png));
  toys.push(new toy("Playhouse", "£150.00", "3-8", 4, playhouse.png));
  toys.push(new toy("Bike", "£39.99", "5-12", 4.5, bike.png));
  toys.push(new toy("LEGO Classic Set", "£29.99", "4-99", 4.7, "lego.png"));
  toys.push(new toy("Barbie Dreamhouse", "£199.99", "3-10", 4.2, "barbie.png"));
  toys.push(new toy("Hot Wheels Car Set", "£19.99", "3-12", 4.3, "hotwheels.png"));
  toys.push(new toy("Puzzle Board Game", "£19.99", "6-99", 4.6, "puzzle.png"));
  toys.push(new toy("Nerf Blaster", "£29.99", "8-14", 4.4, "nerf.png"));
  toys.push(new toy("Teddy Bear", "£14.99", "1-6", 4.8, "teddy.png"));
  toys.push(new toy("Remote Control Car", "£49.99", "6-12", 4.1, "rccar.png"));
  toys.push(new toy("Dollhouse", "£79.99", "3-10", 4.5, "dollhouse.png"));


  toys.forEach(toy => {
    toyLayout.append(toy.tableRow);
  });
};

window.onload = () => {
  displayToy();
}
