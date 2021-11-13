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
    pig = new Pig(1500, 250, 90, 115, 0);

    generateRebels();
    generateVeterans();
    generatePlayers(90, 250);
}


function generateVeterans() {
    veteranOne = new Heroe(2400, 130, 115, 125, 1);
    veteranTwo = new Heroe(2750, 220, 115, 125, 0);
    veterans = [veteranOne, veteranTwo];
}

function drawVeterans() {
    veterans.forEach((veteran, index_veteran) => {
        veteran.draw();
        if (veteran.x + veteran.width < 0) {
            veterans.splice(index_veteran, 1)
        }
        players.forEach(player => {

            if (veteran.collision(player)) {
                if (frames % 100 === 0) {
                    tenkiu.play();
                    veteran.showing();
                    player.knife();
                }
            }
        });
    });
}


function generateRebels() {

    rebel1 = new Rebel(850, 220, 125, 140, 16, 4, shoot = false, move = true);
    rebel2 = new Rebel(800, 220, 125, 140, 16, 4, shoot = false, move = true);

    rebel3 = new Rebel(1550, 220, 125, 140, 12, 5, shoot = false, move = false);
    rebel4 = new Rebel(1450, 220, 125, 140, 12, 5, shoot = false, move = false);

    rebel5 = new Rebel(750, 220, 125, 140, 4, 7, shoot = true, move = false);
    rebel6 = new Rebel(700, 220, 125, 140, 12, 5, shoot = true, move = false);
    // segunda sesion 

    rebel6 = new Rebel(2500, 270, 125, 140, 12, 5, shoot = false, move = false);
    rebel7 = new Rebel(3200, 285, 125, 140, 4, 7, shoot = true, move = false);
    rebel8 = new Rebel(3400, 285, 125, 140, 12, 5, shoot = false, move = false);
    rebel9 = new Rebel(3600, 285, 125, 140, 4, 7, shoot = true, move = false);

    rebels = [
        rebel1, rebel2, rebel3, rebel4, rebel5, rebel6, rebel7, rebel8, rebel9
    ];
    //rebel1, rebel2, rebel3, rebel4, rebel5, rebel6,rebel7, rebel8, rebel9
}

function drawRebels() {
    rebels.forEach((rebel, index_rebel) => {
        rebel.draw();

        if (rebel.x + rebel.width < 0) {
            rebels.splice(index_rebel, 1)
        }

        if (rebel.shoot) {
            if (frames % 300 === 0) {
                generateFireEnemies(rebel.x, rebel.y);
            }
        }
        if (rebel.move) {
            if ((frames % 10 === 0)) {
                if (rebel.x > 400 && scream == 0) {
                    rebel.x -= 10;
                } else if (rebel.x < 700) {
                    scream += 1;
                    rebel.x += 10;
                    rebel.scream(scream);
                } else if (rebel.x >= 700) {
                    rebel.stay();
                }
            }
        }
    });
}

function generateShoots() {
    fire = new Fire(marco.x + 60, marco.y + 30, 20, 30);
    fires.push(fire);
}

function generateFireEnemies(x, y) {
    fire = new FireEnemies(x - 25, y + 80, 40, 40);
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
                lifes -= 1;
                marcoDead.play();
                endGame(player.x, player.y);

            }
        });
    });


}

function shootingf() {
    fires.forEach((fire, index_fire) => {
        fire.draw();
        if (fire.x + fire.width + marco.x + 60 >= canvas.width) {
            console.log("se eliminara")
            fires.splice(index_fire, 1)
        }
        rebels.forEach((rebel, index_rebel) => {
            if (fire.collision(rebel)) {
                rebelDead.play();
                fires.splice(index_fire, 1);
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
    marco = new MarcoRossi(x, y, 110, 110, 0);
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
                endGame();
            }

        });
    });
}

function updatePositions() {

    if (bg.x >= 1520) {
        marco.win();
    }

    if (bg.x > (38.8 * 1520) / 100) {
        if (frames % 60 === 0) {
            marco.y = 300;
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


function endGame() {
    music.pause();
    gameOver.draw();
    requestId = undefined;
}

function right() {
    pig.x = pig.x - 12;
    rock.x = rock.x - 12;
    rebels.forEach(rebel => {
        rebel.x -= 12;
    });

    veterans.forEach(veteran => {
        veteran.x -= 12;

    });

    marco.walking('right');
    walking += 1;

    if (marco.x > 150 && bg.x < 1520) {
        bg.x += 5;
    } else if (marco.x < 630) {
        marco.x += 15;
    }

    console.log("bg", bg.x, "marco", marco.x, "marcoy", marco.y);
}



function down() {
    marco.down();
}



function up() {
    marco.up();
}

function jump() {
    if (marco.y == 250) {
        marco.jump();
        marco.y = 180;
    } else if (marco.y == 300) {
        marco.jump();
        marco.y = 225;
    }
}

addEventListener("keydown", (e) => {
    let keyCode = e.keyCode;

    switch (keyCode) {
        case 40:
            down();
            break;
        case 39:
            right();
            break;
        case 38:
            up();
            break;
        case 65:
            if (players.length) {
                generateShoots();
                marco.shoot();
            }
            break;
        case 83:
            jump();
            break;
    }

});

addEventListener("keyup", (e) => {
    if (marco == undefined) { return }
    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 39) {
        walking = 0;
        marco.stay();
    }
    if (e.keyCode === 83) {
        if (marco.y == 180) {
            marco.stay();
            marco.y = 250;
        } else if (marco.y == 225) {
            marco.stay();
            marco.y = 300;
        }

    }
    if (e.keyCode === 65) {

        setTimeout(function() {
            walking = 0;
            marco.stay();
        }, 200);
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
    shootingEnemies();
    if (requestId) {
        requestId = requestAnimationFrame(update);
    }
}