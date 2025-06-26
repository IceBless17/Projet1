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
        ${article.name} - ${article.price}$ x ${article.quantite} = ${totalArticle}$
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
  const number = "243844276040" // Numéro WhatsApp du vendeur
  const message = "🚨CECI EST LE MESSAGE PRE-REMPLI DE BOOKSTORE POUR VOTRE COMMANDE! VEUILLEZ REMPLIR LES INFOS DE L'ADRESSE DE LIVRAISON (en bas) AVANT D'ENVOYER CE MESSAGE\n\nBonjour, merci d'avoir passé commande chez nous!\n*COMMANDE*: \n" + JSON.parse(localStorage.getItem('basket')).map(article => `${article.name} - ${article.price}$ x ${article.quantite}`).join('\n') + "\n\nTotal : " + document.getElementById("total").textContent + "\n\nVotre adresse de livraison : \n- Commune: \n- Quartier: \n- Avenue : \n\nVeuillez nous envoyer votre adresse de livraison et vous serez livré dans les plus brefs délais. Merci de votre confiance!";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  localStorage.removeItem('basket'); // Vide le panier après la commande
  window.open(url, '_blank'); // Ouvre WhatsApp dans un nouvel onglet
  location.reload();
}

function returntoshop() {
  window.location.href = "decouvrir.html";
}

// On affiche le contenu du basket lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
  showbasket();
});
