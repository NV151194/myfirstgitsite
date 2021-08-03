"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var pathnumber = 9575040;
var path = "https://api.sofascore.com/api/v1/event/" + pathnumber + "/lineups";
axios_1["default"].get(path).then(function (stat) {
    var stats = stat.data.home.players;
    var playerdata = " Name,P,AP,MP,IW,S,KP,TT,GA,SOT,G";
    console.log(playerdata);
    for (var i = 0; i < stats.length; i++) {
        var allstats = stats[i];
        var statistics = allstats.statistics;
        var players = allstats.player;
        var playerstats = " " + players.name + "," + players.position + "," + statistics.accuratePass + "," + statistics.minutesPlayed + "," + statistics.interceptionWon + "," + statistics.saves + "," + statistics.keyPass + "," + statistics.totalTackle + "," + statistics.goalAssist + "," + statistics.onTargetScoringAttempt + "," + statistics.goals;
        console.log(playerstats);
    }
});
