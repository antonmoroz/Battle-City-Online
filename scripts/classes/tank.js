define(["classes/bullet", "structs/speed", "structs/direction", "structs/color"], function (Bullet, speed, direction, color) {
    function Tank(canvas) {
        this.canvas = canvas;

        this.id = -1;

        this.x = 0;
        this.y = 0;
        this.speed = speed.normal;
        this.direction = direction.up;
        this.stars = 0;
        this.health = 0;
        this.color = color.green;

        this.hasChanges = false;
    }

    Tank.prototype.draw = function () {
        var sx, sy, sWidth, sHeight;

        //Calculate sx and sy coordinates
        switch (this.direction) {
            case direction.up:
                sx = 1;
                sy = 2;
                break;
            case direction.down:
                sx = 65;
                sy = 1;
                break;
            case direction.left:
                sx = 34;
                sy = 1;
                break;
            case direction.right:
                sx = 97;
                sy = 1;
                break;
        }

        if (this.color === color.green) {
            sy += 128;
        }

        if (this.color === color.gray) {
            sx += 128;
        }

        if (this.color === color.red) {
            sx += 128;
            sy += 128;
        }

        //Set width and height
        sWidth = 13;
        sHeight = 13;

        this.canvas.drawOnTopCanvas(sx, sy, sWidth, sHeight, this.x, this.y);
    };

    /**
     * Move tank according to specified direction
     */
    Tank.prototype.move = function (currentDirection) {
        this.direction = currentDirection;

        switch (currentDirection) {
            case direction.up:
                this.y--;
                break;
            case direction.down:
                this.y++;
                break;
            case direction.left:
                this.x--;
                break;
            case direction.right:
                this.x++;
                break;
        }

        this.draw();
    };

    Tank.prototype.fire = function () {
        //TODO: implement it
    };

    Tank.prototype.destroy = function () {
        //TODO: implement it
    };

    return Tank;
});