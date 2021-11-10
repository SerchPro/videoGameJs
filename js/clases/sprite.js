class Sprite {
    constructor(x, y, sx, sy, width, height, speedFrame, src, numSprites, row) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = src;
        this.speed = speedFrame;
        this.spriteIndex = 0;
        this.count = 0;
        this.numSprites = numSprites;
        this.sx = sx;
        this.sy = sy;
        this.row = row;

    }

    draw() {
        /*console.log(
            this.x,
            this.y,
            this.width,
            this.height,
            this.image.src,
            this.speed,
            this.spriteIndex,
            this.count,
            this.numSprites,
            this.sx,
            this.sy,
            this.row
        )*/
        ctx.drawImage(this.image,
            (this.spriteIndex * this.sx), (this.row * this.sy),
            this.sx, this.sy,
            this.x, this.y,
            this.width, this.height);

        this.count += 1;
        if (this.count > this.speed) {
            this.count = 0;
            if (this.spriteIndex < this.numSprites - 1) {
                this.spriteIndex += 1;
            } else {
                this.spriteIndex = 0;
            }
        }

    }


}