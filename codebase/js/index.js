function addtobasket(name, price) {
  // Récupère le basket depuis localStorage ou initialise un tableau vide
  let basket = JSON.parse(localStorage.getItem('basket')) || [];

  // Vérifie si le produit est déjà dans le panier
  let index = basket.findIndex(article => article.name === name); //index contient la position du produit dans le panier
  if (index !== -1) {
    if (basket[index].quantite < 5) { 
      basket[index].quantite++;
    } else {
      alert("Limite de 5 articles atteinte pour ce produit.");
      return;
    }
  } else {
    basket.push({ name: name, price: price, quantite: 1 }); // Ajoute le produit avec une quantité de 1
  }

  localStorage.setItem('basket', JSON.stringify(basket)); // Enregistre le panier mis à jour dans localStorage
  alert(name + " ajouté au panier.");
  updateBadge();
}

function updateBadge() {
  let basket = JSON.parse(localStorage.getItem('basket')) || []; // Récupère le panier depuis localStorage ou initialise un tableau vide
  // Calcule le nombre total d'articles dans le panier
  let totalArticles = basket.reduce((somme, article) => somme + article.quantite, 0);
    // Cherche un badge existant ou crée-le dans la div .basket
  let badge = document.querySelector(".badge-basket");
  if (!badge) {
    const basketContainer = document.querySelector(".basket"); // Sélectionne la div .basket
    let span = document.createElement("span"); 
    span.classList.add("badge-basket");
    basketContainer.appendChild(span); 
    badge = span;
  }
  if (totalArticles > 0) {
    badge.textContent = totalArticles; // Met à jour le texte du badge avec le nombre total d'articles
    badge.style.display = "inline-block"; // Affiche le badge
  } else {
    badge.style.display = "none";
  }
}

// On s'assure que le DOM est chargé avant d'exécuter updateBadge
document.addEventListener("DOMContentLoaded", function() {
  updateBadge();
});