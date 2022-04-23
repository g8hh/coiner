var achievs = {
	new_era: {
		label: "New era",
		description: "Buy a brandnew ZUSE Z3",
		aid: 1,
		gold: 1,
		hidden: false
	},
	hacking: {
		label: "Is this even legal?",
		description: "Hack your first dollar",
		aid: 2,
		gold: 1,
		hidden: false
	},
	bronze: {
		label: "Just the beginning",
		description: "First bronze award",
		aid: 3,
		gold: 1,
		hidden: false
	},
	silver: {
		label: "Stop wasting your time",
		description: "First silver award",
		aid: 4,
		gold: 2,
		hidden: false
	},
	gold: {
		label: "Nice power bill",
		description: "First gold award",
		aid: 5,
		gold: 5,
		hidden: false
	},
	ruby: {
		label: "Meh",
		description: "First ruby award",
		aid: 51,
		gold: 10,
		hidden: false
	},
	tentian: {
		label: "Why not ten?",
		description: "Buy 10 Tian-He's at once while having silver award",
		aid: 52,
		gold: 1,
		hidden: false
	},
	allbronze: {
		label: "Just the beginning v2",
		description: "Have every bronze award",
		aid: 52,
		gold: 2,
		hidden: false
	},
	allsilver: {
		label: "Don't forget eating!",
		description: "Have every silver award",
		aid: 53,
		gold: 5,
		hidden: false
	},
	allgold: {
		label: "bling bling",
		description: "Have every gold award",
		aid: 54,
		gold: 10,
		hidden: false
	},
	allruby: {
		label: "Reset NOW",
		description: "Have every ruby award",
		aid: 55,
		gold: 30,
		hidden: false
	},
	built500: {
		label: "Imperator",
		description: "Buy 500 machines",
		aid: 56,
		gold: 2,
		hidden: false
	},
	built2000: {
		label: "Addicted to you-, mining",
		description: "Buy 2000 machines",
		aid: 56,
		gold: 10,
		hidden: false
	},
	built10k: {
		label: "There's a place..",
		description: "Buy 10,000 machines",
		aid: 56,
		gold: 100,
		hidden: false
	},
	kim1: {
		label: "mega.co.nz",
		description: "Buy Kim Dotcom!",
		aid: 6,
		gold: 5,
		hidden: false
	},
	kim1000: {
		label: "I think you can stop now",
		description: "300x Kim, I can't believe it, you did it!",
		aid: 7,
		gold: 15,
		hidden: false
	},
	money1k: {
		label: "One Mille",
		description: "Save up 1,000$",
		aid: 8,
		gold: 1,
		hidden: false
	},
	money1mrd: {
		label: "Richie Rich",
		description: "Save up "+bigNum(1000000000, true)+"$",
		aid: 9,
		gold: 2,
		hidden: false
	},
	endoftime: {
		label: "End of time",
		description: "Save up "+bigNum(1000000000000000000000000000, true)+" dollars",
		aid: 91,
		gold: 10,
		hidden: false
	},
	inflation: {
		label: "Inflation",
		description: "Save up "+bigNum(66000000000000, true)+" Bitcoins",
		aid: 92,
		gold: 5,
		hidden: false
	},
	btcs1: {
		label: "Well, that escalated quickly",
		description: "Calculate 100 BTC per second",
		aid: 10,
		gold: 1,
		hidden: false
	},
	btcs1mio: {
		label: "That wouldn't be possible!",
		description: "Calculate "+bigNum(1000000000, true)+" BTC per second",
		aid: 11,
		gold: 5,
		hidden: false
	},
	cmd: {
		label: "Terminals ain't only for airplanes",
		description: "Open the command line",
		aid: 12,
		gold: 1,
		hidden: false
	},
	hackgoogle: {
		label: "You crazy",
		description: "You tried to hack google.com",
		aid: 13,
		gold: 1,
		hidden: true
	},
	online200s: {
		label: "Status: Reallife",
		description: "Be online for 200 seconds",
		aid: 14,
		gold: 1,
		hidden: false
	},
	online2h: {
		label: "Status: Online",
		description: "Be online for 2 hours",
		aid: 14,
		gold: 1,
		hidden: false
	},
	online1d: {
		label: "Status: Nerd",
		description: "Be online for 1 day",
		aid: 15,
		gold: 5,
		hidden: false
	},
	online1m: {
		label: "Status: Sheldon",
		description: "Be online for 10 days",
		aid: 16,
		gold: 55,
		hidden: false
	},
	straight6h: {
		label: "Are you afk?",
		description: "Stay straight online for 6 hours!",
		aid: 17,
		gold: 10,
		hidden: false
	},
	export30: {
		label: "No risk",
		description: "Export you savegame 30 times",
		aid: 18,
		gold: 2,
		hidden: false
	},
	sell450: {
		label: "Annoying seller",
		description: "Sell Bitcoins worth "+bigNum(450000000000000000, true)+"$ at once!",
		aid: 19,
		gold: 5,
		hidden: false
	},
	resgoose: {
		label: "Ducktales",
		description: "Get help from Gyro Gearloose",
		aid: 20,
		gold: 2,
		hidden: false
	},
	res5: {
		label: "up to date",
		description: "Research 5 Upgrades",
		aid: 21,
		gold: 1,
		hidden: false
	},
	res25: {
		label: "Stagnation is regression",
		description: "Research 45 Upgrades",
		aid: 22,
		gold: 10,
		hidden: false
	},
	btcusd666: {
		label: "Patience",
		description: "Sell BTCs when BTC rate is more than 606$ (Won't work with auto-sell)",
		aid: 23,
		gold: 30,
		hidden: false
	},
	/*feedback: {
		label: "Make it better",
		description: "Give some feedback!",
		aid: 24,
		gold: 5,
		hidden: false
	},*/
	random299: {
		label: "Coincidence? I think not",
		description: "Click 299 random events",
		aid: 25,
		gold: 30,
		hidden: false
	},
	norandom24: {
		label: "Abstinence",
		description: "Don't click a single random for 24h (One click before required)",
		aid: 251,
		gold: 30,
		hidden: false
	},
	prestige100: {
		label: "Prestige",
		description: "Get 300 coins at once",
		aid: 26,
		gold: 50,
		hidden: false
	},
	prestigeLvl3: {
		label: "Holy Grail",
		description: "Reach Prestige 3",
		aid: 261,
		gold: 100,
		hidden: false
	},
	reset1mio: {
		label: "Spare your finger",
		description: "Make 1 million dollar without any hack attacks (in wallet) (prestige allowed)",
		aid: 27,
		gold: 30,
		hidden: false
	},
	mioIn15: {
		label: "Hilarious",
		description: "Make 1 million dollar in less than 15 minutes (in wallet) (prestige allowed)",
		aid: 28,
		gold: 50,
		hidden: false
	},
	tron30: {
		label: "Legacy",
		description: "Hit 30 coins in TRON",
		aid: 29,
		gold: 10,
		hidden: false
	},
	tron100r: {
		label: "Gameception",
		description: "Play 100 rounds of TRON",
		aid: 29,
		gold: 10,
		hidden: false
	},
	clicks9: {
		label: "Hacking Expert",
		description: "Do 9 clicks per second",
		aid: 30,
		gold: 15,
		hidden: false
	},
	level10: {
		label: "Online Shopping",
		description: "Reach Level 10 in Online Shop",
		aid: 31,
		gold: 5,
		hidden: false
	},
	beat30: {
		label: "Sandor Clegane",
		description: "Beat 30 Bosses",
		aid: 32,
		gold: 10,
		hidden: false
	},
	unlockjupiter: {
		label: "To the stars",
		description: "Unlock Jupiter (Adventure Mode)",
		aid: 33,
		gold: 15,
		hidden: false
	},
	clicker250: {
		label: "Clickception",
		description: "Click 250 times",
		aid: 34,
		gold: 2,
		hidden: false
	},
	clicker2500: {
		label: "Clickbot",
		description: "Click 3000 times",
		aid: 35,
		gold: 8,
		hidden: false
	},
	
	
	/*
	fblike: {
		label: "Hype! More Hype!",
		description: "Like Bitcoiner on Facebook",
		aid: 30,
		gold: 5,
		hidden: true
	}*/

}

function listAchiev(owned, design, call) {
	if(!design) design = "White"; else design = "";
	
	function getAchiev(name, status) {
		var output = "";
		var klasse = "";
		var desc = "";
		var title = "";
		
		
		
			
		if(status == true || status > 0) {
			klasse = "unlocked";
			desc = achievs[name]["description"];
		} else {
			klasse = "locked";
			desc = "*** locked ***";
		}
		
		if(true == true){
			output += '<li id="a_'+name+'">'+
					'<div class="'+klasse+design+' achievPart">'+
					'<span>'+achievs[name]["label"]+'</span>'+
					'</div>'+
				'</li>';
		}
		return output;
	}
	
	var ausgabe = "";
	
	for(var element in achievs) {
	
		ausgabe += getAchiev(element, owned[element]);
	
	}
	
	
	document.getElementById('achiev').innerHTML=ausgabe;	
	call();

}