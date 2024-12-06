if(window.innerHeight < 700 && window.innerWidth < 1167){
    hauteur = window.innerHeight;
    largeur =  hauteur * 1.78;
    if(window.innerWidth < largeur){
        largeur =  window.innerWidth;
        hauteur = largeur / 1.78;
    }
}
else{
    hauteur = 500;
    largeur = hauteur * 1.78 ;
}

var config = {
    type: Phaser.AUTO,
    width: largeur,
    height: hauteur,
    backgroundColor: '#ffffff',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 300 },
            // debug: true
        }
    }
};

class tuyaux{
    constructor(nbchemin){
        this.nbchemin = nbchemin%3;
        switch (this.nbchemin) {
            case 0:
                this.image = "tuyaux1";
                break;

            case 1:
                this.image = "tuyaux2";
                break;
        
            default:
                this.image = "tuyaux3";
                break;
        }
    }
}

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('player', '../assets/images/game/tronLogo.png');
    
    this.load.image('droit', '../assets/images/game/Tuyaux1.png'); // Un tuyau droit
    this.load.image('coude', '../assets/images/game/Tuyaux2.png'); // Un tuyau coudé
    this.load.image('tuyau_triple', '../assets/images/game/Tuyaux2.png'); // Un tuyau coudé

}

function create() {

    const solution = [
        {"row": 0, "col": 0, "rotation": 0}, // Départ
        {"row": 0, "col": 1, "rotation": 3},
        {"row": 1, "col": 1, "rotation": 1},
        {"row": 2, "col": 1, "rotation": 1},
        {"row": 2, "col": 2, "rotation": 0},
        {"row": 2, "col": 3, "rotation": 0},

        {"row": 1, "col": 3, "rotation": 2},
        {"row": 1, "col": 4, "rotation": 3},
        {"row": 2, "col": 4, "rotation": 1},
        {"row": 3, "col": 4, "rotation": 0},
        {"row": 3, "col": 3, "rotation": 0},
        {"row": 3, "col": 2, "rotation": 2},
        {"row": 4, "col": 2, "rotation": 1},
        {"row": 4, "col": 3, "rotation": 0},
        {"row": 4, "col": 4, "rotation": 0}  // Arrivée
    ];

    const confBase = 
    [
          [
            {"type": "droit", "rotation": 0},
            {"type": "coude", "rotation": 1},
            {"type": "coude", "rotation": 1},
            {"type": "coude", "rotation": 0},
            {"type": "droit", "rotation": 0}
          ],
          [
            {"type": "droit", "rotation": 1},
            {"type": "droit", "rotation": 2},
            {"type": "coude", "rotation": 1},
            {"type": "coude", "rotation": 0},
            {"type": "coude", "rotation": 3}
          ],
          [
            {"type": "coude", "rotation": 3},
            {"type": "coude", "rotation": 0},
            {"type": "droit", "rotation": 0},
            {"type": "coude", "rotation": 0},
            {"type": "droit", "rotation": 1}
          ],
          [
            {"type": "coude", "rotation": 3},
            {"type": "coude", "rotation": 2},
            {"type": "coude", "rotation": 1},
            {"type": "droit", "rotation": 1},
            {"type": "coude", "rotation": 2}
          ],
          [
            {"type": "coude", "rotation": 2},
            {"type": "coude", "rotation": 0},
            {"type": "coude", "rotation": 1},
            {"type": "droit", "rotation": 3},
            {"type": "droit", "rotation": 0}
          ]
        ];

        const plateau = 
        [
              [
                {"type": "droit", "rotation": 0},
                {"type": "coude", "rotation": 1},
                {"type": "coude", "rotation": 1},
                {"type": "coude", "rotation": 0},
                {"type": "droit", "rotation": 0}
              ],
              [
                {"type": "droit", "rotation": 1},
                {"type": "droit", "rotation": 2},
                {"type": "coude", "rotation": 1},
                {"type": "coude", "rotation": 0},
                {"type": "coude", "rotation": 3}
              ],
              [
                {"type": "coude", "rotation": 3},
                {"type": "coude", "rotation": 0},
                {"type": "droit", "rotation": 0},
                {"type": "coude", "rotation": 0},
                {"type": "droit", "rotation": 1}
              ],
              [
                {"type": "coude", "rotation": 3},
                {"type": "coude", "rotation": 2},
                {"type": "coude", "rotation": 1},
                {"type": "droit", "rotation": 1},
                {"type": "coude", "rotation": 2}
              ],
              [
                {"type": "coude", "rotation": 2},
                {"type": "coude", "rotation": 0},
                {"type": "coude", "rotation": 1},
                {"type": "droit", "rotation": 3},
                {"type": "droit", "rotation": 0}
              ]
            ];

    const rows = 5;
    const cols = 5;
    const tileSize = 100;

    for (let row = 0; row < rows; row++) {
        tuyaux[row] = [];
        for (let col = 0; col < cols; col++) {
            const tuyau = this.add.sprite(col * tileSize + tileSize / 2, row * tileSize + tileSize / 2, confBase[row][col]["type"]);
            tuyau.rotation = confBase[row][col]["rotation"] * Math.PI / 2;
            tuyau.setInteractive();
            tuyaux[row][col] = tuyau;

            tuyau.on('pointerdown', () => {
                tuyau.rotation += Math.PI / 2;
                if(confBase[row][col]["type"] == "coude")
                    plateau[row][col]["rotation"] = (plateau[row][col]["rotation"]+1)%4
                else
                plateau[row][col]["rotation"] = (plateau[row][col]["rotation"]+1)%2
                if(verifPlateau(solution,plateau)){
                    console.log("fini");
                    document.getElementById("boutonValider").disabled=false;
                }
            });
        }
    }

}


function update ()
{
}

function verifPlateau(solution, plateau){
    for (const element of solution) {
        if(! plateau[element.row][element.col]["rotation"]==element.rotation){
            return false;
        }
    }
    return true;
}

setTimeout(()=>{document.body.style.overflow = 'auto'},500);