class player {

    constructor(x, y, width, height, granade, gun) {
        this.x = x; // se desplaza se derecha a izquierda
        this.y = y;
        this.width = width;
        this.height = height;
        this.granade = granade;
        this.gun = gun;
    }


}

class MarcoRossi extends player {
    constructor(x, y, width, height, gun, granade) {

        super(x, y, width, height, gun, granade);
        this.image = new Image();


    }

    drawMarcoShoot() {

    }

    drawMarcoCrouched() {

        this.image.src = './images/players/MarcoRossi/marco.gif';
        //console.log(this.image)

        ctx.drawImage(this.image,
            525, 230,
            36, 47,
            50, 220,
            75, 125);
    }

    drawMarcoShootingUp() {

    }
}