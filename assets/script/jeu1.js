const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 1000,
    scene: {
        create,
    },
});

function create() {
    // Create a circle
    // From: https://www.w3schools.com/tags/canvas_arc.asp
    const canva = document.getElementById('gameCanva');
    const ctx = canva.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw the circle using Phaser 3
    this.textures.addCanvas('circle', circle);
    const circleImage = this.add.image(150, 200, 'circle');
}