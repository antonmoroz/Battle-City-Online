require.config({
    baseUrl: "../scripts",
    paths: {
        domReady: "library/domReady"
    }
});

require(["game", "classes/canvas", "classes/tank", "classes/bullet", "structs/direction", "structs/color", "domReady!"], function (BattleCity, Canvas, Tank, Bullet, direction, color) {
    var canvas = new Canvas("LowCanvas", "TopCanvas");
    canvas.init();

    var tank = new Tank(canvas);
    tank.color = color.red;

    var bullet = new Bullet(canvas);
    bullet.direction = direction.right;
    bullet.x = 100;
    bullet.y = 100;
    bullet.draw();

    window.addEventListener("keydown", function (e) {
        canvas.clearTopCanvas();

        switch (e.keyCode) {
            case 87:
                //"w" key was pressed
                tank.move(direction.up);
                break;
            case 83:
                //"s" key was pressed
                tank.move(direction.down);
                break;
            case 65:
                //"a" key was pressed
                tank.move(direction.left);
                break;
            case 68:
                //"d" key was pressed
                tank.move(direction.right);
                break;
        }

        tank.move();
    }, false);

    /*var tank = new Tank(canvas);
    var direction = 0, color = 0;
    setInterval(function () {
        canvas.clearLowCanvas();
        canvas.clearTopCanvas();

        tank.direction = direction;
        tank.color = color;
        tank.draw();

        direction++;
        if (direction === 4) {
            direction = 0;
            color = (color + 1) % 4;
        }
    }, 500);*/
});