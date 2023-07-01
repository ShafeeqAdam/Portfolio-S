document.querySelector(".polaroid").addEventListener("click", function () {
  this.querySelector(".flip-card-inner").classList.toggle("flipped");
});

/* code qui me permet de faire flipper le pola, 
classList.toggle viens ajouter ou supprimer la classe .flipped à .flip-card-inner
en gros je click flipped s'active et laisse voir .flip-card-inner et inversement avec polaroid. */
