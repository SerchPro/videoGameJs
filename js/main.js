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
    restart.style.visibility = 'visible';
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


document.getElementById("restart").onclick = function() {
    location.reload();
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
    header = new Header(40, 20, 100, 75);
    life = new Life(80, 30, 80, 75);
    Arms = new Arms(150, 20, 100, 75);
    counterUnit = new Counter(250, 20, 100, 170);
    counterDent = new Counter(270, 20, 100, 170);
    /*jugador*/
    marco = new MarcoRossi(140, 250, 85, 110, 0);

    /* Bonus */
    rock = new Rock(1350, 245, 155, 145);
    pig = new Pig(1480, 250, 90, 115, 0);

    //ednge1 = new Ednge()
    generateRebels();
    generateVeterans();

}


function generateVeterans() {
    veteranOne = new Heroe(2400, 130, 115, 125, 1);
    veteranTwo = new Heroe(2700, 220, 115, 125, 0);
    veterans = [veteranOne, veteranTwo];
}

function drawVeterans() {
    veterans.forEach((veteran, index_veteran) => {
        veteran.draw()

        if (veteran.x + veteran.width < 0) {
            veterans.splice(index_veteran, 1)
        }
    });
}


function generateRebels() {
    rebel1 = new Rebel(1550, 220, 125, 140, 5);
    rebel2 = new Rebel(1000, 220, 125, 140, 5);
    rebel3 = new Rebel(800, 220, 125, 140, 4);
    rebels = [rebel1, rebel2, rebel3]
}

function drawRebels() {
    rebels.forEach((rebel, index_rebel) => {
        rebel.draw();

        if (rebel.x + rebel.width < 0) {
            rebels.splice(index_rebel, 1)
        }
    });
}

function generateShoots() {
    fire = new Fire(marco.x + 100, marco.y + 20, 50, 50);
    fires.push(fire);
}


function shootingf() {
    fires.forEach((fire, index_fire) => {
        fire.draw();

        rebels.forEach((rebel, index_rebel) => {

            if (fire.collision(rebel)) {
                fires.splice(index_fire, 1);
                //mostrar soldado
                rebels.splice(index_rebel, 1);
                rebelDead.play();
                life.draw(lifes);
            }
        });

    });
}

function updatePositions() {

    if (bg.x >= (50.65 * 1520 / 100) && bg.x <= (54.8 * 1520 / 100) ||
        bg.x >= (66.80 * 1520 / 100) && bg.x <= (71.8 * 1520 / 100) ||
        bg.x >= (94.5 * 1520 / 100) && bg.x <= (99.2 * 1520 / 100)) {
        marco.y = 220;
        console.log('primer salto');
    }

    if (rebel2.collision(marco)) {
        if ((frames % 100 === 0)) {
            rebel2.knife();
            marco.deadKnife();
            marcoDead.play();
            endGame();
            //marco.vanish();
            lifes -= 1;
        }
    } else if (rebel3.collision(marco)) {
        if ((frames % 100 === 0)) {
            rebel3.knife();
            marco.deadKnife();
            marcoDead.play();
            endGame();
            //marco.vanish();
            lifes -= 1;
        }
    }


    if (veteranOne.collision(marco)) {
        if ((frames % 100 === 0)) {
            veteranOne.free();
            veteranOne.showing();
            tenkiu.play();
            //marco.vanish();
        }
    } else if (veteranTwo.collision(marco)) {
        if ((frames % 100 === 0)) {
            veteranTwo.freeVeteran();
            veteranTwo.showing();
            tenkiu.play();
            //marco.vanish();
        }
    }

    if (rock.collision(marco)) {
        console.log("colision con la roca marco ", marco.x, "bgx", bg.x)
    }

    if (pig.collision(marco)) {
        pig.dead();
        score += 100;
    }
}

function rebelMove() {
    if ((frames % 10 === 0)) {
        //console.log(rebel3.x)
        if (rebel3.x > 400 && scream == 0) {
            rebel3.x -= 10;
            //console.log("resta")
        } else {
            rebel3.x += 10;
            scream += 1;
            rebel3.scream();
            //rebelScream.play();
            //console.log(rebel3.x);
        }
    }

}

function endGame() {
    if (lifes <= 0) {
        music.pause();
        gameOver.draw();
        requestId = undefined;
    }


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

    if (bg.x > (38.8 * 1520) / 100) {
        marco.y = 295;
    }
    //console.log("bg", bg.x, "marco", marco.x, "pig", pig.x, "rebel3", rebel3.x);
}



function down() {
    marco.down();
    //console.log("movimiento hacia abajo");
}

function left() {
    /*if (bg.x > 0 && marco.x > 0) {
        marco.x -= 15;
        bg.x -= 5;
    }*/
    //console.log("movimiento a la izquierda", bg.x, marco.x);
}

function up() {
    marco.up();
    console.log("movimiento hacia arriba");
}

function jump() {
    marco.jump();
    marco.y -= 70;
    //console.log("movimiento", marco.y);
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
            generateShoots();
            marco.shoot();
            //fireMarco.x = marco.x + 20;
            //fireMarco.y = marco.y - 50;
            console.log("disparo con a");
            break;
        case 83:
            console.log("disparo con granada");
            break;
    }

    //movements(movementsArr);

});

addEventListener("keyup", (e) => {
    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 65) {
        if (marco) {
            walking = 0;
            marco.stay();
        };
    }
    if (e.keyCode === 32) {
        if (marco) {
            marco.stay();
            marco.y += 70;

        };
    }
})

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpiar el canvas
    bg.draw();
    header.draw();
    //life.draw(lifes);
    life.draw(lifes);
    Arms.draw()
    counterUnit.draw(5);
    counterDent.draw(9);

    marco.draw();
    pig.draw();
    rock.draw();
    drawRebels();
    drawVeterans();

    shootingf();
    updatePositions();
    rebelMove();
    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}