var res = {
	center: {
		"1": {
			label: "Research Center",
			description: "Improvments for your virtual life.",
			cost: 8500,
			time: 180,
			level: 0
		},
		"2": {
			label: "Quality assurance",
			description: "Further upgrades",
			time: 900,
			cost: 2120000,
			level: 0
		},
		"3": {
			label: "final release",
			description: "Last research center upgrade",
			time: 2000,
			cost: 185800000,
			level: 0
		},
		"4": {
			label: "Gyro Gearloose",
			description: "He could find even more...",
			time: 4930,
			cost: 2330000000000,
			level: 0
		},
		"5": {
			label: "Little Helper",
			description: "The true reason. Maybe new upgrades. Who knows!",
			time: 6000,
			cost: 1444320009900500,
			level: 0
		},
		"6": {
			label: "The Blue Box",
			description: "Just a blue box.",
			time: 7500,
			cost: 204029669996222000,
			level: 0
		},
		"7": {
			label: "TARDIS",
			description: "Ask The Doctor for help. Doctor? Doctor Who?",
			time: 10500,
			cost: 30192402966999622200,
			level: 0
		},
		"8": {
			label: "Deep Thought",
			description: "Could take time..",
			time: 14500,
			cost: 9216219240296699962220,
			level: 0
		}
	},	
	//getBuildFactor();
	buildCost: {
		"1": {
			label: "PSU Efficiency 70+",
			description: "Reduces machine costs by 1%",
			time: 200,
			cost: 240000,
			level: 1
		},
		"2": {
			label: "PSU Efficiency 80+",
			description: "Reduces machine costs by additional 2%. Eco!",
			time: 800,
			cost: 2870000,
			level: 1
		},
		"3": {
			label: "PSU Efficiency 95+",
			description: "Reduces machine costs by additional 5%",
			time: 2300,
			cost: 4890000,
			level: 2
		},
		"4": {
			label: "PSU Efficiency 100",
			description: "Reduces machine costs by additional 8%",
			time: 4000,
			cost: 89250000,
			level: 3
		},
		"5": {
			label: "PSU Efficiency Level: Over 9000",
			description: "Reduces machine costs by additional 10%",
			time: 5000,
			cost: 222925000000,
			level: 4
		},
		"6": {
			label: "Quantum PSU",
			description: "Reduces machine costs by additional 12%. Pure Energy.",
			time: 9500,
			cost: 63132000099050,
			level: 4
		},
		"7": {
			label: "Cookie PSU",
			description: "Reduces machine costs by additional 15%. Kim, is that you?",
			time: 600,
			cost: 15101320000330500,
			level: 5
		},
		"8": {
			label: "Tardis PSU",
			description: "Reduces machine costs by additional 18%. Energy from everywhere?",
			time: 9000,
			cost: 2222040296699962200,
			level: 6
		},
		"9": {
			label: "LC Power PSU",
			description: "Reduces machine costs by additional 25%. Quality for everyone",
			time: 10200,
			cost: 113552040296699622200,
			level: 7
		}

	},
	//getRoomSize();
	moreSpace: {
		"0": {
			label: "Your room",
			description: "",
			time: 0,
			cost: 0,
			level: 0
		},
		"1": {
			label: "Dark Basement",
			description: "Mommy does not like the new place for your rigs...",
			time: 2000,
			cost: 10000,
			level: 1
		},
		"2": {
			label: "Daddy's Garage",
			description: "More space for your rigs. Daddy approves.",
			time: 2500,
			cost: 1325200,
			level: 2
		},
		"3": {
			label: "Own Apartment",
			description: "After 30 years you leave your old home. Mommy approves.",
			time: 4000,
			cost: 49250000,
			level: 3
		},
		"4": {
			label: "Old Hangar",
			description: "You 'rent' an old hangar.",
			time: 2000,
			cost: 272925000000,
			level: 4
		},
		"5": {
			label: "Datacenter",
			description: "This should be enough room for everything.",
			time: 10000,
			cost: 9901320000330500,
			level: 5
		},
		"6": {
			label: "Old Home",
			description: "Daddy allowed you to come back, if you bake cookies for your mom.",
			time: 18000,
			cost: 5992040296699962200,
			level: 6
		},
		"7": {
			label: "TARDIS Room",
			description: "It's bigger on the inside!",
			time: 40000,
			cost: 43552040296699622200,
			level: 7
		},
		"8": {
			label: "Planet Earth",
			description: "Made from Deep Thought.",
			time: 100000,
			cost: 114323552040296699622200,
			level: 8
		},
		"9": {
			label: "Cookieverse",
			description: "There should be place between the cookies.",
			time: 120000,
			cost: 5114323552040296699622200,
			level: 8
		}

	},
	//getRandomStatus();
	randomEvent: {
		"1": {
			label: "Asynchronous Functions",
			description: "Maybe something will appear..",
			time: 1500,
			cost: 15000,
			level: 1
		},
		"2": {
			label: "Callback Functions",
			description: "Double the money you get for hustling",
			time: 1800,
			cost: 2325200,
			level: 2
		},
		"3": {
			label: "Interval functions",
			description: "More machines from anonymous donors",
			time: 3000,
			cost: 1212800,
			level: 3
		},
		"4": {
			label: "Callback Functions",
			description: "More money for hustling!",
			time: 1300,
			cost: 29220402962200,
			level: 5
		},
		"5": {
			label: "Blue Functions",
			description: "More money for hustling..much more",
			time: 1300,
			cost: 12347204029692200,
			level: 6
		},
		"6": {
			label: "TARDIS Functions ",
			description: "More money for hustling - some say, over x30",
			time: 3300,
			cost: 1497204029669996200,
			level: 7
		},
		"7": {
			label: "TARDIS Functions 9000",
			description: "More money for hustling. Really.",
			time: 4300,
			cost: 569720402966999622200,
			level: 7
		},
		"8": {
			label: "Standard Functions",
			description: "HUSTLER",
			time: 33300,
			cost: 199433669720402966999220,
			level: 8
		}

	},
	//getBTCsFactor();
	btcMulti: {
		"1": {
			label: "Overclocking",
			description: "Multiplies BTC/s by 10%",
			time: 120,
			cost: 134000,
			level: 1
		},
		"2": {
			label: "Overclocking: Free Multi",
			description: "Multiplies BTC/s by 50%",
			time: 1260,
			cost: 17445000,
			level: 2
		},
		"3": {
			label: "Redesigned CPU Architecture",
			description: "Multiplies BTC/s by 100%",
			time: 3000,
			cost: 485210000,
			level: 3
		},
		"4": {
			label: "Golden Cookies For Kim",
			description: "Multiplies BTC/s by 300%",
			time: 3601,
			cost: 9840032700999,
			level: 4
		},
		"5": {
			label: "Buy Some Government Support",
			description: "Multiplies BTC/s further",
			time: 5200,
			cost: 89032999099000,
			level: 4
		},
		"6": {
			label: "Just...Inventions",
			description: "Multiplies BTC/s further",
			time: 9030,
			cost: 9903299099539990,
			level: 5
		},
		"7": {
			label: "Dell Computer",
			description: "Multiplies BTC/s further",
			time: 12000,
			cost: 885040296699962200,
			level: 6
		},
		"8": {
			label: "TARDIS Computer",
			description: "Multiplies BTC/s further",
			time: 14000,
			cost: 182533040296699962200,
			level: 7
		},
		"9": {
			label: "TARDIS Companion",
			description: "Multiplies BTC/s further + Multiplies BTC/s over time",
			time: 18000,
			cost: 899221621924029669996,
			level: 7
		},
		"10": {
			label: "42",
			description: "Multiplies BTC/s further",
			time: 78000,
			cost: 635333262192402966999622,
			level: 8
		}

	},
	//getBegFactor()
	hackmoney: {
		"1": {
			label: "Your Mining Rig As A Botnet",
			description: "Gain 1x of your BTC/s computing speed as money through clicking",
			time: 200,
			cost: 47600,
			level: 1
		},
		"2": {
			label: "New Software",
			description: "Gain 10x of your BTC/s computing speed as money through clicking",
			time: 2000,
			cost: 6999000,
			level: 3
		},
		"3": {
			label: "FBI Connections",
			description: "Gain 20x of your BTC/s computing speed as money through clicking",
			time: 3601,
			cost: 887750000,
			level: 3
		},
		"4": {
			label: "Your Rig As A Botnet",
			description: "Gain 40x of your BTC/s computing speed as money through clicking",
			time: 5000,
			cost: 19502077750000,
			level: 4
		},
		"5": {
			label: "Worldwide Botnet",
			description: "Gain 99x of your BTC/s computing speed as money through clicking",
			time: 7500,
			cost: 1653302077750000,
			level: 5
		},
		"6": {
			label: "Universe Botnet",
			description: "Gain 199x of your BTC/s computing speed as money through clicking",
			time: 4500,
			cost: 745599999999999000,
			level: 6
		},
		"7": {
			label: "TARDIS Clicker",
			description: "Gain 390x of your BTC/s computing speed as money through clicking with time travelling",
			time: 9000,
			cost: 23190402966999622209,
			level: 7
		},
		"8": {
			label: "Deep Clicker",
			description: "Gain 888x of your BTC/s computing speed as money through clicking with time travelling",
			time: 39000,
			cost: 359654481190029669996900,
			level: 8
		}

	},
	//getSellFactor()
	sellrate: {
		"1": {
			label: "Money On My Mind",
			description: "Increase your sell percentage to 110%",
			time: 830,
			cost: 1215000,
			level: 2
		},
		"2": {
			label: "Summer Sale",
			description: "Increase your sell percentage to 150%",
			time: 2601,
			cost: 999996000,
			level: 3
		},
		"3": {
			label: "Merchant",
			description: "Increase your sell percentage to 200%",
			time: 3300,
			cost: 769099622200,
			level: 4
		},
		"4": {
			label: "Provision",
			description: "Increase your sell percentage to 300%",
			time: 6000,
			cost: 31966999622000,
			level: 5
		},
		"5": {
			label: "Top Seller",
			description: "Increase your sell percentage to 500%",
			time: 8888,
			cost: 1884296699962220,
			level: 5
		},
		"6": {
			label: "Monopol",
			description: "Increase your sell percentage to 3,000%",
			time: 10000,
			cost: 415040296699962000,
			level: 5
		},
		"7": {
			label: "Tardis Selling",
			description: "Increase your sell percentage to 7,500%",
			time: 12000,
			cost: 5691110296699962200,
			level: 6
		},
		"8": {
			label: "Quite Large..",
			description: "Increase your sell percentage to 30,000%",
			time: 16000,
			cost: 111811102966996222000,
			level: 7
		},
		"9": {
			label: "Deep Selling",
			description: "Increase your sell percentage to 75,000%",
			time: 32000,
			cost: 395231118110296699962220,
			level: 8
		},
		"10": {
			label: "Big Money",
			description: "Increasing selling bonus with increasing money made (endgame)",
			time: 50500,
			cost: 118852311181102966999622200,
			level: 8
		}

	},
	//getHardwareMulti();
	hardwaremulti: {
		"1": {
			label: "Softwarecenter v1",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 400,
			cost: 12633500600,
			level: 3
		},
		"2": {
			label: "Softwarcenter v1.1",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 1230,
			cost: 83299296000,
			level: 4
		},
		"3": {
			label: "Softwarcenter: Raise Of A Nation",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 3230,
			cost: 46909963222000,
			level: 5
		},
		"4": {
			label: "The Bright Day",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 6333,
			cost: 151429669996222004,
			level: 6
		},
		"5": {
			label: "Carpe Diem",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 9200,
			cost: 920842966999620220,
			level: 6
		},
		"6": {
			label: "Eureka!",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 10520,
			cost: 35550402966999622200,
			level: 7
		},
		"7": {
			label: "Deep Heart",
			description: "Upgrades your whole hardware rig (better base BTC/s)",
			time: 12000,
			cost: 145621281110296699962220,
			level: 8
		}
	}	
}	

