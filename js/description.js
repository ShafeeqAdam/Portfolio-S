const projectDescriptions = {
  project1:
    "OhMyFood est une application pensée en “mobile first”, qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients peuvent composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Par conséquent finis, les temps d'attente au restaurant ! 😀",
  project2: "Description pour le projet 2...",
  project3: "Description pour le projet 3...",
};

document.querySelectorAll(".work-box").forEach((item) => {
  item.addEventListener("click", (event) => {
    let id = event.target.id;

    let description = projectDescriptions[id];

    document.getElementById("modal-description").textContent = description;

    document.getElementById("modal").style.display = "block";
  });
});
