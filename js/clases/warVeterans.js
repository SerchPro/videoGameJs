class HeroeComming {
    constructor(width, height) {
        this.x = 5;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/heroes/heroComming.png';
    }

    draw() {
        if (this.x < 329) {
            this.x += 36;
        }

        //5
        console.log(this.x);
        ctx.drawImage(this.image,
            this.x, 5,
            36, 46,
            15, 25,
            50, 85);

    }
}