function showRes() {
var out ="";
	for(name in res) {
		out += "<br/>"+name+"<br/>";
		for(id in res[name])
			out += res[name][id]["label"]+", "+res[name][id]["level"]+" - "+bigNum(res[name][id]["cost"])+"<br/>";
	}
	return out;
}

	

function listResearchAll(resOwned, money, call, faktor) {
	
	//console.log(faktor);
	
	var ausgabe = "";
	var nextStadium = ""; 
	var time = 0;
	var percent = 0;
	var cost = 0;
	var redMoney = "";
	var resMargin = "";
	var levelNeed = "";
	
	var num;			
		if(typeof resOwned["center"] == "number") num = resOwned["center"];
			//else num = parseInt(resOwned["center"].substring(0,1)) -1;
			else num = parseInt(resOwned["center"].split("_")[0])-1;
			
	
	
	for(var name in resOwned) {
		//Achtung immer +1, falls es ein Zeitstring ist muss sie unten wieder entfernt werden!
		nextStadium = (resOwned[name]+1).toString();
		
	
	
			//Check ob es ein "n�chstes" Geb�ude gibt
			try { //Check ob ein neues Geb�ude gibt
			//console.log(res[name][nextStadium]);
			string = JSON.parse(atob(localStorage["progress"]))["stats"]; 
			
			
			
				if(nextStadium in res[name] && num >= res[name][nextStadium]["level"]) {
				time = faktor * parseInt(res[name][nextStadium]["time"]); 
				cost = res[name][nextStadium]["cost"];
					
					
					if(cost > money) redMoney='class="resExpensive"'; else redMoney="";
					
					if(name == "center") { 
						resMargin = 'style="margin-bottom:20px;"'; 
						levelNeed = '<span class="resLevel">Research Center '+nextStadium+'</span>';
					} else {
						resMargin = "";
						levelNeed = '<span class="resLevel">Invented by Research Center '+res[name][nextStadium]["level"]+'</span>';
					}
					
					ausgabe +='<li '+resMargin+' id="'+nextStadium+'_'+name+'" '+redMoney+'>'+
								'<div class="resBody">'+
									'<span class="resName">'+res[name][nextStadium]["label"]+' <span class="count">'+res[name][nextStadium]["description"]+'</span></span>'+
									'<span class="resMoney">'+bigNum(cost)+'$</span> <span title="base time: '+formatDate(res[name][nextStadium]["time"])+'" class="resTime"> - '+formatDate(time)+'</span>'+
									'<div class="graph"><div class="bar" style="width:0%"><p>0% complete</p></div></div>'+
									levelNeed+
								'</div>'+
							'</li>';
				
				
				
					//Falls noch nicht fertig erforscht
				} else if(nextStadium.indexOf("_") > -1) {
					//Minus 1, da oben immer 1 dazugerechnet wird 
					//und bei einer Zeitangabe diese 1 abgezogen werden muss
					//Hier ist nextStadium auch schon die n�chste Forschung, ist aber NOCH NICHT fertig!
					var splitted = nextStadium.substring(0,nextStadium.length-1).split("_");
					time = faktor * parseInt(res[name][splitted[0]]["time"]); 
					timeLeft = parseInt(splitted[1]);
					nextStadium = nextStadium.split("_")[0];
					//console.log(nextStadium);
					percent = 100 - Math.floor(100*timeLeft /time );
					
					cost = res[name][nextStadium]["cost"]
					//console.log(cost);
					var faster = ""
					if(money > cost)
						faster = "<span class='payFaster'>Pay "+bigNum(cost)+"$ to save 25% of remaining time</span>";
						
						
					
					ausgabe +='<li title="Research in progress" style="position:relative; cursor:default;" class="working" id="'+nextStadium+'_'+name+'">'+
								'<div>'+
									'<span class="resName">'+res[name][nextStadium]["label"]+' <span class="count">'+res[name][nextStadium]["description"]+'</span></span>'+
									'<span style="padding-left:15px;" class="resTime">'+formatDate(timeLeft)+' left</span>'+
									faster+
									'<div class="graph"><div class="bar" style="width:'+percent+'%"><p>'+percent+'% complete</p></div></div>'+
								'</div>'+
							'</li>';
				}
			} catch(e) {/*console.log(e)*/}
		if(resOwned["center"].toString().substring(0,1) == "1_" || resOwned["center"] == 0) break;
	}

	if(ausgabe.length > 0) $("#res").html(ausgabe); else $("#res").html("No Researches available...");
	if(call) {
	
		call();
	}
}