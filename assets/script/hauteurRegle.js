// Fonction pour mettre à jour la position de la flèche
function updateArrowPosition() {
    const score = parseInt(document.getElementById("Score").value); // Récupère le score
    const distanceItems = document.querySelectorAll(".distance-item");

    // Réinitialise tous les éléments
    distanceItems.forEach((item) => item.classList.remove("active"));

    // Ajoute la classe active à l'élément correspondant au score
    if (score >= 0 && score < distanceItems.length) {
        distanceItems[score].classList.add("active");
    }
}

// Fonction pour écouter les changements de score
function watchScoreChanges() {
    const scoreInput = document.getElementById("Score");

    // Utilise MutationObserver pour détecter les changements
    const observer = new MutationObserver(() => {
        updateArrowPosition(); // Met à jour la position de la flèche
    });

    observer.observe(scoreInput, { attributes: true, attributeFilter: ['value'] });
}

// Initialisation
document.addEventListener("DOMContentLoaded", function () {
    updateArrowPosition(); // Met à jour au chargement
    watchScoreChanges(); // Active l'écoute des changements
});
