var hardware = {

	zuse: {
		label: "Zuse Z3 '41",
		description: "Developed by Konrad Zuse! You couldn't start any better.",
		btcs: 0.0001,
		cost: 10,
		multi: 140000055,
		hid: 0
	},
	intelc4004: {
		label: "Intel C4004 '70",
		description: "The new hightech 4-bit CPU. White ceramic plates and golden cap for free!",
		btcs: 0.0006,
		cost: 99,
		multi: 49000003,
		hid: 1
	},
	atimach64: {
		label: "ATI Mach 64 '91",
		description: "Using 2D-graphics for mining. Why not?",
		btcs: 0.0035,
		cost: 679.99,
		multi: 13000000,
		hid: 2
	},
	intelpentium2: {
		label: "Intel Pentium II '97",
		description: "Classy x86 CPU for people with 'special needs'. 233Mhz pure mining power.",
		btcs: 0.009,
		cost: 2300,
		multi: 9500220,
		hid: 3
	},
	amdathlonk7: {
		label: "AMD Athlon K7 '99",
		description: "Some say, it passed the 1-Ghz mark!",
		btcs: 0.0099,
		cost: 2700,
		multi: 10000220,
		hid: 4
	},
	dreidfxvodoo: {
		label: "3dfx Vodoo Graphics '96",
		description: "Using Glide for graphic-accelerated mining power.",
		btcs: 0.0452,
		cost: 14400,
		multi: 3000000,
		hid: 5
	},
	intelcore2duo: {
		label: "Intel Core 2 Duo '06",
		description: "Intel's 64-bit dual-core CPU. Unleash the beast.",
		btcs: 0.11,
		cost: 77900,
		multi: 1680000,
		hid: 6
	},
	intelxeonnehalem: {
		label: "Intel Xeon Nehalem '09",
		description: "Boost your mining power with nothing else than Intel's high-tech server CPU!",
		btcs: 0.52,
		cost: 331000,
		multi: 420000,
		hid: 7
	},
	amdbulldozer: {
		label: "AMD Bulldozer '11",
		description: "Boost your mining power with nothing else than AMD's... decent CPU!",
		btcs: 0.531,
		cost: 340000,
		multi: 440000,
		hid: 8
	},
	amd7990: {
		label: "AMD Radeon HD 7990 '12",
		description: "It's no waste of energy..really mom, trust me! I'm an engineer..",
		btcs: 10.0599,
		cost: 3495000,
		multi: 33900,
		hid: 9
	},
	usbasicminer: {
		label: "USB ASIC Miner x10 '12",
		description: "Optimized for mining. 10 times.",
		btcs: 125.203,
		cost: 169999900,
		multi: 2500,
		hid: 10
	},
	ibmroadrunner: {
		label: "IBM Roadrunner '08",
		description: "You should think about a new room, it's going to be confined in here..",
		btcs: 1370.132,
		cost: 3425099900,
		multi: 300,
		hid: 11
	},
	tianhe2: {
		label: "Tian-He '13",
		description: "You can't get anything better, can you?",
		btcs: 12999.4,
		cost: 99567894000,
		multi: 43,
		hid: 12
	},
	kimdotcom: {
		label: "Kim Dotcom '74",
		description: "Turns Cookies into BTC!",
		btcs: 125456,
		cost: 999999999999.99,
		multi: 10,
		hid: 13
	}

}

	//call f�r Tooltip
function listHardware(design, call) {

	var ausgabe = "";
	var counter = 0;

	
	//Wenn true, altes Design aktivieren
	if(design) design = "green"; else design = "white";
	
	ausgabe += "<li>"+ 
					"<ul>";

			
			for(var name in hardware) {
				counter++;
				
				ausgabe +=
						'<li id="'+name+'">'+
							'<div class="description '+design+'">'+
								//'<img class="storeImg" src="img/machines/'+name+'.jpg" />'+
								'<img class="storeImg" src="img/machines/free/'+name+'.jpg" />'+
								
								'<span class="storeName">'+hardware[name]["label"]+' <span class="count"></span></span>'+
								'<span class="storeBTC"><span class="storeHardBTC">'+bigNum(hardware[name]["btcs"])+'</span> BTC/s <span class="storePriceBTCs"></span></span>'+
								'<span class="storePrice">'+bigNum(hardware[name]["cost"])+'$</span>'+
								'<img class="noRoom" title="NO PLACE" style="display:none; margin-bottom:-1px;" src="img/X.png" />'+
								
								'<span title="Bronze Award (25) (x2)" class="bronze award"></span>'+
								'<span title="Silver Award (50) (x5)" class="silver award"></span>'+
								'<span title="Gold Award (100) (x10)" class="gold award"></span>'+
								'<span title="Ruby Award (200) (x25)" class="ruby award"></span>'+
								'<span title="Emerald Award (500) (x50)" class="emerald award"></span>'+
								'<span title="Diamond Award (1000) (x100)" class="diamond award"></span>'+
								'<span title="Buy 10" class="buy10">BUY 10</span>'+
								'<span title="Sell 1" class="sell1">SELL 1</span>'+
								'<span title="Sell 10 (Doubleclick)" class="sell10">SELL 10</span>'+
							'</div>'+
						'</li>';
					
					//Bei der H�lfte wird die Trennung ausgegeben
					if(counter == Math.floor((Object.keys(hardware).length +1) /2)) 
						ausgabe += '</ul></li><!-- MITTE --><li><ul>';
			}	
			
		ausgabe += 	'<li class="wrap"></li></ul>'+
				'</li>';
					
					
				
		document.getElementById('store').innerHTML=ausgabe;	
	call();
}