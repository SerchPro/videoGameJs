class MarcoRossi extends Sprite {
    constructor(x, y, width, height, row) {

        const src = './images/players/MarcoRossi/marcor.png';

        super(x, y, 49, 47, width, height, 16, src, 4, row);
    }

    vanish() {
        this.row = -1;
    }

    stay() {

        if (shooting) {
            console.log("shooting");
            this.numSprites = 9;
            this.spriteIndex = 0;
            this.row = 5;
            this.speed = 16;
        } else if (throwingGrenades) {
            console.log("shooting")
        } else {
            console.log("stay")
            this.numSprites = 4;
            this.spriteIndex = 0;
            this.row = 0;
            this.speed = 16;
        }
    }

    walking(sideWalk) {
        if (sideWalk === 'right' && walking == 1) {
            console.log("walking right")
            this.numSprites = 7;
            this.spriteIndex = 0;
            this.row = 1;
            this.speed = 10;
        } else if (sideWalk === 'left') {
            console.log("walking left")

        }
    }

    up() {
        this.numSprites = 4;
        this.spriteIndex = 0;
        this.row = 2;
        this.speed = 10;
    }
    down() {
        this.numSprites = 11;
        this.spriteIndex = 0;
        this.row = 3;
        this.speed = 10;
    }

    deadKnife() {
        this.numSprites = 19;
        this.spriteIndex = 0;
        this.row = 6;
        this.speed = 8;
    }

}