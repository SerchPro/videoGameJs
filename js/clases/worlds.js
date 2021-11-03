class EndGame {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/Backgrounds/gameOver.png';
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, 305, 230, 0, this.y, this.width, this.height);
    }
}

class MisionOne {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/Backgrounds/bg1.png';
    }

    draw() {

        /*if (this.x < -canvas.width) {
            this.x = 0;
        }
        this.x++;*/
        //la y en algun punto sube 

        ctx.drawImage(this.image, this.x, 900, 350, 215, 0, this.y, this.width, this.height);

    }
}

//export { MisionOne, EndGame };