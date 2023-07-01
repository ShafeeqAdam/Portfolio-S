/*décla de toutes les variables */

const projectImages = {
  project1: ["image/omf1.png", "image/omf2.png"],
  project2: ["image/kasa1.png", "image/kasa2.png", "image/kasa3.png"],
  project3: [
    "image/ab1.png",
    "image/ab2.png",
    "image/ab5.png",
    "image/ab4.png",
  ],
};

const projectDescriptions = {
  project1:
    "OhMyFood est une application pensée en “mobile first”. Les clients peuvent composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant ! 😸.",
  project2:
    "Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Le but du projet est une refonte totale pour passer à une stack complète en Js avec NodeJS côté back-end, et React côté front-end 😸.",
  project3:
    "Argent Bank est une banque en ligne, le but de ce projet était de mettre en place un tableau de bord pour utilisateurs, avec MongoDB côté back-end et React/Redux côté front-end. Un Swagger a également été créer pour penser à la modélisations de routes API, si l'utilisateur veut gérer ses transactions 😸.",
};

const projectTitles = {
  project1: "https://github.com/ShafeeqAdam/ohmyfood.git",
  project2: "https://github.com/ShafeeqAdam/Kasa.git",
  project3: "https://github.com/ShafeeqAdam/Argent_Bank.github.io.git",
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
let currentSlide = 0;
let slides;
let slideInterval;

/* D'abord, je défini l'id,
Ensuite, je définis slider en allant chercher l'id,
Après, il utilise crée une boucle  pour supp tous les éléments enfants dans le slider.
je recup la liste des images correspondantes au projet.
pour chaque image dans cette liste, 
je crée un nouvel élément d'image, 
lui donne la classe slide, 
définit sa src à l'URL de l'image, 
et cache l'image, on oublie pas d'ajouter l'image à la fin du slider.

je définit ensuite slides pour être une liste de tous les éléments 
avec la classe slide et je montre la première image.

je recup le titre, la description du projet à partir de projectTitles et projectDescriptions, 
les place dans la modale, et affiche la modale.

et enfiiiiiiin, j'appelle slide interval avec nextSlide en argument . */

document.querySelectorAll(".work-box").forEach((box) => {
  box.addEventListener("click", function () {
    let id = this.id;
    let slider = document.getElementById("slider");

    while (slider.firstChild) {
      slider.removeChild(slider.firstChild);
    }

    let images = projectImages[id];

    images.forEach((src, index) => {
      let img = document.createElement("img");
      img.className = "slide";
      img.src = src;
      img.style.display = "none";

      slider.appendChild(img);
    });

    slides = document.querySelectorAll(".slide");
    currentSlide = 0;
    slides[currentSlide].style.display = "block";

    let title = projectTitles[id];
    let description = projectDescriptions[id];
    modalTitle.innerHTML = title;
    modalDescription.textContent = description;

    modal.style.display = "block";

    if (slideInterval) {
      clearInterval(slideInterval);
    }

    slideInterval = setInterval(nextSlide, 3000);
  });
});

/*fonction qui masque l'image courante . 
et passe à la suivante, toutes les 3 secondes 
quand la modale est affichée. */

function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

/* fonction qui fait que quand on click en 
dehors de la modale elle se ferme */

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }
};

/* fonction qui permet de fermer la modale quand 
qqn click sur la croix/close */

let closeModal = document.querySelector(".close");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
