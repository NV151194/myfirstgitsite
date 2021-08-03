"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var path = 'https://api.sofascore.com/api/v1/event/9340090/lineups';
axios_1["default"].get(path).then(function (stat) {
    var stats = stat.data.home.players;
    var playerdata = " name,position,accuratePass,minutesPlayed,interceptionWon,saves,keyPass,totalTackle,goalAssist,onTargetScoringAttempt,goals";
    console.log(playerdata);
    for (var i = 0; i < stats.length; i++) {
        var allstats = stats[i];
        var statistics = allstats.statistics;
        var players = allstats.player;
        var playerstats = " " + players.name + "," + players.position + "," + statistics.accuratePass + "," + statistics.minutesPlayed + "," + statistics.interceptionWon + "," + statistics.saves + "," + statistics.keyPass + "," + statistics.totalTackle + "," + statistics.goalAssist + "," + statistics.onTargetScoringAttempt + "," + statistics.goals;
        console.log(playerstats);
    }
});
