function addtobasket(name, price) {
  // Récupère le basket depuis localStorage ou initialise un tableau vide
  let basket = JSON.parse(localStorage.getItem('basket')) || [];

  // Vérifie si le produit est déjà dans le panier
  let index = basket.findIndex(article => article.name === name);
  if (index !== -1) {
    if (basket[index].quantite < 5) { 
      basket[index].quantite++;
    } else {
      alert("Limite de 5 articles atteinte pour ce produit.");
      return;
    }
  } else {
    basket.push({ name: name, price: price, quantite: 1 });
  }

  localStorage.setItem('basket', JSON.stringify(basket));
  alert(name + " ajouté au panier.");
  updateBadge();
}

function updateBadge() {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];
  let totalArticles = basket.reduce((somme, article) => somme + article.quantite, 0);
    // Cherche un badge existant ou crée-le dans la div .basket
  let badge = document.querySelector(".badge-basket");
  if (!badge) {
    const basketContainer = document.querySelector(".basket");
    let span = document.createElement("span");
    span.classList.add("badge-basket");
    basketContainer.appendChild(span);
    badge = span;
  }
  if (totalArticles > 0) {
    badge.textContent = totalArticles;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

// On s'assure que le DOM est chargé avant d'exécuter updateBadge
document.addEventListener("DOMContentLoaded", function() {
  updateBadge();
});


//window.onload = updateBadge;