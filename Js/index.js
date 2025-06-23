function addtobasket(noun, price) {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];

  // Vérifie si le produit est déjà dans le panier
  let index = basket.findIndex(article => article.noun === noun);
  if (index !== -1) {
    if (basket[index].quantite < 5) { 
      basket[index].quantite++;
    } else {
      alert("Limite de 5 articles atteinte pour ce produit.");
      return;
    }
  } else {
    basket.push({ nom: noun, prix: price, quantite: 1 });
  }

  localStorage.setItem('basket', JSON.stringify(basket));
  alert(noun + " ajouté au panier.");
  updateBadge();
}

function updateBadge() {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];
  let totalArticles = basket.reduce((somme, article) => somme + article.quantite, 0);
  let badge = document.querySelector(".badge-panier");
  if (!badge) {
    const panierLink = document.querySelector(".bouton-panier");
    let span = document.createElement("span");
    span.classList.add("badge-panier");
    panierLink.appendChild(span);
    badge = span;
  }
  if (totalArticles > 0) {
    badge.textContent = totalArticles;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

window.onload = updateBadge;