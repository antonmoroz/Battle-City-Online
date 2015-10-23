require.config({
    baseUrl: "scripts"
});

require(["game"], function (BattleCity) {
    var game = new BattleCity();
    game.run();
    alert("ready");
});