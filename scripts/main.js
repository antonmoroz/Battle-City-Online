require.config({
    baseUrl: "../scripts",
    paths: {
        domReady: "library/domReady"
    }
});

require(["game", "domReady!"], function (BattleCity) {
    var game = new BattleCity();
    game.run();
    alert("ready");
});