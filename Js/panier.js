function afficherPanier() {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const container = document.getElementById('basket-content');
  let total = 0;

  if (panier.length === 0) {
    container.innerHTML = "<p>Ton panier est vide.</p>";
    document.querySelector("button[onclick='soumettreCommande()']").disabled = true;
    return;
  }

  let html = "<ul>";

  panier.forEach((article, index) => {
    const totalArticle = article.price * article.quantite;
    total += totalArticle;

    html += `
      <li>
        ${article.noun} - ${article.price}€ x ${article.quantite} = ${totalArticle}€
        <button onclick="supprimerArticle(${index})">Supprimer</button>
      </li>
    `;
  });

  html += "</ul>";
  container.innerHTML = html;
  document.getElementById("total").textContent = total + " €";
}

function supprimerArticle(index) {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  basket.splice(index, 1);
  localStorage.setItem('panier', JSON.stringify(basket));
  afficherPanier();
}

function soumettreCommande() {
  alert("Commande envoyée avec succès !");
  localStorage.removeItem('basket');
  location.reload();
}

function retourBoutique() {
  window.location.href = "index.html";
}

window.onload = afficherPanier;