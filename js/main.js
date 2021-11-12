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
    /*this.currentTime = 0;
    this.intervalId = setInterval(() => {
        currentTime += 1


    }, 1000);*/

    gameOver = new EndGame(canvas.width, canvas.height);
    bg = new MisionOne(canvas.width, canvas.height);
    header = new Header(40, 20, 100, 75);
    life = new Life(80, 30, 80, 75);
    Arms = new Arms(150, 20, 100, 75);
    counterUnit = new Counter(250, 20, 100, 170);
    counterDent = new Counter(270, 20, 100, 170);
    /*jugador*/

    /* Bonus */
    rock = new Rock(1350, 245, 155, 145);
    pig = new Pig(1480, 250, 90, 115, 0);

    /* Edges */
    edge1 = new Edges(2100, 320, 130, 10)
        //ednge1 = new Ednge()
    generateRebels();
    generateVeterans();
    generatePlayers(140, 250);
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

    rebel1 = new Rebel(850, 220, 125, 140, 16, 4);
    rebel2 = new Rebel(760, 220, 125, 140, 16, 4);
    rebel3 = new Rebel(800, 220, 125, 140, 16, 4);
    rebel4 = new Rebel(1550, 220, 125, 140, 12, 5);
    rebel5 = new Rebel(1000, 220, 125, 140, 4, 7, true);

    rebels = [rebel1, rebel2, rebel3, rebel4, rebel5];
}

function drawRebels() {
    rebels.forEach((rebel, index_rebel) => {
        rebel.draw();
        //console.log(rebel)
        if (rebel.shoot) {
            if (frames % 160 === 0) {
                generateFireEnemies(rebel.x, rebel.y);
            }

        }
    });
}

function generateShoots() {
    fire = new Fire(marco.x + 100, marco.y + 30, 30, 30);
    fires.push(fire);
}

function generateFireEnemies(x, y) {
    console.log("Generating", rebel3.x - 100)
    fire = new FireEnemies(x - 35, y + 70, 40, 40);
    firesEnemies.push(fire);
}


function shootingEnemies() {

    firesEnemies.forEach((fire, index_fire) => {
        fire.draw();

        players.forEach((player, index_player) => {
            if (fire.x + fire.width < 0) {
                firesEnemies.splice(index_fire, 1);
            }

            if (fire.collision(player)) {
                player.deadKnife();
                players.splice(index_player, 1);
                marcoDead.play();

            }
        });
    });


}

function shootingf() {
    fires.forEach((fire, index_fire) => {
        fire.draw();

        rebels.forEach((rebel, index_rebel) => {
            if (fire.x + fire.width < 0) {
                fires.splice(index_fire, 1)
            }

            if (fire.collision(rebel)) {
                rebelDead.play();
                fires.splice(index_fire, 1);
                //mostrar soldado
                rebel.dead();
                rebel.shoot = false;
                setTimeout(function() {
                    rebels.splice(index_rebel, 1);
                }, 500);

            }
        });
    });
}

function generatePlayers(x, y) {
    marco = new MarcoRossi(x, y, 85, 110, 0);
    players = [marco];
}

function drawPlayer() {
    players.forEach((player, index_player) => {
        player.draw();
        rebels.forEach((rebel, index_rebel) => {
            if (player.collision(rebel)) {
                rebel.knife();
                players.splice(index_player, 1);
                marcoDead.play();
                //endGame(player.x, player.y);
            }

        });
    });
}

function updatePositions() {

    if (bg.x >= (50.65 * 1520 / 100)) {
        edge1.draw();
    }
    //bg.x >= (50.65 * 1520 / 100) && bg.x <= (54.8 * 1520 / 100)
    /*if (bg.x >= (66.80 * 1520 / 100) && bg.x <= (71.8 * 1520 / 100) ||
        bg.x >= (94.5 * 1520 / 100) && bg.x <= (99.2 * 1520 / 100)) {
        //marco.y = 220;
        console.log('primer salto');
        
    }*/

    if (edge1.collision(marco)) {
        console.log("marco")
        if (marco.y < 230) {
            marco.y = 170;
        }
    }


    if (veteranOne.collision(marco)) {
        if ((frames % 100 === 0)) {
            veteranOne.free();
            veteranOne.showing();
            //veteranOne.running();
            tenkiu.play();
        }
    } else if (veteranTwo.collision(marco)) {
        if ((frames % 100 === 0)) {
            veteranTwo.freeVeteran();
            veteranTwo.showing();
            //veteranTwo.running();
            tenkiu.play();
        }
    }

    if (rock.collision(marco)) {
        //console.log("colision con la roca marco ", marco.x, "bgx", bg.x)
    }

    if (pig.collision(marco)) {
        pig.dead();
        score += 100;
    }
}

function rebelMove() {
    if ((frames % 10 === 0)) {
        if (rebel3.x > 400 && scream == 0) {
            rebel3.x -= 10;
        } else if (rebel3.x < 700) {
            rebel3.x += 10;
            scream += 1;
            rebel3.scream();
        } else if (rebel3.x >= 700) {
            rebel3.shooting();
            if (frames % 80 === 0) {
                generateFireEnemies(rebel3.x, rebel3.y);
            }
        }
    }
}

function endGame(x, y) {
    if (lifes <= 0) {
        music.pause();
        gameOver.draw();
        requestId = undefined;
    } else {
        generatePlayers(x, y);
    }


}

function right() {
    pig.x = pig.x - 12;
    rock.x = rock.x - 12;
    rebels.forEach(rebelr => {
        rebelr.x -= 12;
    });

    veteranOne.x -= 12;
    veteranTwo.x -= 12;
    edge1.x -= 12;

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
    //console.log("bg", bg.x, "marco", marco.x, "marcoy", marco.y, "rebel3", rebel3.x, "rebel4", rebel4.x);
}



function down() {
    marco.down();
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
    if (marco.y != 180) {
        marco.jump();
        marco.y -= 70;
    }
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
            if (players.length) {
                generateShoots();
                marco.shoot();
            }

            //console.log("disparo con a");
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


    pig.draw();
    rock.draw();
    drawRebels();
    drawVeterans();
    drawPlayer();
    shootingf();
    updatePositions();
    //rebelMove();
    shootingEnemies();
    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}