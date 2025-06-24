function showbasket() {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const container = document.getElementById('basket-content');
  let total = 0;

  if (basket.length === 0) {
    container.innerHTML = "<p>Ton panier est vide.</p>";
    // Désactive le bouton si le basket est vide
    const submitBtn = document.querySelector("button[onclick='submitorder()']");
    if (submitBtn) {
      submitBtn.disabled = true;
    }
    return;
  }

  let html = "<ul>";

  basket.forEach((article, index) => {
    const totalArticle = article.price * article.quantite;
    total += totalArticle;

    html += `
      <li>
        ${article.name} - ${article.price}$ x ${article.quantite}$ = ${totalArticle}$
        <button onclick="removearticle(${index})">Supprimer</button>
      </li>
    `;
  });

  html += "</ul>";
  container.innerHTML = html;
  document.getElementById("total").textContent = total + " $";
}

function removearticle(index) {
  let basket = JSON.parse(localStorage.getItem('basket')) || [];
  basket.splice(index, 1);
  localStorage.setItem('basket', JSON.stringify(basket));
  showbasket();
}

function submitorder() {
  alert("Commande envoyée avec succès !");
  localStorage.removeartcile('basket');
  location.reload();
}

function returntoshop() {
  window.location.href = "index.html";
}

// On affiche le contenu du basket lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
  showbasket();
});
