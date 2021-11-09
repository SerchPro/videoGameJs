document.getElementById('coin').addEventListener('click', function() {
    video = document.getElementById('videoInsertCoin');
    videoStart = document.getElementById('videoStart');
    coin = document.getElementById('coin');
    start = document.getElementById('start');

    if (video) {
        padre = video.parentNode;
        padre.removeChild(video);

        coin.style.visibility = 'hidden';
        start.style.visibility = 'visible';

        videoStart.width = 850;
        videoStart.height = 450;
        videoStart.play();
        videoStart.style.visibility = 'visible';
        videoStart.style = 'margin-top:100px;';

    } else {
        alert("Ocurrio un error!! ")
    }
});



document.getElementById("start").onclick = function() {
    start.style.visibility = 'hidden';
    video = document.getElementById('videoStart');
    if (video) {
        padre = video.parentNode;
        padre.removeChild(video);
        canvas.style.visibility = 'visible';
        canvas.width = 850;
        canvas.height = 450;
        canvas.style = 'margin-top:100px;';

        insertCoins();
    } else {
        alert("Ocurrio un error!! ");
    }



    if (requestId) {
        return true;
    }

    startGame();
};

function startGame() {
    console.log("start game")
    music.play();
    music.loop = true;
    requestId = requestAnimationFrame(update);
}

function insertCoins() {

    endGame = new EndGame(canvas.width, canvas.height);
    bg = new MisionOne(canvas.width, canvas.height);
    marco = new MarcoRossi(180, 240, 85, 110);

    veteranOne = new Heroe(720, 130, 115, 125);
    veteranTwo = new Heroe((66.80 * 1520 / 100), 220, 115, 125);


    pig = new Pig(750, 275, 55, 80);

    newGun = new NewGun(600, 285, 40, 55);

    rebel = new Rebel(500, 235, 100, 115);

}

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpiar el canvas
    bg.draw();
    marco.draw();
    marco.update();
    rebel.draw();
    rebel.update();

    updatePositions();

    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}

function updatePositions() {
    if (bg.x > 690) {
        veteranOne.draw();
        veteranOne.update();

        veteranTwo.draw();
        veteranTwo.update();
    }

    if (bg.x > 320) {
        pig.draw();
        newGun.draw();
    }
    if (bg.x >= (50.65 * 1520 / 100) && bg.x <= (54.8 * 1520 / 100) ||
        bg.x >= (66.80 * 1520 / 100) && bg.x <= (71.8 * 1520 / 100) ||
        bg.x >= (94.5 * 1520 / 100) && bg.x <= (99.2 * 1520 / 100)) {
        marco.y = 220;
    } else if (bg.x > (38.8 * 1520) / 100) {
        marco.y = 295;
    } else {
        marco.y = 250;
    }
}


function endGame() {
    music.pause();
    requestId = undefined;
}

function right() {
    marco.walking('right')
    if (marco.x > 150 && bg.x < 1520) {
        if (bg.x > 690) veteranOne.x = veteranOne.x - 12;
        if (bg.x > 690) veteranTwo.x = veteranTwo.x - 12;
        if (bg.x > 320) pig.x = pig.x - 12;
        if (bg.x > 320) newGun.x = newGun.x - 12;
        bg.x += 5;
    } else if (marco.x < 630) {
        marco.x += 15;
    }
    console.log("movimiento a la derecha", bg.x, marco.x, pig.x, newGun.x);
}

function down() {
    marco.down();
    console.log("movimiento hacia abajo");
}

function left() {
    if (bg.x > 0 && marco.x > 0) {
        marco.x -= 15;
        bg.x -= 5;
    }
    console.log("movimiento a la izquierda", bg.x, marco.x);
}

function up() {
    marco.up();
    console.log("movimiento hacia arriba");
}

function jump() {
    marco.y -= 5;
}




addEventListener("keydown", (e) => {
    let keyCode = e.keyCode;

    switch (keyCode) {
        case 40:
            movementsArr.push('down');
            down();
            break;
        case 39:
            movementsArr.push('right');
            right()
            break;
        case 38:
            movementsArr.push('up');
            up()
            break;
        case 37:
            movementsArr.push('left');
            left();
            break;
        case 32:
            movementsArr.push('jump');
            jump()
            break;
        case 65:
            walking = false;
            down();
            shooting = true;
            console.log("disparo con a");
            break;
        case 83:
            console.log("disparo con granada");
            break;
    }

    //movements(movementsArr);

});

addEventListener("keyup", (e) => {
    if (e.keyCode === 40 || e.keyCode === 38) {
        if (marco) { marco.stay(); };
    }
})