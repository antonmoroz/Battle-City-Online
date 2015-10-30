require.config({
    baseUrl: "../scripts",
    paths: {
        domReady: "library/domReady"
    }
});

require(["game", "classes/canvas", "classes/tank", "domReady!"], function (BattleCity, Canvas, Tank) {
    var canvas = new Canvas("LowCanvas", "TopCanvas");

    var tank = new Tank(canvas);
    tank.direction = 3;
    setInterval(function () {
        canvas.clear();
        tank.move(3);
        tank.draw();
    }, 50);
});