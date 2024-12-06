var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

var game = new Phaser.Game(config);

function preload ()
{
}

function create() {
    // Create a circle
    // From: https://www.w3schools.com/tags/canvas_arc.asp
    const canva = document.createElement('canvas');
    const ctx = canva.getContext('2d');
    // ctx.beginPath();
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke();

    // Draw the circle using Phaser 3
    // this.textures.addCanvas('circle', circle);
    // const circleImage = this.add.image(150, 200, 'circle');
}


function update ()
{
}

setTimeout(()=>{document.body.style.overflow = 'auto'},500);