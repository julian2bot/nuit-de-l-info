let fishes = [];
const fishCount = 5;

    // Initialiser les positions des poissons
    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagehippocampe${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }
    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagepoisson-clown${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }
    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagepoisson${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }
    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagepoisson2${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }
    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagepoisson3${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }

    for (let i = 0; i < fishCount; i++) {
        fishes.push({
            id: `imagetortue${i}`,
            positionX: Math.random() * window.innerWidth, // Position initiale aléatoire
            direction: 1 + Math.random() * 2, // Vitesse aléatoire entre 1 et 3
            top : 500 + Math.random() * (window.innerHeight * 2 - 500)
        });
    }

    
    function moveFishes() {
        fishes.forEach(fish => {
            const image = document.getElementById(fish.id);
            
            // Mettre à jour la position horizontale
            fish.positionX += fish.direction;
            
            // Revenir au début de l'écran s'il dépasse
            if (fish.positionX > window.innerWidth) {
                fish.positionX = -100; // Réinitialiser hors de l'écran à gauche
                fish.top = 500 + Math.random() * (window.innerHeight * 2 - 500); 

            }
            
            // Appliquer la position
            image.style.left = `${fish.positionX}px`;
            image.style.top = `${fish.top}px`;
        });
        
        // Demander une nouvelle frame
        requestAnimationFrame(moveFishes);
    }


setTimeout(() => {
    
    // Démarrer l'animation
    moveFishes();
    
}, 4500);