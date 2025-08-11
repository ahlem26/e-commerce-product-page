export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Fonction utilitaire pour générer la liste des numéros de pages à afficher
  // Elle ajoute des "..." si les pages sont nombreuses
  function getPageNumbers() {
    const delta = 2; // Nombre de pages à afficher avant et après la page actuelle
    const range = []; // Liste brute des pages à afficher (sans "...")
    const rangeWithDots = []; // Liste finale avec les "..."
    let l; // Variable pour mémoriser la dernière page ajoutée

    // On parcourt toutes les pages de 1 à totalPages
    for (let i = 1; i <= totalPages; i++) {
      // On garde toujours :
      // 1. La première page
      // 2. La dernière page
      // 3. Les pages proches de la page actuelle (dans la limite du delta)
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    // On construit la liste avec les "..."
    for (let i of range) {
      if (l) {
        // Si l'écart est de 2, on insère la page manquante directement
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        }
        // Si l'écart est plus grand que 1, on insère "..."
        else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      // On ajoute la page actuelle à la liste finale
      rangeWithDots.push(i);
      // On met à jour la dernière page affichée
      l = i;
    }

    return rangeWithDots; // On retourne la liste complète
  }

  const pages = getPageNumbers(); // On récupère la liste de pages à afficher

  return (
    <div className="flex justify-center mt-6 space-x-2 items-center">
      {/* Bouton "Précédent" */}
      <button
        onClick={() => onPageChange(currentPage - 1)} // Va à la page précédente
        disabled={currentPage === 1} // Désactivé si on est à la première page
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Boutons numéros de pages et points "..." */}
      {pages.map((page, idx) =>
        page === "..." ? (
          // Affichage des points de suspension
          <span key={`dots-${idx}`} className="px-3 py-1">
            ...
          </span>
        ) : (
          // Affichage d'un bouton de page
          <button
            key={page}
            onClick={() => onPageChange(page)} // Va à la page choisie
            className={`px-4 py-2 border rounded ${
              page === currentPage
                ? "bg-orange-500 text-white" // Page active
                : "bg-white text-gray-700" // Page normale
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Bouton "Suivant" */}
      <button
        onClick={() => onPageChange(currentPage + 1)} // Va à la page suivante
        disabled={currentPage === totalPages} // Désactivé si on est à la dernière page
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
