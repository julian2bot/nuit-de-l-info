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




    const image = document.getElementById('imageLyreco');

    let positionX = 0; // Position initiale horizontale
    let positionY = 500; // Position initiale verticale (au moins 500px)
    let directionX = 1; // Direction horizontale (1 = droite, -1 = gauche)
    let directionY = 1; // Direction verticale (1 = bas, -1 = haut)
    
    function moveImage() {
        // Dimensions de la fenêtre et de l'image
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const imageWidth = image.offsetWidth;
        const imageHeight = image.offsetHeight;
    
        // Mettre à jour la position sur l'axe X
        positionX += directionX * 2; // Vitesse horizontale
    
        // Vérifier les limites horizontales
        if (positionX + imageWidth > windowWidth || positionX < 0) {
            directionX *= -1; // Inverser la direction horizontale
        }
    
        // Mettre à jour la position sur l'axe Y
        positionY += directionY * 2; // Vitesse verticale
    
        // Vérifier les limites verticales (entre 500px et le bas de la fenêtre)
        if (positionY + imageHeight > windowHeight || positionY < 500) {
            directionY *= -1; // Inverser la direction verticale
        }
    
        // Appliquer les nouvelles positions
        image.style.left = `${positionX}px`;
        image.style.top = `${positionY}px`;
    
        // Demander la prochaine frame
        requestAnimationFrame(moveImage);
    }
    
    // Démarrer l'animation
    moveImage();






setTimeout(() => {
    
    // Démarrer l'animation
    moveFishes();
    
}, 4500);