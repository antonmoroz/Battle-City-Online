define(["structs/speed", "structs/direction"], function (speed, direction) {
    function Bullet(canvas) {
        this.canvas = canvas;

        this.id = -1;

        this.x = 0;
        this.y = 0;
        this.speed = speed.normal;
        this.direction = direction.up;
    }

    Bullet.prototype.draw = function () {
        var sx, sy, sWidth, sHeight;

        switch (this.direction) {
            case direction.up:
                sx = 323;
                sy = 102;
                sWidth = 3;
                sHeight = 4;
                break;
            case direction.down:
                sx = 339;
                sy = 102;
                sWidth = 3;
                sHeight = 4;
                break;
            case direction.left:
                sx = 330;
                sy = 102;
                sWidth = 4;
                sHeight = 3;
                break;
            case direction.right:
                sx = 346;
                sy = 102;
                sWidth = 4;
                sHeight = 3;
                break;
        }

        this.canvas.drawOnTopCanvas(sx, sy, sWidth, sHeight, this.x, this.y);
    };

    return Bullet;
});