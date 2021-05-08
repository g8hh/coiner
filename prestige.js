var pres = {
	mining1: {
		label: "Micro Mining Bonus",
		description: "Increase your BTC/s by 1%",
		cost: 1,
		prestige: 0,
		again: true,
		img: "pcb"
	},
	mining10: {
		label: "Mini Mining Bonus",
		description: "Increase your BTC/s by 10%",
		cost: 8,
		prestige: 0,
		again: true,
		img: "pcb"
	},
	mining100: {
		label: "Good Mining Bonus",
		description: "Increase your BTC/s by 100%",
		cost: 60,
		prestige: 1,
		again: true,
		img: "pcb"
	},
	mining1000: {
		label: "Big Mining Bonus",
		description: "Increase your BTC/s by 1000%",
		cost: 550,
		prestige: 2,
		again: true,
		img: "pcb"
	},
	
	res10: {
		label: "Small Research Bonus",
		description: "Decrease Research time by 10%",
		cost: 49,
		prestige: 0,
		again: false,
		img: "res"
	},
	res20: {
		label: "Good Research Bonus",
		description: "Decrease Research time by 20%",
		cost: 199,
		prestige: 1,
		again: false,
		img: "res"
	},
	res30: {
		label: "Big Research Bonus",
		description: "Decrease Research time by 30%",
		cost: 299,
		prestige: 3,
		again: false,
		img: "res"
	},
	goldRes: {
		label: "Gold Digger",
		description: "Get 2 coins for every new research",
		cost: 40,
		prestige: 1,
		again: false,
		img: "res"
	},
	
	
	nightowl1: {
		label: "Night Gaming",
		description: "Get 10% of your BTC/s rate while being offline",
		cost: 50,
		prestige: 0,
		again: false,
		img: "night"
	},
	nightowl2: {
		label: "Night Owl",
		description: "Get additional 15% of your BTC/s rate while being offline",
		cost: 125,
		prestige: 1,
		again: false,
		img: "night"
	},
	nightowl3: {
		label: "Night Owl Sr.",
		description: "Get additional 25% of your BTC/s rate while being offline",
		cost: 200,
		prestige: 2,
		again: false,
		img: "night"
	},
	nightowl4: {
		label: "Nightly Build",
		description: "Get additional 50% of your BTC/s rate while being offline",
		cost: 300,
		prestige: 3,
		again: false,
		img: "night"
	},

	fastforward: {
		label: "Fast Forward",
		description: "Fast forward long battles (max 25 seconds in the first round)",
		cost: 40,
		prestige: 0,
		again: false,
		img: "adventure"
	},
	freeMach: {
		label: "Mach Speed",
		description: "Get a free ATI Mach 64. Good for resets",
		cost: 30,
		prestige: 0,
		again: true,
		img: "mach"
	},
	kitty: {
		label: "Kitty",
		description: "Unlock a kitty as background. Activate with <i>kitty</i> in <span onclick='javascript:showCMD();' class='openCMD'>cmd</span>.",
		cost: 5,
		prestige: 0,
		again: false,
		img: "kitty"
	},
	changerateTime: {
		label: "Exchange API",
		description: "Decrease the refresh delay of the exchange rate",
		cost: 25,
		prestige: 0,
		again: false,
		img: "exchange"
	},
	changerateFall: {
		label: "Backhander",
		description: "Prevent BTC/USD exchange rate from falling too deep!",
		cost: 133,
		prestige: 1,
		again: false,
		img: "exchange"
	},	
	
	centermini: {
		label: "Parents Bedroom",
		description: "Place for 15 machines",
		cost: 4,
		prestige: 0,
		again: true,
		img: "center"
	},
	centersmall: {
		label: "Townhall",
		description: "Place for 200 machines",
		cost: 50,
		prestige: 1,
		again: true,
		img: "center"
	},
	centerbig: {
		label: "NSA Datacenter",
		description: "Place for 1000 machines",
		cost: 100,
		prestige: 2,
		again: true,
		img: "center"
	},
	
	autosell: {
		label: "Lazy Selling",
		description: "Autoselling will use manual selling bonus",
		cost: 99,
		prestige: 2,
		again: false,
		img: "hdd"
	},
	hackingA: {
		label: "Hacking Level: Asian",
		description: "Multiply hacking money by ten (you need one research at least)",
		cost: 249,
		prestige: 2,
		again: false,
		img: "hdd"
	},
	randomMore: {
		label: "<b>Coin</b>cidence?",
		description: "Randoms have a 25% higher chance to show",
		cost: 156,
		prestige: 1,
		again: false,
		img: "hdd"
	},
	randomDouble: {
		label: "Doubletime",
		description: "Randoms stay twice as long",
		cost: 77,
		prestige: 0,
		again: false,
		img: "hdd"
	},
	
	doubleMoney: {
		label: "Real Hustling",
		description: "Double your money instant",
		cost: 500,
		prestige: 1,
		again: true,
		img: "money"
	},
	moneyMini: {
		label: "Mini Money Bag",
		description: "Get "+bigNum(500)+" dollars. Good for resets",
		cost: 10,
		prestige: 0,
		again: true,
		img: "money"
	},
	moneySmall: {
		label: "Small Money Bag",
		description: "Get "+bigNum(20000)+" dollars. Good for resets",
		cost: 99,
		prestige: 1,
		again: true,
		img: "money"
	},
	moneyGood: {
		label: "Good Money Bag",
		description: "Get "+bigNum(100000)+" dollars. Good for resets",
		cost: 199,
		prestige: 1,
		again: true,
		img: "money"
	},
	moneyBig: {
		label: "Big Money Bag",
		description: "Get "+bigNum(600000)+" dollars. Good for resets",
		cost: 349,
		prestige: 1,
		again: true,
		img: "money"
	},
}

function showPrestige(prestige, call, purchased) {
	var coins = prestige["coins"];
	
	function getShop(name) {
		var output = "";
		var klasse = "";
		var img = "coin";
		var back = pres[name]["img"];
		var label = pres[name]["label"];
		var desc = pres[name]["description"];
		var cost = pres[name]["cost"];
	
		if(pres[name]["again"] == true) desc += " <i>(infinite in stock)</i>";
		if(coins < cost) klasse = "pres_exp";
		
		try {
			if(prestige[name] == true) { klasse = "pres_owned"; cost=""; img="yes" }
			//console.log(name+" "+prestige[name]);
		} catch(e) {console.log(e)}
		
		if(pres[name]["prestige"] > prestige["level"]) { klasse = "pres_exp"; cost="Lvl "+pres[name]["prestige"]; img="locked" }
		
		output += '<li>'+
					'<div class="upgrade" style="background-image: url(img/groups/'+back+'.jpg);">'+
						'<div class="pres_label">'+label+'</div>'+
						'<div class="pres_desc">'+
						desc+
						'</div>'+
					'</div>'+
					'<div style="position:relative;" id="'+name+'" class="pres_buy '+klasse+'">'+
						cost+' <img src="img/'+img+'.png" style="width:25px; margin-bottom:-3px;" />'+
						'<span class="pres_submit">Purchased</span>'+
					'</div>'+
				'</li>';

		return output;
	}
	
	var ausgabe = "";
	
	for(var element in pres) {
		ausgabe += getShop(element);
	}
	
	//$("#coins").html(coins);
	$("#shop").html(ausgabe);
	//$("#pres_lvl").html(prestige["level"]);
	$("#"+purchased).children(".pres_submit").fadeIn(0,function() { $(this).delay(700).fadeOut(700) });
	
	if(call) call();
}