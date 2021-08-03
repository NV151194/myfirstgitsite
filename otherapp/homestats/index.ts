import axios from 'axios';


const path = `https://api.sofascore.com/api/v1/event/9444187/lineups`;

	axios.get(path).then( (stat) =>{
const stats = stat.data.home.players;
const playerdata = ` Name,P,AP,MP,IW,S,KP,TT,GA,SOT,G`;
                  console.log(playerdata);
for (let i = 0; i < stats.length; i++){
    
	const allstats = stats[i];
	const statistics = allstats.statistics;
	const players = allstats.player;
	const playerstats = ` ${players.name},${players.position},${statistics.accuratePass},${statistics.minutesPlayed},${statistics.interceptionWon},${statistics.saves},${statistics.keyPass},${statistics.totalTackle},${statistics.goalAssist},${statistics.onTargetScoringAttempt},${statistics.goals}`;
	 console.log(playerstats);

		}});