//import { MisionOne, EndGame } from '../js/clases/worlds.js';


endGame = new EndGame(canvas.width, canvas.height);
bg = new MisionOne(canvas.width, canvas.height);
marco = new MarcoRossi(10, 450, 50, 50, false, false);

heroe = new HeroeComming(10, 20);

document.getElementById("start").onclick = function() {
    if (requestId) {
        return true;
    }
    startGame();
};


function update() {
    //console.log("entre al update")
    frames++;
    //limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();
    //heroe.draw();
    //endGame.draw();
    marco.drawMarcoCrouched();
    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}

function startGame() {
    console.log("Start button clicked");
    requestId = requestAnimationFrame(update);
}


addEventListener("keydown", (e) => {
    let keyCode = e.keyCode;

    switch (keyCode) {
        case 40:
            console.log("abajo");
            break;
        case 39:
            console.log("derecha", bg.x);
            bg.x += 5;
            break;
        case 38:
            console.log("arriba");
            break;
        case 37:
            if (bg.x > 0) {
                bg.x -= 5;
                console.log("izquierda", bg.x);
            }
            break;
        case 32:
            console.log("saltar");
            break;
        case 65:
            console.log("disparo con a");
            break;
        case 83:
            console.log("disparo con granada");
            break;
    }

});