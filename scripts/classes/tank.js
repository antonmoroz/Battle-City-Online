define(["structs/speed", "structs/direction", "structs/color"], function (speed, direction, color) {
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

        if (this.color === color.green) {
            switch (this.direction) {
                case direction.up:
                    sx = 1;
                    sy = 130;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.down:
                    sx = 65;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.left:
                    sx = 34;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.right:
                    sx = 97;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
            }
        }

        if (this.color === color.yellow) {
            switch (this.direction) {
                case direction.up:
                    sx = 1;
                    sy = 2;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.down:
                    sx = 65;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.left:
                    sx = 34;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.right:
                    sx = 97;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
            }
        }

        if (this.color === color.gray) {
            switch (this.direction) {
                case direction.up:
                    sx = 129;
                    sy = 2;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.down:
                    sx = 193;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.left:
                    sx = 162;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.right:
                    sx = 225;
                    sy = 1;
                    sWidth = 13;
                    sHeight = 13;
                    break;
            }
        }

        if (this.color === color.red) {
            switch (this.direction) {
                case direction.up:
                    sx = 129;
                    sy = 130;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.down:
                    sx = 193;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.left:
                    sx = 162;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
                case direction.right:
                    sx = 225;
                    sy = 129;
                    sWidth = 13;
                    sHeight = 13;
                    break;
            }
        }

        this.canvas.drawOnTopCanvas(sx, sy, sWidth, sHeight, this.x, this.y);
    };

    Tank.prototype.move = function (currentDirection) {
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

    Tank.prototype.destroy = function () {
        //TODO: implement it
    };

    return Tank;
});