if (window.innerHeight < 700 && window.innerWidth < 1167) {
    hauteur = window.innerHeight;
    largeur = hauteur * 1.78;
    if (window.innerWidth < largeur) {
        largeur = window.innerWidth;
        hauteur = largeur / 1.78;
    }
} else {
    hauteur = 500;
    largeur = hauteur * 1.78;
}

const config = {
    backgroundColor: '#00A0FE',

    width:hauteur ,
    height: largeur,
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 }, // Ajout d'une gravité globale
            debug: false,
        },
    },
};

let game = new Phaser.Game(config);
let player;
let fallingObjects;
let score = 0;
let scoreText;
let gameOverText;
let speed = 300;


function preload() {
    this.load.image("player", "../assets/images/defis/filet.png");
    this.load.image("object", "../assets/images/defis/sacPlastique.png");
}

function create() {
    // Création du joueur
    player = this.physics.add.sprite(config.width / 2, config.height - 50, "player");
    player.setCollideWorldBounds(true);
    player.setOffset(10, 10);
    // Groupe des objets qui tombent
    fallingObjects = this.physics.add.group({
        defaultKey: "object",
        maxSize: 20, // Limite le nombre d'objets à l'écran
    });

    // Texte pour afficher le score
    scoreText = this.add.text(16, 16, "Score: 0", { fontSize: "32px", fill: "#fff" });

    // Texte de Game Over
    gameOverText = this.add.text(config.width / 2, config.height / 2, "Bravoo ! ;)", {
        fontSize: "48px",
        fill: "#fff",
    });
    gameOverText.setOrigin(0.5);
    gameOverText.setVisible(false);

    // Ajout de la collision entre le joueur et les objets
    this.physics.add.overlap(player, fallingObjects, catchObject, null, this);

    // Génération périodique des objets
    this.time.addEvent({
        delay: 1000, // Toutes les secondes
        callback: spawnObject,
        callbackScope: this,
        loop: true,
    });

    // Contrôles clavier
    this.input.keyboard.on("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                player.setVelocityX(-speed);
                break;
            case "ArrowRight":
                player.setVelocityX(speed);
                break;
        
            default:
                break;
        }
        
        // if (event.key === "ArrowLeft") {
        //     player.setVelocityX(-300);
        // } else if (event.key === "ArrowRight") {
        //     player.setVelocityX(300);
        // }
    });

    this.input.keyboard.on("keyup", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            player.setVelocityX(0);
        }
    });
}

function update() {
    if (score >= 10) {
        endGame();
    }
}

function spawnObject() {
    const xPosition = Phaser.Math.Between(50, config.width - 50);

    // Création d'un objet avec vélocité verticale
    const object = fallingObjects.create(xPosition, 50);
    if (object) {
        object.setVelocityY(Phaser.Math.Between(100, 300)); // Vitesse de chute aléatoire
        object.setCollideWorldBounds(false);
        object.setBounce(0); // Aucun rebond
    }
}

function catchObject(player, object) {
    object.destroy(); // Supprime l'objet attrapé
    score += 1;
    scoreText.setText(`Score: ${score}`);
}

function update() {
    if (score >= 10) {
        endGame.call(this); // Passe explicitement la scène à endGame
    }
}

function endGame() {
    this.physics.pause(); // Appel correctement lié au contexte Phaser
    gameOverText.setVisible(true);

    document.getElementById("boutonValider").disabled = false;

    this.input.keyboard.on("keydown", (event) => {
        if (event.key === "Enter") {
            restartGame.call(this); // Passe la scène à restartGame
        }
    });
}

function restartGame() {
    score = 0;
    scoreText.setText("Score: 0");
    gameOverText.setVisible(false);
    this.scene.restart(); // Redémarre la scène correctement
}




setTimeout(()=> {document.body.style.overflow = "auto"}, 50)