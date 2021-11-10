document.getElementById('coin').addEventListener('click', function() {
    video = document.getElementById('videoInsertCoin');
    videoStart = document.getElementById('videoStart');
    coin = document.getElementById('coin');
    start = document.getElementById('start');
    coinSound.play();
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
    coinSound.pause();
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
    music.play();
    music.loop = true;
    requestId = requestAnimationFrame(update);
}

function insertCoins() {
    /* Crear fondos*/
    gameOver = new EndGame(canvas.width, canvas.height);
    bg = new MisionOne(canvas.width, canvas.height);
    header = new Header(40, 20, 100, 100);
    life = new Life(60, 20, 85, 85);
    counterUnit = new Counter(250, 20, 95, 95);
    counterDent = new Counter(270, 20, 95, 95);
    /*jugador*/
    marco = new MarcoRossi(140, 240, 85, 110, 0);
    /*Veteranos */
    veteranOne = new Heroe(2400, 130, 115, 125, 1);
    veteranTwo = new Heroe(2700, 220, 115, 125, 0);
    /* Bonus */
    rock = new Rock(1350, 245, 155, 145);
    pig = new Bonus(1480, 250, 90, 115, 0);
    /*Rebels */
    rebel1 = new Rebel(1550, 220, 125, 140, 5);
    rebel2 = new Rebel(1000, 220, 125, 140, 5);
    rebel3 = new Rebel(800, 220, 125, 140, 4);
    /*rebel4 = new Rebel(1550, 220, 125, 140, 5);
    rebel5 = new Rebel(1550, 220, 125, 140, 5);
    rebel6 = new Rebel(1550, 220, 125, 140, 5);
    rebel7 = new Rebel(1550, 220, 125, 140, 5);
    rebel8 = new Rebel(1550, 220, 125, 140, 5);
    rebel9 = new Rebel(1550, 220, 125, 140, 5);
    rebel10 = new Rebel(1550, 220, 125, 140, 5);*/

}

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpiar el canvas
    bg.draw();
    header.draw();
    life.draw(1);
    counterUnit.draw(5);
    counterDent.draw(9);

    marco.draw();
    pig.draw();
    rock.draw();
    rebel1.draw();
    rebel2.draw();
    rebel3.draw();

    veteranOne.draw();
    veteranTwo.draw();

    updatePositions();
    rebelMove();
    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}

function updatePositions() {

    if (bg.x >= (50.65 * 1520 / 100) && bg.x <= (54.8 * 1520 / 100) ||
        bg.x >= (66.80 * 1520 / 100) && bg.x <= (71.8 * 1520 / 100) ||
        bg.x >= (94.5 * 1520 / 100) && bg.x <= (99.2 * 1520 / 100)) {
        marco.y = 220;
    } else if (bg.x > (38.8 * 1520) / 100) {
        marco.y = 295;
    } else {
        marco.y = 250;
    }

    if (rebel2.collision(marco)) {
        if ((frames % 100 === 0)) {
            rebel2.knife();
            marco.deadKnife();
            //marco.vanish();
            lifes -= 1;
        }
    } else if (rebel3.collision(marco)) {
        if ((frames % 100 === 0)) {
            rebel3.knife();
            marco.deadKnife();
            //marco.vanish();
            lifes -= 1;
        }
    }
}

function rebelMove() {
    if ((frames % 10 === 0)) {
        if (rebel3.x > 400 && scream == 0) {
            rebel3.x -= 10;
        } else {
            rebel3.x += 10;
            scream += 1;
            rebel3.scream();
        }
    }

}

function endGame() {
    music.pause();
    gameOver.draw();
    requestId = undefined;

}

function right() {
    pig.x = pig.x - 12;
    rock.x = rock.x - 12;
    rebel1.x = rebel1.x - 12;
    rebel2.x = rebel2.x - 12;
    rebel3.x = rebel3.x - 12;

    veteranOne.x = veteranOne.x - 12;
    veteranTwo.x = veteranTwo.x - 12;

    marco.walking('right');
    walking += 1;
    if (marco.x > 150 && bg.x < 1520) {
        bg.x += 5;
    } else if (marco.x < 630) {
        marco.x += 15;
    }
    //console.log("bg", bg.x, "marco", marco.x, "pig", pig.x, "rebel3", rebel3.x);
}



function down() {
    marco.down();
    console.log("movimiento hacia abajo");
}

function left() {
    /*if (bg.x > 0 && marco.x > 0) {
        marco.x -= 15;
        bg.x -= 5;
    }*/
    console.log("movimiento a la izquierda", bg.x, marco.x);
}

function up() {
    marco.up();
    console.log("movimiento hacia arriba");
}

function jump() {
    //marco.y = 220;
    console.log("movimiento", marco.y);
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
            right();
            break;
        case 38:
            movementsArr.push('up');
            up();
            break;
        case 37:
            movementsArr.push('left');
            left();
            break;
        case 32:
            movementsArr.push('jump');
            jump();
            break;
        case 65:
            down();
            console.log("disparo con a");
            break;
        case 83:
            console.log("disparo con granada");
            break;
    }

    //movements(movementsArr);

});

addEventListener("keyup", (e) => {
    /*if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 39) {
        if (marco) {
            walking = 0;
            marco.stay();
        };
    }*/
})