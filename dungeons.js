var dun = {
	onlineshop: {
		meta: {
			label: "Online Shop",
			description: "Not real",
			base: 5,
			id: 1,
			level: 0,
			reward: 1
		},
		buyer: {
			label: "Shop Visitors",
			description: "Can't wait",
			btc: 700,
			btcs: 100.2,
		},
		boss: {
			label: "Shop Admin",
			description: "Reminds me of myself",
			btc: 1500,
			btcs: 245.5,
		}
	},
	phonehouse: {
		meta: {
			label: "Phone House",
			description: "Usury",
			base: 6,
			id: 2,
			level: 10,
			reward: 2
		},
		buyer: {
			label: "Phone User",
			description: "Do you also have some 'Internet'?",
			btc: 132000,
			btcs: 11600,
		},
		boss: {
			label: "Phone Seller",
			description: "Has sold all of his 'Internet'",
			btc: 3800000,
			btcs: 180000,
		}
	},
	marketmedia: {
		meta: {
			label: "Market Media",
			description: "I hope I'll find the exit later!",
			base: 10,
			id: 3,
			level: 8,
			reward: 4
		},
		buyer: {
			label: "0815 Buyer",
			description: "",
			btc: 4130000000,
			btcs: 1250000000,
		},
		boss: {
			label: "'Seller'",
			description: "Need ideas",
			btc: 17600000000,
			btcs: 31400000000,
		}
	},
	jupiter: {
		meta: {
			label: "Jupiter",
			description: "I hope I'll find the exit later!",
			base: 7,
			id: 4,
			level: 8,
			reward: 12
		},
		buyer: {
			label: "Titan",
			description: "I know more than you!",
			btc: 324300000000,
			btcs: 132120000000,
		},
		boss: {
			label: "Jupiter itself",
			description: "Need ideas",
			btc: 1419390000000,
			btcs: 2886466000000,
		}
	},
	centralmarket: {
		meta: {
			label: "Central Market",
			description: "I hope I'll find the exit later!",
			base: 5,
			id: 5,
			level: 10,
			reward: 17
		},
		buyer: {
			label: "IT consultant",
			description: "I know more than you!",
			btc: 54314000000000000,
			btcs: 2357100000000000,
		},
		boss: {
			label: "Chief",
			description: "Need ideas",
			btc: 321625350000000000,
			btcs: 33126200000000000,
		}
	},
	year1875: {
		meta: {
			label: "1875",
			description: "I hope I'll find the exit later!",
			base: 4,
			id: 6,
			level: 10,
			reward: 20
		},
		buyer: {
			label: "Slipstick merchant",
			description: "I know more than you!",
			btc: 1431400000000000000000,
			btcs: 17271000000000000000,
		},
		boss: {
			label: "Master (Time Lord)",
			description: "Need ideas",
			btc: 22162535000000000000000,
			btcs: 28312620000000000000000,
		}
	},
}

function listDunLevels(dungeons, refresh) {
	var ausgabe = "";
	
	if(refresh == true) {
		for(name in dungeons) {
			
			ausgabe +=	'<span class="raid_building" id="'+name+'">'+
							'<span class="raid_level">'+dungeons[name]+'</span>'+
							'<span class="raid_label">'+dun[name]["meta"]["label"]+'</span>'+
						'</span>';
		}
		$("#shops").html(ausgabe);
	} else {
		for(name in dungeons) {
			$("#"+name+" .raid_level").html(dungeons[name]);
			if(dungeons[name] < 1)
				$("#"+name).hide();
			else
				$("#"+name).show();
		}
	}
	
}