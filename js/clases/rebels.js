class Rebel extends Sprite {
    constructor(x, y, width, height, numSprites, row, shoot = false, move = false) {

        const src = './images/rebels/rebel.png';

        super(x, y, 62, 65, width, height, 14, src, numSprites, row);
        this.shoot = shoot;
        this.move = move;
    }

    deadKnife() {
        this.numSprites = 9;
        this.spriteIndex = 0;
        this.row = 0;
        this.speed = 10;
    }

    dead() {
        this.numSprites = 8;
        this.spriteIndex = 0;
        this.row = 1;
        this.speed = 10;
    }

    walkingSlow() {
        this.numSprites = 11;
        this.spriteIndex = 0;
        this.row = 2;
        this.speed = 10;
    }

    knife() {

        this.numSprites = 6;
        this.spriteIndex = 0;
        this.row = 3;
        this.speed = 6;

    }

    walking() {
        this.numSprites = 15;
        this.spriteIndex = 0;
        this.row = 4;
        this.speed = 10;
    }
    stay() {
        this.numSprites = 12;
        this.spriteIndex = 0;
        this.row = 5;
        this.speed = 10;
    }

    scream(scream) {
        if (scream == 1) {
            this.numSprites = 14;
            this.spriteIndex = 0;
            this.row = 6;
            this.speed = 10;
        }

    }

    shooting() {
        this.numSprites = 4;
        this.spriteIndex = 0;
        this.row = 7;
        this.speed = 10;
        this.shoot = true;
    }



    collision(marco) {
        //console.log(this.x, marco.x, marco.width, this.y, marco.y, marco.height)
        return (
            this.x < marco.x + marco.width &&
            this.x + this.width > marco.x &&
            this.y < marco.y + marco.height &&
            this.y + this.height > marco.y
        );
    }



}