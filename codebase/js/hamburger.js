document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle'); // Bouton pour ouvrir/fermer le menu
  const menuList = document.querySelector('.menu ul'); // Liste du menu
    // Vérifie si les éléments existent avant d'ajouter des écouteurs d'événements
  // Si le bouton de menu et la liste existent, on ajoute l'écouteur d'évenement
  // pour ouvrir/fermer le menu sur mobile
  if (menuToggle && menuList) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menuList.classList.toggle('open');
    });
    // Fermer le menu si on clique ailleurs sur mobile
    document.addEventListener('click', function(e) {
      if (!menuList.contains(e.target) && e.target !== menuToggle) {
        menuList.classList.remove('open');
      }
    });
  }
});