require.config({
    baseUrl: "../scripts",
    paths: {
        domReady: "library/domReady"
    }
});

require(["game", "classes/canvas", "classes/tank", "domReady!"], function (BattleCity, Canvas, Tank) {
    var canvas = new Canvas("LowCanvas", "TopCanvas");
    canvas.init();

    var tank = new Tank(canvas);
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
    }, 500);
});