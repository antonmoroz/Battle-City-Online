require.config({
    paths: {
        baseUrl: "javascript"
    }
});

require(["game"], function (BattleCity) {
    var game = new BattleCity();
    game.run();
});