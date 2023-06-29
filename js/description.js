const projectDescriptions = {
  project1:
    "OhMyFood est une application pensée en “mobile first”, qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients peuvent composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Par conséquent finis, les temps d'attente au restaurant ! 😀",
  project2: "Description pour le projet 2...",
  project3: "Description pour le projet 3...",
};

document.querySelectorAll(".work-box").forEach((item) => {
  item.addEventListener("click", (event) => {
    // Get the id of the clicked item
    let id = event.target.id;

    // Get the corresponding description
    let description = projectDescriptions[id];

    // Display the description in the modal
    document.getElementById("modal-description").textContent = description;

    // Display the modal
    document.getElementById("modal").style.display = "block";
  });
});
