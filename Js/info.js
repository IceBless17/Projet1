const bookinfo = {
    "i1": "<h2>Atomic Habits</h2><p>Le guide ultime pour ceux qui veulent changer durablement. Oubliez les grandes résolutions inefficaces : ce livre vous montre comment de petites habitudes quotidiennes peuvent reprogrammer votre identité et générer des résultats spectaculaires. Clair, inspirant, actionnable, un outil puissant pour transformer sa vie, un jour à la fois.</p><p>Auteur : James Clear</p><p>Prix : 25$</p>",
    "i2": "<h2>L'art subtil de s'en foutre</h2><p>Un antidote au développement personnel toxique. Brut, drôle et déroutant, ce livre apprend à lâcher prise intelligemment, à faire la paix avec ses limites et à se concentrer sur l'essentiel. Chaque page secoue et libère. C'est un coup de pied dans la fourmilière du perfectionnisme.</p><p>Auteur : Mark Manson</p><p>Prix : 20$</p>",
    "i3": "<h2>Les lois du succès</h2>Un trésor d'enseignement récolté auprès des plus grands esprits du XXe siècle. Ces 16 lois intemporelles sont une véritable carte routière vers la réussite professionnelle et personnelle. C'est plus qu'un livre : une philosophie de vie testée par des titans comme Edison, Carnegie ou Ford.</p><p>Auteur : Napoleon Hill</p><p>Prix : 25$</p>",
    "i4": "<h2>Atteindre l'excellence</h2><p>Ceux qui excellent ne sont pas nés doués, ils ont persévéré. Ce livre décortique les trajectoires des génies pour révéler les étapes vers la maîtrise complète de son art. Un ouvrage de référence pour toute personne ambitieuse qui veut marquer son domaine.</p><p>Auteur : Robert Greene</p><p>Prix : 25$</p>",
    "i5": "<h2>L'homme le plus riche de Babylone</h2><p>Sous la forme de fables anciennes, ce livre distille des conseils financiers clairs, simples et puissants. Apprenez à épargner, investir, éviter les dettes et bâtir votre fortune avec sagesse. Une lecture rapide, un impact durable.</p><p>Auteur : George S. Clason</p><p>Prix : 20$</p>",
    "i6": "<h2>L'ivestisseur intelligent</h2><p>Le livre que Warren Buffet considère comme le meilleur jamais écrit sur l'investissement. Apprenez à analyser les entreprises, éviter les pièges emotionnels et investir avec rigueur. Dense ùais incotournable pour quiconque prend ses finances au sérieux</p><p>Auteur : Benjamin Graham</p><p>Prix : 20$</p>",
    "i7": "<h2>Guide pour investir</h2><p>Pourquoi les riches deviennent plus riches ? Ce livre lève le voile sur leurs stratégies : immobilier, entreprises, éducation financière. Un guide pour penser comme un investisseur et bâtir un patrimoine qui travaille pour vous.</p><p>Auteur : Robert Kiyosaki</p><p>Prix : 30$</p>",
    "i8": "<h2>Les 48 lois du pouvoir</h2><p>Un manuel de stratégie sociale et politique qui révèle les règles tacites du pouvoir. Chaque loi est illustrée par des récits historiques fascinants et des leçons concrètes. Parfait pour ceux qui veulent naviguer avec finesse dans les milieux compétitifs.</p><p>Auteur : Robert Greene</p><p>Prix : 30$</p>",
    "i9": "<h2>Les 33 lois de la guerre</h2><p>De Sun Tzu à Napoléon, ce livre extrait des stratégies de guerre utilisables en entreprise, en politique, en gestion de conflits. Des leçons brutales, mais réalistes, pour ceux qui évoluent dans des environnements tendus ou concurrentiels.</p><p>Auteur : Robert Greene</p><p>Prix : 25$</p>",
    "i10": "<h2>L'art de la guerre</h2><p>Un classique intemporel sur la stratégie, la discipline et la maîtrise de soi. Chaque aphorisme est une perle de sagesse pour prendre l'ascendant sans confrontation directe. Utilisé par des chefs d'entreprise, des avocats, des coachs… la guerre devient art.</p><p>Auteur : Sun Tzu</p><p>Prix : 30$</p>",
    "i11": "<h2>Influence et manipulation</h2><p>Vous voulez comprendre pourquoi vous cédez à certaines demandes ? Ce livre dévoile les 6 leviers psychologiques de l'influence, utilisés dans la vente, le marketing, et même les relations personnelles. À lire pour apprendre à convaincre… ou à ne plus se faire avoir.</p><p>Auteur : Robert Cialdini</p><p>Prix : 30$</p>",
    "i12": "<h2>Les 12 principes du succes</h2><p>Un guide pour ceux qui veulent débloquer leur potentiel intérieur. Proctor y partage des principes comme la clarté d'objectif, la décision, la persistance, la visualisation et la confiance. C'est un livre qui vous pousse à changer votre manière de penser pour changer votre vie.</p><p>Auteur : Bob Proctor</p><p>Prix : 30$</p>"
}

// Gestion de la modale centrale
const modal = document.getElementById('modalContent');
const overlay = document.getElementById('modalOverlay');

const images = document.querySelectorAll('.image');
images.forEach(image => {
    const id = image.getAttribute('data-id');
    image.querySelector('img').addEventListener('click', () => {
        modal.innerHTML = bookinfo[id] + '<button class="close">Fermer</button>';
        modal.style.display = 'block';
        overlay.style.display = 'block';
        // Fermeture par bouton
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
    });
});
// Fermeture par clic sur overlay
overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});