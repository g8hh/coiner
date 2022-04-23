/*
I don't have much time anymore, I'm sorry. It's also really bad programmed and hard to get in my own code.
Maybe there will be a serversided clicking game someday. 

TODO Liste (partially German, I'm sorry)

- harcore modus (wartung, randoms können negative sachen erwirken)
- btc holding
- btc sonstige dinge?!
- alarm money btc
- echten kurs einbinden chart
- super zuse
- image researches
- influence btc/usd
- cmd bonus (hacking minigame?)
- kiwi irc quit? -> prestige bug
- sell shop upgrades
- prestige erst später einführen, zu kompliziert
	-> verdiente coins angezeigen, wenn größer 0 auch shop anzeigen
- known bugs
- dollar linke seite
- backgrounds umschalten (und unabhängig vom style)
- mehr coins?
- buy max sell all
- buy 10 preis?
- max und min money hacking
- money to next prestige coin
- mehr klick aktionen (evtl hover)
- improve machines (upgradesmenu?)
- adventure mode font, bilder, grafiken
- shop already bought num
- money milestone
- fancy calculating animation
- adventure mode lose
- neues antibot system oder rausnehmen?
- hintergründe mehr
- BERECHNUNG große zahlen

HARDCORE
- keine Anzeige der BTC/S am Gerät (auch nicht cost per btc/s) -> muss schwanken sonst langweilig
- bei hacken geld verlieren
- es wird mehr, aber dann steigt die chance des vollständigen verlierens
- schlechte sachen bei randoms

* admin@wernersbacher.de for feedback!

Please don't rehost and mark at as your own script. Thank you!
(╯°□°）╯︵ ┻━┻ 

SEND ME DORITOS OR RIOT ༼ つ ◕_◕ ༽つ 
http://wernersbacher.de/impressum for Address (I'm serious)
*/

//Einstellungen


		var settings = {	
			autosell:true,
			hideHack: false,
			showQuote: true,
			classic:false,
			sound:false,
			hardcore: false,
			kitty: false,
			format: 0
		};
			
		var stats = {
			btcusd: 550.87,
			btcusdX: 550.00,
			time: 0,
			timeSes: 0,
			exported: 0,
			lastSaved: 0,
			lastBTCs: 0,
			machines: 0,
			money: 0,
			moneyall: 0,
			moneyspent: 0,
			attacks: 0,
			attacksSes: 0,
			random: 0,
			resets: 0,
			clicks: 0,
			lastRandom: 0,
			tronHighscore: 0,
			tronPlayed: 0,
			res42: 0,
			lastRaid: 0,
			bossKilled: 0,
			enemyKilled: 0,
			numRaid: 0,
			fblike: false,
			
			achievGoldBack: false,
			
			timeTo1mio: 0,
			timeTo1quad: 0,
			timeTo1sept: 0,
			timeTo1dec: 0,
			timeToThisSes: 0,
			
			end: false
		}

		var prestige = {
			level: 0,
			coins: 0,
			miningBonus: 0,
			roomBonus: 0
		}


	$(document).ready(function() {
		$(window).keydown(function(e) { if (e.keyCode == 123) debugger; });
		
		if(typeof ads === 'undefined') $("#platzhalter_sky, #platzhalter_banner").show();
		
		var consoleHolder = console;
		var cons = false;
		if(localStorage["dev"] == "true") cons = true;
		function debug(bool){
			if(!bool){
				consoleHolder = console;
				console = {};
				console.log = function(){};
			}else
				console = consoleHolder;
		}
		debug(cons);
	
		//Preload
		function preload() {
			var output = '<img src="img/blur.jpg" />';
			output += '<img src="img/kitty.jpg" />';
			output += '<img src="img/dun/enemy.jpg" />';
			for(name in dun) output += '<img src="img/dun/'+name+'.jpg" />';
			$("#preload").html(output);
		}
		preload();
	
		//Konsolenbefehle
		function execCMD(command) {
			command = command.trim().toLowerCase();
			$("#cmdText").val("")
			if(command === "exit") { $("#cmdText").val(""); $("#cmd").hide("fast");  $("#wrap").hide(); }
			else if(command === "hack google.com"){
				
				$("#cmdText").val("")
				showNote("cmd_hackgoogle", "STOP!", "You can't hack Google! Do you want to get in jail?",  true);
				return function() {
					setAchiev("hackgoogle");
				}
			}
			else if(command.substring(0,4) === "show"){
				var callStat = stats[command.substring(5,command.length)];
				
				if(callStat !== undefined)
					alert(callStat);
			
			}
			else if(command.substring(0,6) === "rm -rf"){
				
				$("body").hide(0,function() { alert("dev: wiped /var/www\nReady for new uploads"); $(this).delay(1000).fadeIn("slow", function(){ alert("Nice one, huh?"); }); });
			}
			else if(command === "uptime"){
				
				showNote("cmd_uptime", "UPTIME", "system running for "+formatDate(straightOn), true);

			}
			else if(command === "firework" && stats["end"] == true){
				
				endGame();
			}
			else if(command === "refresh"){
				updateWallet();
				updateHardware();
			}
			else if(command === "dev"){
				
				cons = !cons;
				debug(cons);
				showNote("cmd_dev", "dev mode", "Changed DEV Mode");
			}
			else if(command === "motherlode"){
				
				if(money > 5000000) {
					newMoney = 50000;
				} else { 
					newMoney = 3.5;
				}
					/* money += newMoney;
					stats["money"] += newMoney; */
					setMoney(newMoney);
			}
			else if(command === "classic.false") {
				
				
				//Neues Design
				//$('body').css("background-image", "url(img/blur.jpg)"); 
				$("body").ezBgResize({ img:"img/blur.jpg", center:false });
				$("div .description").removeClass("green").addClass("white");
				$("#channel").addClass("channelWhite");
				$("div .unlocked").removeClass("unlocked").addClass("unlockedWhite"); 
				$("div .locked").removeClass("locked").addClass("lockedWhite"); 
				
				return function() {
					settings["classic"] = false;
				}
			}
			else if(command === "kitty" && prestige["kitty"] == true) {
				if(settings["kitty"] == false)
					//$('body').css("background-image", "url(img/kitty.jpg)"); 
					$("body").ezBgResize({ img:"img/kitty.jpg", center:false });
				else if(settings["classic"] == true)
					//$('body').css("background-image", "url()"); 
					$("body").ezBgResize({ img:"", center:false });
				else 
					//$('body').css("background-image", "url(img/blur.jpg)"); 
					$("body").ezBgResize({ img:"img/blur.jpg", center:false });
				console.log(settings["kitty"]);
				settings["kitty"] = !settings["kitty"];
				console.log(settings["kitty"]);
			}
			else if(command === "classic.true") {
				
				
				$('body').css("background-image", ""); 
				$("#channel").removeClass("channelWhite");
				$("div .description").removeClass("white").addClass("green");
				$("div .unlockedWhite").removeClass("unlockedWhite").addClass("unlocked"); 
				$("div .lockedWhite").removeClass("lockedWhite").addClass("locked"); 
				
				
				return function() {
					settings["classic"] = true;
				}
			}
			else if(command !== "")  {
				;
				if(command.length > 20) command = command.substring(0, 19)+"..";
				showNote("cmd_unknown", "command error", "unknown command: -"+command, true);
			}
			else $("#cmdText").val("");
		}
	
		//Teuerstes Hardwareger�t suchen
		function getBest(id) {
			var best = "";
			var preis = 0;
			for(var name in hardwareOwned) {
				if(hardwareOwned[name]>0 && hardware[name]["cost"] > preis) {
				
					best = name;
					preis = hardware[name]["cost"];
				}
			} 
			if(id == true && best > "") return hardware[best]["hid"]; else return best;	
		}
		
		//BTC/s Faktor eines Ger�tes ausrechnen
		function getAward(name) {
			var faktor = 1;
			if (hardwareOwned[name] >= 25) faktor = 2;
			if (hardwareOwned[name] >= 50) faktor = 5;
			if (hardwareOwned[name] >= 100) faktor = 10; 
			if (hardwareOwned[name] >= 200) faktor = 25; 
			if (hardwareOwned[name] >= 500) faktor = 50; 
			if (hardwareOwned[name] >= 1000) faktor = 100; 
			return faktor;
		}
		
		function noRoom() {
			var sizeMax = getRoomSize();
			var size = stats["machines"];
			if(size>=sizeMax) return true; else false;
		}
		
		//Anzahl der Geräte ausgeben, BTC/s berechnen
		function updateHardware() {
			btcs = 0;
			var newCost = 0;
			var faktor = 1;
			var sum = 0;
			var minNum = 99999;
			var anzahl = 0;
			var anzahlOut;
			var good = 0;
			var beste = "";
			
			function checkAchiev(computer) {
				//new_era Achievment
				if(computer == "zuse" && hardwareOwned["zuse"] >= 1)
					setAchiev("new_era")
					
				//Kim Dotcom x1 Achievment
				if(computer == "kimdotcom" && hardwareOwned["kimdotcom"] >= 1)
					setAchiev("kim1")
					
				//Kim Dotcom x1000 Achievment
				if(computer == "kimdotcom" && hardwareOwned["kimdotcom"] >=300)
					setAchiev("kim1000")
					
				//Bronze Award Achievment	
				if(hardwareOwned[computer] >= 25)
					setAchiev("bronze")		
				
				//Silber Award Achievment	
				if(hardwareOwned[computer] >= 50)
					setAchiev("silver")		
				
				//Gold Award Achievment	
				if(hardwareOwned[computer] >= 100)
					setAchiev("gold")
					
				//ruby Award Achievment	
				if(hardwareOwned[computer] >= 200)
					setAchiev("ruby")	
			}
			
			for(var name in hardwareOwned) {
				faktor = getAward(name);
			
				function seeHardware(x) {
					if(hardwareOwned[x]>0 || hardware[x]["hid"] - getBest(true) <= 2)
					return true; else false;
				}
				
				//Gerät nur ausgeben, wenn in Besitz, sowie zwei weitere Ger�te
				if(seeHardware(name)) {
					$("#"+name).show("fast");
					} else $("#"+name).hide();
					
				newCost = dollar(getNewCost(name));
				
			
				//Gibt Anzahl der gekauften Ger�te aus
				anzahl = hardwareOwned[name];
				if(anzahl >0) anzahlOut = "x"+anzahl; else anzahlOut = "";
				$("#"+name).find(".count").html(anzahlOut);
			
				if (anzahl>=25) $("#"+name+" .bronze").show("slow");
					else $("#"+name+" .bronze").hide("slow");
				if (anzahl>=50) $("#"+name+" .silver").show("slow"); 
					else $("#"+name+" .silver").hide("slow");
				if (anzahl>=100) $("#"+name+" .gold").show("slow");
					else $("#"+name+" .gold").hide("slow");
				if (anzahl>=200) $("#"+name+" .ruby").show();
					else $("#"+name+" .ruby").hide();
				if (anzahl>=500) $("#"+name+" .emerald").show();
					else $("#"+name+" .emerald").hide();
				if (anzahl>=1000) $("#"+name+" .diamond").show();
					else $("#"+name+" .diamond").hide();
				
				
				
				//Berechnet die aktuelle BTC/s Rate
				newBTC = hardware[name]["btcs"] * faktor * getHardwareMulti(name);
				btcs += newBTC*anzahl;
				
				
				//Gibt neuen BTC/s Wert an
				$("#"+name+" .storeHardBTC").html(bigNum(newBTC.toFixed(4)));
				
				hardwareGraph[name] = precise_round(newBTC*anzahl, 4);

				var kosten = getNewCost(name);				
				var costperbtcs = bigNum(precise_round(kosten/newBTC,2));
				
				//Gibt den (neuen) Preis des Gerätes an
				$("#"+name+" .storePrice").html(newCost);
				
				//Preis pro Bitcoin
				$("#"+name+" .storePriceBTCs").html(" ("+costperbtcs+"$/฿)").removeClass("bestCost");
				
				/*
				if(settings["showQuote"] !== false) {
					
				}
				else $("#"+name+" .storePriceBTCs").hide();*/
				
				if((kosten/newBTC<good && seeHardware(name)) || good==0) {
					good = kosten/newBTC;
					beste = name;
				}
				
				sum += anzahl;
				if(anzahl < minNum) minNum = anzahl;
				
				checkAchiev(name);
			}
			
			$("#"+beste+" .storePriceBTCs").addClass("bestCost");
			
			//BTC/S multi anwenden
			//console.log(getBTCsFactor());
			
			btcs = btcs * getBTCsFactor();
			
			//Hardware Infoleiste
			stats["machines"] = sum;
			
			var sizeMax = getRoomSize();
			var size = stats["machines"];
			$("#storeOwned").html(size);
			$("#storeMax").html(sizeMax);
			$("#roomName").html(res["moreSpace"][getResNum("moreSpace")]["label"]);
			
			if(noRoom()) {
				$("#storeRed").css('color', '#FF0040'); 
				$(".noRoom").fadeIn(200);
			}
			else {
				$("#storeRed").css('color', 'black'); 
				$(".noRoom").fadeOut(200);
			}
			
			
			//Achievment alles Bronze
			if(minNum >= 25)
				setAchiev("allbronze");
			//Achievment alles Silber
			if(minNum >= 50)
				setAchiev("allsilver");
			//Achievment alles Gold
			if(minNum >= 100)
				setAchiev("allgold");
			//Achievment alles ruby
			if(minNum >= 200)
				setAchiev("allruby");
			
			
			//Gesamtgeräte >500
			if(sum >= 500)
				setAchiev("built500");
			//Gesamtgeräte >2000
			if(sum >= 2000)
				setAchiev("built2000");
			if(sum >= 10000)
				setAchiev("built10k");
			
		}
		
		
		//Wallet anzeigen
		function updateWallet() {
			var worthMoney = stats["btcusd"] * btc * parseFloat(getSellFactor());
			
			if(money == null) { showNote("donated", "Donating", "You had too much money and donated anything to ALS Association"); money = 0; }
			
			$("#money").html(dollar(money.toFixed(2)));
			$("#btc").html(bigNum(btc.toFixed(4))).prop("title", "Worth "+bigNum(precise_round(worthMoney, 2))+"$, which is "+precise_round(100*worthMoney/money, 2)+"% of your money");
			$("#sell_100").prop("title", "Sell for "+dollar(precise_round(worthMoney, 2))+", which is "+precise_round(100*worthMoney/money, 2)+"% of your money");
			//console.log("wallet "+btcs);
			$("#btcs").html(bigNum(btcs.toFixed(4)));
			$("#coins").html(prestige["coins"]);
			$("#btcusd").html("$"+precise_round(stats["btcusd"],2)+" ($"+precise_round(stats["btcusdX"],2)+")");
			
			
			//money1k Achievment
			if(money >= 1000)
				setAchiev("money1k")
			
			//money1mrd Achievment
			if(money >= 1000000000)
				setAchiev("money1mrd")
			//money1mrd Achievment
			if(money >= 1000000000000000000000000000)
				setAchiev("endoftime")
			if(money >= 1000000 && stats["attacksSes"] == 0)
				setAchiev("reset1mio");
			
			//btcs1 Achievment
			if(btcs >= 100 && btcboost == false)
				setAchiev("btcs1")
			
			//btcs1 Achievment
			if(btcs >= 1000000000 && btcboost == false)
				setAchiev("btcs1mio")
			
			//btcsave Achievment
			if(btc >= 66000000000000)
				setAchiev("inflation") 
				
		
			// Bestzeiten speichern	
			
			
			if(money > 1000000 && (stats["timeSes"] < stats["timeTo1mio"] || stats["timeTo1mio"] < 1) && stats["timeToThisSes"] == 0) {
				stats["timeTo1mio"] = stats["timeSes"];
				stats["timeToThisSes"] = 1;
				if(stats["timeTo1mio"] <= 60*15)
					setAchiev("mioIn15");
			}
			if(money > 1000000000000000 && (stats["timeSes"] < stats["timeTo1quad"] || stats["timeTo1quad"] < 1) && stats["timeToThisSes"] == 1) {
				stats["timeTo1quad"] = stats["timeSes"];
				stats["timeToThisSes"] = 2;
			}
			if(money > 1000000000000000000000000 && (stats["timeSes"] < stats["timeTo1sept"] || stats["timeTo1sept"] < 1) && stats["timeToThisSes"] == 2) {
				stats["timeTo1sept"] = stats["timeSes"];
				stats["timeToThisSes"] = 3;
			}
			if(money > 1000000000000000000000000000000000 && (stats["timeSes"] < stats["timeTo1dec"] || stats["timeTo1dec"] < 1) && stats["timeToThisSes"] == 3) {
				stats["timeTo1dec"] = stats["timeSes"];
				stats["timeToThisSes"] = 4;
			}
			
			for(var name in hardware) {
			//newCost = (hardware[name]["cost"] * Math.pow(basis, hardwareOwned[name]) * getBuildFactor()).toFixed(2);
			newCost = getNewCost(name);
			
				//Hardware Liste korrekt anzeigen
				
				$("#"+name+" div").css('cursor', 'default');
				if(newCost > money) 
					$("#"+name+" div .storePrice").css('color', '#FF0040'); 
				else {
					$("#"+name+" div .storePrice").css('color', 'black');
					if(!noRoom())
						$("#"+name+" div").css('cursor', 'pointer');
				}
				
			}
		}
		
		function callHardwareTip() {
			//Hardware Tooltip Eigenschaften
			$('.description').powerTip({
				followMouse: true,
				fadeInTime: 200,
				fadeOutTime: 50,
				closeDelay: 0,
				intentSensitivity: 10,
				intentPollInterval:50
			});
			

			//Hardware Tooltip Inhalte
			$('.description').data('powertip', function() {
				$("#powertip").css('paddingLeft','100px');
				
				var id = $(this).closest("li").attr("id");
				var tiptext = "We don't know this object!";
				var anzahl = hardwareOwned[id];
				var faktor = getAward(id);
				var hardwareMulti = getHardwareMulti(id);
				var newBTCraw = hardware[id]["btcs"] *faktor * hardwareMulti;
				var newBTC = bigNum(precise_round(newBTCraw*anzahl,4));
				var kosten = getNewCost(id);
				//console.log(newBTCraw/anzahl);
				
				tiptext = "<img class='floatingImg' src='img/machines/free/"+id+".jpg' />";
				tiptext += "<div style='margin-left:90px;'>";
				tiptext += "<span class='big'>"+hardware[id]["label"]+"</span><br/>";
				tiptext += hardware[id]["description"];
				tiptext += "<br/>";
				
				if(anzahl > 0) {
					tiptext += "<span class='produced'><b>"+anzahl+"</b> machines are calculating "+newBTC+" Bitcoins per second</span><br/>";
				}	
				if(settings["showQuote"])
					tiptext += "<span class='produced'>Next machine costs <b>"+dollar(precise_round(kosten/newBTCraw,2))+"</b> for 1 BTC/s</span>";
				tiptext += "</div>";
				return tiptext;
			});
		}

		
		function callAchievTip() {
			
			$('.locked, .unlocked, .lockedWhite, .unlockedWhite').powerTip({
				followMouse: true,
				fadeInTime: 200,
				fadeOutTime: 150,
				closeDelay: 100,
				intentSensitivity: 10,
				intentPollInterval: 70
			});
		
			$('.unlocked, .unlockedWhite').data('powertip', function() {
				
				var id = ($(this).closest("li").attr("id")).substring(2);
				var gold = "";
				var a_tiptext = "We don't know this object!";
		
				if(achievs[id]["gold"] > 0)
					gold =  " ["+achievs[id]["gold"]+' <img src="img/coin.png" style=" width:17px; margin-bottom: -2px;" /> obtained]';
				
				a_tiptext = "<span class='big'>"+achievs[id]["label"]+" [unlocked] "+gold+"</span><br/>";
				a_tiptext += "<span style='color:#EBB000'>"+achievs[id]["description"]+"</span>";
				a_tiptext += "<br/>";
				
				if(parseInt(achievsOwned[id]) > 0)
					a_tiptext += "<span style='color:#3CB300'>reached after "+formatDate(achievsOwned[id])+"</span>";
				
				return a_tiptext;
			});
			
					//Achievments Tooltip Inhalte
			$('.locked, .lockedWhite').data('powertip', function() {
				
				var id = ($(this).closest("li").attr("id")).substring(2);
				var gold = "";
				var a_tiptext = "We don't know this object!";
				
				if(achievs[id]["gold"] > 0)
					gold = " [+"+achievs[id]["gold"]+'<img src="img/coin.png" style=" width:17px; margin-bottom: -2px;" />]';
			
				a_tiptext = "<span class='big'>"+achievs[id]["label"]+" [locked] "+gold+"</span><br/>";
				a_tiptext += "<span style='color:#EBB000'>"+achievs[id]["description"]+"</span>";
				a_tiptext += "<br/>";
				
				return a_tiptext;
			});
		}
		
		//Premium Shop
		function listShop(purchased) {
			showPrestige(prestige, callShop, purchased)
		}
		
		function callShop() {
		
			$(".pres_buy").not(".pres_exp, .pres_owned").click(function() {
				var purchased = "";
				var name = $(this).attr("id");
				//console.log(pres[name]["label"]+" "+pres[name]["cost"]);
				
				if(prestige["coins"] >= pres[name]["cost"] && (prestige[name] !== true)) {
					
					prestige["coins"] -= pres[name]["cost"];
					if(pres[name]["again"] == false)
						prestige[name] = true;
					else {
					
						if(name == "mining1")
							prestige["miningBonus"] += 0.01;
						else if(name == "mining10")
							prestige["miningBonus"] += 0.1;
						else if(name == "mining100")
							prestige["miningBonus"] += 1;
						else if(name == "mining1000")
							prestige["miningBonus"] += 10;
						
						else if(name == "freeMach")
							hardwareOwned["atimach64"] += 1;
						else if(name == "doubleMoney")
							setMoney(money);
							
						else if(name == "centermini")
							prestige["roomBonus"] += 15;	
						else if(name == "centersmall")
							prestige["roomBonus"] += 200;	
						else if(name == "centerbig")
							prestige["roomBonus"] += 1000;
							
						else if(name == "moneyMini") 
							setMoney(500);
						else if(name == "moneySmall") 
							setMoney(20000);
						else if(name == "moneyGood") 
							setMoney(100000);
						else if(name == "moneyBig") 
							setMoney(600000);
						
					
					
					}
					purchased = name;
					updateHardware();
				}
				listShop(purchased);
			});
	
		}
		
		//Spiel speichern --- X
		function saveGame(silent) {
			stats["lastSaved"] = new Date().getTime();
			stats["lastBTCs"] = btcs;
			
			var progress = {
				
				money: money,
				btc: btc,
				nick: nick,
				hardwareOwned: hardwareOwned,
				achievsOwned: achievsOwned,
				resOwned: resOwned,
				settings: settings,
				prestige: prestige,
				dungeons: dungeons,
				stats: stats,
				"Play at": " www.bitcoinergame.com "
			
			}
			
			//Konvertierug zu JSON und Verschleiern mittels Base64
			var string = btoa(JSON.stringify(progress));
			
			localStorage["progress"] = string;
			
			//Hinweis des Speicherns
			if(!silent)
			$("#gameSaved").delay(200).animate({opacity:1}, 0, function() {
				$(this).delay(2000).animate({opacity:0}, 3000);
			});
			
			return string;
			
		}
		
		
		//RESEARCH Center Funktionen
		function getResNum(name) {
			var num;			
			if(typeof resOwned[name] == "number") num = resOwned[name];
				//else num = parseInt(resOwned[name].substring(0,1)) -1;
				else num = parseInt(resOwned[name].split("_")[0]) -1;
				//console.log(num);
			return num;
		}		
		
		
		function getUpgradesSum() {
			var sum = 0;
			for(name in resOwned) {
				if(name !== "center") sum += getResNum(name);
			}
			return sum;
		}
			
			
		//Research Funktionen
		var randomSell = 1;

		function getRoomSize() {
			var platz = 50;
			var num = getResNum("moreSpace");
			
			if(num == 1) platz = 100;
			if(num == 2) platz = 200;
			if(num == 3) platz = 600;
			if(num == 4) platz = 1200;
			if(num == 5) platz = 2000;
			if(num == 6) platz = 4000;
			if(num == 7) platz = 8000;
			if(num == 8) platz = 25000;
			if(num == 9) platz = 100000;
			
			return platz+prestige["roomBonus"];
		}

		function getSellFactor() {
			var faktor = 1;
			var num = getResNum("sellrate");
			
			
			if(num == 1) faktor = 1.1;
			else if(num == 2) faktor = 1.5;
			else if(num == 3) faktor = 2;
			else if(num == 4) faktor = 8;
			else if(num == 5) faktor = 15;
			else if(num == 6) faktor = 30;
			else if(num == 7) faktor = 90;
			else if(num == 8) faktor = 300;
			else if(num >= 9) faktor = 750;
			
			if(num >= 10) {
				var increasing = prestigeFormula(stats["money"])/20;
				faktor *= increasing;
			}
			
			return faktor;
		}
		
		function getBegFactor(only) {
			var beg = 0;
			var num = getResNum("hackmoney");
			
			
			if(num == 1) beg = 1;
			else if(num == 2) beg = 10;
			else if(num == 3) beg = 20;
			else if(num == 4) beg = 40;
			else if(num == 5) beg = 99;
			else if(num == 6) beg = 199;
			else if(num == 7) beg = 390;
			else if(num == 8) beg = 888;
			
			faktor = beg* 0.8* (btcs+Math.floor(0.7*hardwareOwned["zuse"])*btcs)
			
			if(only) return beg;
			else return faktor;
		}
		
		function getBTCsFactor(showReset) {
			var faktor = 1;
			var timeFaktor = 1;
			var num = getResNum("btcMulti");
			var resetMoney = stats["money"];
			
			var faktorReset = prestige["miningBonus"];
			
			if(num >= 1) faktor += 0.1;
			if(num >= 2) faktor += 0.5;
			if(num >= 3) faktor += 2;
			if(num >= 4) faktor += 5;
			if(num >= 5) faktor += 7;
			if(num >= 6) faktor += 8;
			if(num >= 7) faktor += 10;
			if(num >= 8) faktor *= 12;
			if(num >= 9) faktor *= 15;
			if(num >= 10) faktor *= 40;
			
			//console.log(faktor);
			//Prestige
			faktor *= 1+faktorReset;
			
			//Ansteigender BTC/s Faktor
			if(num >= 9 && stats["res42"] > 0) {
				var timeSince = stats["timeSes"]-stats["res42"];
				timeFaktor = Math.pow(10,timeSince/8000);
			}
			//console.log(formatDate(timeSince)+" "+timeFaktor);
			
			//console.log(timeFaktor);
			if(typeof ads !== 'undefined') faktor = faktor * 1.33;
			
			
			//console.log(faktor);
			if(showReset) return faktorReset;
			else return faktor*randomSell*timeFaktor;
		}
		
		function getBuildFactor() {
			var faktor = 1;
			var num = getResNum("buildCost");
			
			if(num >= 1) faktor -= 0.01;
			if(num >= 2) faktor -= 0.02;
			if(num >= 3) faktor -= 0.05;
			if(num >= 4) faktor -= 0.08;
			if(num >= 5) faktor -= 0.10;
			if(num >= 6) faktor -= 0.12;
			if(num >= 7) faktor -= 0.15;
			if(num >= 8) faktor -= 0.18;
			if(num >= 9) faktor -= 0.25;
		
			return faktor;			
		}
		
		function getHardwareMulti(name) {
			var multi = hardware[name]["multi"];
			
			var num = getResNum("hardwaremulti");
			
			if(num == 0) multi = 0;
			if(num == 1) multi = multi/2000000;
			if(num == 2) multi = multi/500000;
			if(num == 3) multi = multi/10000;
			if(num == 4) multi = multi/1000;
			if(num == 5) multi = multi/50;
			if(num == 6) multi = multi;
			if(num == 7) multi = multi*10;
			
			return 1+multi;
		}
		
		function getRandomStatus(loc) {
			var num = getResNum("randomEvent");
			var faktorHus = 650;
			var limit = 70;
			
			
			if(loc == "hustler") {
				if(num >= 2) faktorHus *= 2;
				if(num >= 4) faktorHus *= 3;
				if(num >= 5) faktorHus *= 4;
				if(num >= 6) faktorHus *= 5;
				if(num >= 7) faktorHus *= 7;
				if(num >= 8) faktorHus *= 10;
				return faktorHus;
			}
			
			if(loc == "basehustler")
				return faktorHus;
			
			else if(loc == "machines") {
			if(num >= 3) limit = 40;
				return limit;
			}
			else return num;
			
		}
		
		function prestigeFormula(x, num) {
			var quot = 4.7;
			var hi = 15;
			if(!num) num = 1;
			return precise_round((100/(quot*num))*getLog(Math.pow(10,-hi)*x),2);
		}
		
		//Rückgabe von Prozent Prestige
		function getResetFaktor(stat) {
			
			if(stat) stat = 1; else stat = 0;
			//var num = 50000000000000000000000*(getResNum("sellrate")+getResNum("btcMulti"));

			
			if(prestige["level"] > 0 || stat == true) {
				var num = 1+((prestige["level"]+stat)/20);
			}
		
			//var faktor = precise_round(stats["money"]/num, 2);
			//var faktor = precise_round((Math.sqrt(1+10*(stats["money"]/(num*Math.pow(10,20))))-1)/2, 2)
			
			var x = stats["money"];
			var faktor = prestigeFormula(x, num)
			
			if(faktor <0) faktor = 0;
			else if(faktor > 1000*(1+prestige["level"])) faktor = 1000*(1+prestige["level"]);
			//console.log(faktor);
			return Math.floor(faktor);
		}
		
		function getMachineNum() {
			return stats["machines"];
		}
		
		function getNewCost(name, sell) {
			if(sell)
				return (hardware[name]["cost"] * Math.pow(basis, hardwareOwned[name]-1) * getBuildFactor()).toFixed(2);
			else
				return (hardware[name]["cost"] * Math.pow(basis, hardwareOwned[name]) * getBuildFactor()).toFixed(2);
		}
		
		function getAchievsNum(all) {
			var num = 0;
			var counter = 0;
			for(index in achievs) {
				if(achievsOwned[index] == true || parseInt(achievsOwned[index]) > 0)
					num++;
				counter++;
			}
			if(all) return counter; else return num;
		}
		
		
		
		function endGame() {
		
			setTimeout(function() {
				$('#fireworkAudio')[0].play();
			},800);
		
			$("#firework").fadeIn(1500).click(function() {
			
				$("#firework").fadeOut(1000);
			
			});
			
			
			
		}
		
		/* function refreshGraph() {
			if(Math.floor(stats["timeSes"]/1200) >= 1) {
				
				drawLine("money",graph.moneyG);
				drawLine("btc",graph.btcG);
				drawLine("money_alltime",graph.moneyallG);
			} 
		} */
		
		/* function updateGraph() {
			//refreshGraph(); 
			drawPie(hardwareGraph);
		} */
		
		function innerShadow(time) {
			var color = 'rgb(66, 27, 27)';
			var now = new Date().getTime();
			
			
			/* $('#shadow').animate({boxShadow: 'inset 0 1px 25px 0px '+color}, 600, function() {
				
				var timer = 0;
				
				function back() {
					$('#shadow').animate({boxShadow: 'inset 0 1px 9px -2px #000'}, 2000);				
				}
				
				function run() {
				
					$('#shadow').animate({boxShadow: 'inset 0 1px 25px 0px '+color}, 2000, function() {
					
						$('#shadow').animate({boxShadow: 'inset 0 1px 40px 20px '+color}, 2000, function() {
							timer += 1;
							if(new Date().getTime() < (now + time)) run();
							else back();
						});
					
					});
				
				
				}
				
				run();
			
			}); */
			
			count = Math.round(time/1000)-1;
			
			var timer = setInterval(function() {
				
				$("#boosttimer").html(count);
				count--;
				if(count<0) { 
					clearInterval(timer);
					$("#boosttimer").html("");
				}
			},1000);
			
		}
		
		
		//Bestzeiten ausgeben
		function showTimes() {
			var sekunden = 0;
			var punkte = 0;
			var ausgabe = "";
			var moneyGoals = ["mio","quad","sept","dec"];
			
			for(var i=0; i<moneyGoals.length; i++) {
				sekunden = stats["timeTo1"+moneyGoals[i]];
				punkte = Math.pow(4,(3-i))*precise_round((sekunden*(1+prestige["level"])/100),1);
				
				if(punkte > 0)
					punkte = numberWithCommas(punkte);
				else punkte = "infinity"
				
				if(sekunden <=0) 
					ausgabe = "Not reached yet ("+precise_round(100*stats["money"]/$("#time_"+moneyGoals[i]).prop("title"),2)+"% made)";
				else ausgabe = formatDate(sekunden);
			
			
				$("#time_"+moneyGoals[i]).html(ausgabe);
				$("#points_"+moneyGoals[i]).html(numberWithCommas(punkte));
			
			}

		}
		
		/* *************************
		SPIEL INITALISIERUNG
		
		************************* */
		//Konstante Werte --- Y
		
		var begging = 1;
		//var btcusd = 555.55;
		//var btcusdX = btcusd;
		var basis = 1.143;
		var p_find = 80;
		var p_magic = 12;
		
		//Sonstige Variablen
		var straightOn = 0;
		var newMoney = 0;
		var clickspeed = 0;
		
		//Variablen setzen
		var money = 7.0;
		var btc = 0.015;
		var btcs = 0;
		
		var nicknames = new Array(
		"Terminator","PeterParker","Spiderman","KimSchmitz","JonDoe","Dagobert","Hasi","root","Jason","TheDoctor","DrReid","HD","Arthur"
		);
		var nick = nicknames[Math.floor(Math.random()*nicknames.length)]+Math.floor(Math.random() * (9999));
		
		/* var graph = { moneyG: [0], moneyallG: [0], btcG: [0]};
		
		function resetGraphValues() {
			graph = { moneyG: [0], moneyallG: [0], btcG: [0]};
		} */
		
		var hardwareGraph = { }
		for(var name in hardware) {
				hardwareGraph[name] = 0;
			}
		
		
		//Hardware im Savegame
		var hardwareOwned = { }
			
		for(var name in hardware) {
				hardwareOwned[name] = 0;
			}

			
		//Erfolge
		var achievsOwned = { }
		
		for(var name in achievs) {
				achievsOwned[name] = false;
			}	
			
		//Dungeons
		var dungeons = { }
		
		for(var name in dun) {
				dungeons[name] = 0;
			}
		
		
		//Forschungen
		var resOwned = { }
		
		for(var name in res) {
				resOwned[name] = 0;
			}
			
		
		
		//Erfolg setzen
		function setAchiev(name) {
			if(achievsOwned[name] == false ) {
				achievsOwned[name] = stats["time"];
				listAchiev(achievsOwned, settings["classic"], callAchievTip);
				showNote("n_"+name, "'"+achievs[name]["label"]+"' unlocked", achievs[name]["description"]+" [+"+achievs[name]["gold"]+' <img src="img/coin.png" style=" width:15px; margin-bottom: -1px;" />]', true, true);
				
				prestige["coins"] += achievs[name]["gold"];
			}
		}
		
		
		
		
		
		for(var name in pres) {
			if(pres[name]["again"] === false)
				prestige[name] = 0;
		}
		
		//Geld erhöhen
		function setMoney(x) {
			money += x;
			stats["money"] += x;
		}
		
		function loseMoney(x) {
			x = parseFloat(x);
			money -= x;
			stats["moneyspent"] += x;
		}
		
		//Speicherwerte auslesen --- X
		
		function loadProgress() {
			var string;
			var check = false;
			

			try {
				//Ladefunktion
				string = JSON.parse(atob(localStorage["progress"]));
			} catch (e) {
				//Falls weder noch geladen werden soll
				check = true;
			}
			
			if (check == false) {
				
				money = string.money;
				btc = string.btc;
				if(string.nick !== undefined) nick = string.nick;
				
				
				hardwareSave = string.hardwareOwned;
				try { achievsSave = string.achievsOwned; } catch(e) { achievsSave = achievsOwned;}
				try { prestigeSave = string.prestige; } catch(e) { prestigeSave = prestige;}
				try { dunSave = string.dungeons; } catch(e) { dunSave = dun;}
				try { resSave = string.resOwned; } catch(e) { resSave = resOwned;}
				settingsSave = string.settings;
				statsSave = string.stats;
				//if(string.graph !== undefined && Object.keys(string.graph).length == Object.keys(graph).length) graph = string.graph;
					
				
				for(var name in hardwareSave) {
					hardwareOwned[name] = hardwareSave[name];
				}
				
				for(var element in achievsSave) {
					achievsOwned[element] = achievsSave[element];
				}
				
				for(var element in prestigeSave) {
					prestige[element] = prestigeSave[element];
				}
				
				for(var element in dunSave) {
					dungeons[element] = dunSave[element];
				}
				
				for(var element in resSave) {
					resOwned[element] = resSave[element];
				}
				
				for(var index in settingsSave) {
					settings[index] = settingsSave[index];
				}
				
				for(var index in statsSave) {
					stats[index] = statsSave[index];
				}			
				
				if(prestige["level"] >= 3)
					setAchiev("prestigeLvl3");
				
				//TEMPORÄR Prestige umschreiben
				if("faktorReset" in stats) {
					prestige["coins"] = parseInt(stats["faktorReset"]*100);
					if(prestige["coins"] > 1000000) prestige["coins"] = 500;
					prestige["level"] = stats["resets"];
					delete stats["faktorReset"];
				}
				if(prestige["coins"] == null)
					prestige["coins"] = 0;
				
				if(stats["achievGoldBack"] == false) {
					for(name in achievs) {
					var gold = achievs[name]["gold"];
						if(achievsOwned[name] == true) 
							prestige["coins"] += gold;
					}
					stats["achievGoldBack"] = true;
				}
				
				
				
				//Autosell Haken machen
				if(settings["autosell"] == true) $('#autosell').prop('checked', true);
				if(settings["hideHack"] == true) $('#hideHack').prop('checked', true);
				//if(settings["showQuote"] == true) $('#showQuote').prop('checked', true);
				//if(settings["classic"] == true) $('#oldDesign').prop('checked', true);

				
				$("#prestigeID").html("| Prestige "+prestige["level"])
				
				
				if(settings["kitty"] == true) { 
					//$('body').css("background-image", "url(img/kitty.jpg)"); 
					$("body").ezBgResize({ img:"img/kitty.jpg", center:false });
				}
				
				//Offline BTC 
				var offline = 0;
				var last = stats["lastSaved"];
				var lastb = stats["lastBTCs"];
				var now = new Date().getTime();
				if(prestige["nightowl1"]) offline = 0.1;
				if(prestige["nightowl2"]) offline += 0.15;
				if(prestige["nightowl3"]) offline += 0.25;
				if(prestige["nightowl4"]) offline += 0.5;
				
				if(money >10 )btc += offline * lastb*(now-last)/1000;
				
				console.log("Offline BTC "+bigNum(offline * lastb*(now-last)/1000));
				
			} else {
				//$("#h2menu").hide();
				
				//Pfeil für erstes Spiel anzeigen
				
				$("#begfirst").show(100);
				var showFirst = true;
				
				function showArrow() {
					$("#begfirst").animate({ 
						left: "-=50px",
					}, 600, function() {
						$("#begfirst").animate({ 
							left: "+=50px",
						}, 600);
						if(showFirst == true) showArrow();
					});
				}
				showArrow();
				var counter = 0;
				
				$("#begging").bind('click.firstBeg', function() {
					counter++;
					if(counter >= 4) {
						$("#begfirst").fadeOut(200, function() { $(this).appendTo("#zuse").css({"top" :"20px"}); $(this).fadeIn(400); });
						$(this).unbind('click.firstBeg');
						
						$("#zuse").bind('click.firstBuy', function() {
							$("#begfirst").fadeOut(200, function() { $(this).appendTo("#sell_100").css({"top" :"-10px"}); $(this).fadeIn(400); });
							$(this).unbind('click.firstBuy');
							
							$("#sellBTC").bind('click', function() {
								$("#begfirst").fadeOut(500);
								$(this).unbind('click');
								showFirst = false;
								$("#h2menu").show(800);
							});
						});
					}
				});
			
			}
			
			//Bild anzeigen
			if(settings["classic"] == false) { 
				$("body").ezBgResize({ img:"img/blur.jpg", center:false });
				$("#channel").addClass("channelWhite");
			}
			
		}
		
		/* *********************
		SPIEL STARTEN
		********************* */
		
		function gameStart() {
			//Versteckt noscript Hinweise
			$("#noscript").hide();
			//Daten laden
			loadProgress();
			//Berechnet die BTC/s aus vorhandenen Maschinen
			updateHardware();
			//Zeigt die Walletdaten an
			updateWallet();
			//Listet die Hardware auf
			listHardware(settings["classic"], callHardwareTip);
			//Liest Achievments aus
			listAchiev(achievsOwned, settings["classic"], callAchievTip);
			//Gibt Ger�teanzahl aus
			updateHardware();
			//Gibt Forschung aus
			listResearch();
			//Prestige Shop ausgeben
			listShop();
			//Erste mal Adventure ausgeben
			//dungeons = {onlineshop:1,phonehouse:0}
			listDunLevels(dungeons, true);
			listDunLevels(dungeons);
			
			//Stats laden
			
			
			$(".email").html("admin@wernersbacher.de");
			//$("#storeAll").show();
			$("#storeAll").show();
			
		}
		gameStart();
		
		//if(cons) $("#devRes").html(showRes());
		
		
		var id=0;
		var seconds = 0;
		
		//Klick auf grossen Button (hack some dollar)
		$("#begging").click(function(event) {
			var now = new Date().getTime();
			var pres_factor = 1;
			var minus = 0;
			if(prestige["hackingA"] == true)
				pres_factor = 10;
			
			if(now - seconds >= 75) {
				stats["attacks"] +=1;
				stats["attacksSes"] +=1;
				
				if(stats["attacks"] >= 250) setAchiev("clicker250");
				if(stats["attacks"] >= 3000) setAchiev("clicker2500");
				
				clickspeed +=1;
				if(stats["clicks"] < 500)
					stats["clicks"] += 1;
					
				
				if(stats["clicks"] > 10)
					minus = stats["clicks"];
				
				
				var newBeg = ((1000-minus)/1000) * (begging + pres_factor * getBegFactor());
			
				
				setMoney(newBeg);
				updateWallet();  
				setAchiev("hacking");
				console.log(settings["hideHack"]);
				if(settings["hideHack"] !== true) {
					var ease = "40px";
					var parentOffset = $(this).parent().offset(); 
					
					id+=1;
					var content = '<div class="showBegging" id="'+id+'">+ '+dollar(newBeg.toFixed(2))+'</div>';
					console.log(content);
					$("#begging").append(content);
					$("#"+id).fadeOut(0).css({"left" : event.pageX - parentOffset.left - 20, "top":event.pageY - parentOffset.top +2}).fadeIn("fast").animate({
							opacity: 0,
							top: "+=150px"
						}, 800, function() {
						$(this).remove();
					});
				}
				seconds = now;
			}
		});
		
		setInterval(function() {
			//Zeit verkürzen
			var now = new Date().getTime();
			if(now - seconds > 5000 && stats["clicks"] >1) stats["clicks"] -= 2;
			
			//Clickingspeed
			if(clickspeed <1)
				$("#clickspeed").html("");
			else 
				$("#clickspeed").html(clickspeed+" clicks/s");
			
			if(clickspeed >= 9)
				setAchiev("clicks9");
			
			clickspeed = 0;
			
		}, 1000);
		
		//Manueller Verkauf von BTC
		$("#sell_100").click(function() {
		  
		  newMoney = stats["btcusd"] * btc * parseFloat(getSellFactor());
		  //console.log(newMoney);
		 /*  money = money + newMoney;
		  stats["money"] += newMoney; */
		  setMoney(newMoney);
		  
		  btc = 0;
		  
		  updateWallet();
		  
		  if(newMoney > 450000000000000000)
			setAchiev("sell450");
			
		  if(stats["btcusd"] >= 606)
			setAchiev("btcusd666");
		  
		  
		});
		
		$("#sell_10").click(function() {
		  
		  newMoney = stats["btcusd"] * btc* 0.1 * parseFloat(getSellFactor());
		  //console.log(newMoney);
		  /* money = money + newMoney;
		  stats["money"] += newMoney; */
		  setMoney(newMoney);
		  
		  btc = btc - btc*0.1;
		  
		  updateWallet();
		  
		  if(stats["btcusd"] >= 606)
				setAchiev("btcusd666");
		  
		});
		
		function switchMenu(id, callback) {
			var fadeTime = 100;
			var menuarray = ["storeAll","success","research","chat","feedbackMain","settings","allstats","faq","changelog","contact","prestige","tron","raid"]
			
			if(settings["hideHack"]) fadeTime = 0;
			
			for (var i in menuarray) 
				if(id !== menuarray) $("#"+menuarray[i]).hide();
			
			if(!$("#"+id).is(":visible"))
				$("#"+id).fadeIn(fadeTime, function() { if(callback) callback(); });
			
			if(!$("#tron").is(":visible"))
				stopTron();
		}
		
		//Im Menü umschalten
		$("#h2main").click(function() {
		
			switchMenu("storeAll");
			
		});

		$("#h2achievs").click(function() {
			
			switchMenu("success");
			
		});

		$("#h2res").click(function() {
		
			switchMenu("research");
		
		});

		$("#h2raid").click(function() {
		
			switchMenu("raid");
		
		});

		$("#h2tron").click(function() {
		
			switchMenu("tron");
			loadGame();
		
		});

		$("#h2prestige").click(function() {
		
			switchMenu("prestige");
			listShop();
		
		});

		$("#h2contact").click(function() {
			
			switchMenu("contact");
		
		});

		$("#h2changelog").click(function() {
			
			switchMenu("changelog");
		
		});

		$("#h2faq").click(function() {
			
			switchMenu("faq");
		
		});

		$("#h2feed").click(function() {
			
			switchMenu("feedbackMain");
		
		});

		$("#h2stats").click(function() {
			
			switchMenu("allstats");
			showTimes();
			
		});

		$("#h2settings").click(function() {
			
			switchMenu("settings");
			
		});
		
		$("#h2chat").click(function() {
			
			switchMenu("chat");
			$("#chat"+gross(settings["channel"])).trigger("click");
			
		});
		
		
	
		
		//BTC erhöhen
		function getFocus() {
			var fast = 100;
			if(settings["hideHack"] == true) fast = 750;
		
			if (window.opera && opera.toString() == "[object Opera]"){
				return fast;
			} else if(document.hasFocus()) return fast;
			else return 1000;		
		}

		var timerbtcs;
		var div = 10;
		var btcTime = 0;
		var newBtc = 0;
		
		function repeat(pause) {
			//Zeit für den Fall das Fenster gewechselt wird
			var breakTime = new Date().getTime();
			
			//Berechnet den Dividend
			div = (1/getFocus())*1000;
			
			//Wird nur aufgerufen, wenn ins Fenster zurückgewechselt wird und somit Zeit wieder schnell wird.
			//Berechnet außerdem die verdienten BTC vor Abbruch.
			if(pause) {
			
				newBtc = (btcs/div)*((breakTime-btcTime)/getFocus()) - btcs/div;
				if(newBtc < 0) newBtc = 0;
				btc += newBtc;
				
			} else {
				btc += btcs/div;
			}
			updateWallet();
			
			//Setzen, wann BTC das letzte mal gespeichert wurde
			btcTime = new Date().getTime();
			
			timerbtcs = setTimeout(repeat, getFocus());
		}

		repeat();
		
		$(window).focus(function() {
			clearTimeout(timerbtcs);
			repeat(true);
		});
		
		

		
		//Automatisches Speichern
		setInterval(function() {

			saveGame();
		
		}, 20000);
		
		//Manuelles Speichern
		$("#saveGame").click(function() {
		  
			saveGame();
		  
		});
		
		//Reset
		$("#resetGame").dblclick(function() {
		  
			localStorage["progress"] = "";
			location.reload();
		  
		});
		
		//Restart Game
		$("#newGame").click(function() {
			
			if($(this).is(":disabled")) return;
			
			$("#presConfirm").fadeIn(400);
			
			$("#presCancel").click(function() {
				$("#presYes, #presCancel").unbind( "click" );
				$("#presConfirm").fadeOut(200);
			});
			
			$("#presYes").click(function() {
				//Reset eintragen
				stats["timeSes"] = 0;
				stats["attacksSes"] = 0;
				stats["moneyall"] += stats["money"];
				
				
				var newFactor = getResetFaktor(true);
				if(newFactor >= 300)
					setAchiev("prestige100");
				prestige["coins"] += parseInt(newFactor);
				
				//console.log(newFactor);
				
				//if(newFactor >= 50*(1+prestige["level"]))
				if(isPrestigeLevelUp(newFactor)) {
					prestige["level"] += 1;
					stats["tronHighscore"] = 0;
				}
				stats["resets"] += 1;
				
				//Zurücksetzen
				money = 7;
				btc = 0.015;
				stats["money"] = 0;
				stats["moneyspent"] = 0;
				stats["lastRandom"] = 0;
				stats["timeToThisSes"] = 0;
				stats["res42"] = 0;
				for(var name in hardwareOwned) {
					hardwareOwned[name] = 0;
				}
				for(var name in resOwned) {
					resOwned[name] = 0;
				}
				for(var name in dungeons) {
					dungeons[name] = 0;
				}
				
				
				//Alles aktualisieren
				saveGame();	
				showNote("reset", "Restarted system", "Page will reload now", true);
				setTimeout(function() {
					location.reload();
				}, 500); 
			});
		});

		
		//Exportieren des Speicherstandes
		$("#exportSave").click(function() {
		  
			$("#showSave").val(saveGame(true))
			stats["exported"] +=1;
			if(stats["exported"] >= 30) 
				setAchiev("export30");
			
		});
		
		function setDownloadFile() {
			$("#downloadSave").prop("href", 'data:Application/octet-stream,' +
				encodeURIComponent(localStorage["progress"]))
				.prop("download", "bitcoiner-" + stats["time"]+ ".txt");
		}
		setDownloadFile();
		
		$("#downloadSave").click(function() {
			stats["exported"] +=1;
			saveGame(true);
			setDownloadFile();
		});
		
		//Importieren des Speicherstandes
		$("#importSave").click(function() {
			var check = true;			
			var string = $("#showSave").val();
		
			try {
				//console.log(JSON.parse(atob(string)));
				check = true;
			} catch (e) {
				check = false;
			}
			
			if(check === true && string.length > 1) {
				localStorage["progress"] = string;
				location.reload();
			}
			
		});
		
		//Backupsystem
		$("#saveBackup").click(function() {
			saveGame();
			localStorage["backup"] = localStorage["progress"];
		});
		
		$("#loadBackup").dblclick(function() {
			saveGame();
			var temp_save = localStorage["progress"];
			localStorage["progress"] = localStorage["backup"];
			localStorage["backup"] = temp_save;
			location.reload();
		});
		
		//�ndert Formatierung der Zahlen
		$("#switchFormat").click(function() {
			
			var old = settings["format"];
			//console.log(old);
			
			//0-2 geben verschiedene Modi an
			//0: Standard, 1: deutsch ausgeschrieben, 2: engineering
			if(old <= 1)
				old++;
			else old = 0;
			
			settings["format"] = old;
			saveGame(true);
			//Damit alle Zahlen wirklich aktualisiert 
			updateHardware();
			
		});
		
		//Design Switch 
		$("#oldDesign").click(function() {
			if(settings["classic"] == true) {
				//Neues Design
				//$('body').css("background-image", "url(img/blur.jpg)");  
				$("body").ezBgResize({ img:"img/blur.jpg", center:false });
				$("div .description").removeClass("green").addClass("white");
				$("#channel").addClass("channelWhite");
				$("div .unlocked").removeClass("unlocked").addClass("unlockedWhite"); 
				$("div .locked").removeClass("locked").addClass("lockedWhite"); 
			} else {
				//$('body').css("background-image", ""); 
				$("body").ezBgResize({ img:"img/white.png", center:false });
				$("#channel").removeClass("channelWhite");
				$("div .description").removeClass("white").addClass("green");
				$("div .unlockedWhite").removeClass("unlockedWhite").addClass("unlocked"); 
				$("div .lockedWhite").removeClass("lockedWhite").addClass("locked"); 
			}
		});
		
		//Automatischer Verkauf von BTC, Titel aktualisieren, Online Achievments, Allgemeine Schleife
		function sellIntervalFunc() {
			//Checkboxen in Settings
			settings.hideHack = $("#hideHack").prop("checked");
			//settings.showQuote = $("#showQuote").prop("checked");
			//settings.classic = $("#oldDesign").prop("checked");
			
			//Autosell speichern
			settings.autosell = $("#autosell").prop("checked");
			if(settings.autosell == true) {
				if(prestige["autosell"] == true)
					newMoney = stats["btcusd"] * btc * parseInt(getSellFactor()) * 0.99;
				else newMoney = stats["btcusd"] * btc * 0.99;
				setMoney(newMoney);
				btc = 0;
			}
			
			if(getResNum("btcMulti") >= 9)
				updateHardware();
			
			if(dungeons["onlineshop"] > 0)
				$("#h2raid").show(200);
			
			stats["time"] += 2;
			stats["timeSes"] += 2;
			straightOn += 2;	
			
			if(stats["time"] > 200) setAchiev("online200s");
			if(stats["time"] > 7200) setAchiev("online2h");
			if(stats["time"] > 86400) setAchiev("online1d");
			if(stats["time"] > 2592000/3) setAchiev("online1m");
			if(straightOn > 21600) setAchiev("straight6h");
			if((stats["timeSes"] - stats["lastRandom"])/(60*60) >= 24 && stats["lastRandom"] > 0) setAchiev("norandom24");
			//console.log((stats["timeSes"] - stats["lastRandom"])/(60*60));
			
			//Check ob Multi over timer setzen
			if(getResNum("btcMulti") >= 9 && (stats["res42"] == 0 || stats["res42"] > stats["timeSes"]))
				stats["res42"] = stats["timeSes"];
			
			
			//Graphdaten aktualisieren
			/* if(stats["timeSes"]/1200 >= 1) {
				$("#graphs").show();
				//updateGraph();
			}
			var hours = 12*3;
				if(graph.moneyG == null || graph.moneyallG == null || graph.btcG == null) { resetGraphValues(); console.log("Stats sind kaputt!"); }
			
			if(stats["timeSes"] % 1200 == 0) {
				if(graph.moneyG.push(money) > hours) graph.moneyG = precise_round(graph.moneyG.slice(-hours),2);
				if(graph.btcG.push(btc) > hours) graph.btcG = precise_round(graph.btcG.slice(-hours),4);
				if(graph.moneyallG.push(stats["money"]) > hours) graph.moneyallG = precise_round(graph.moneyallG.slice(-hours), 2);
				if($("#graphs").is(":visible")) 
					refreshGraph();
				
			}
			
			$("#graphTime").html(formatDate(1200-(stats["timeSes"] % 1200))); */
			
		}
		
		sellIntervalFunc();
		setInterval(sellIntervalFunc, 2000);
		
		
		
		//BTC Kurs aktualiseren
		function getRateTime() {
			var milli = 100000;
			if(prestige["changerateTime"])
				milli = Math.floor(milli/3);
			return milli;
		}
		
		function getRate() {
			console.log("BTC/USD Update");
			var trend = "";
			getRate2(prestige["changerateFall"], function(result, avg) {
				if(result > stats["btcusd"]) trend = "up"; 
				else if(result < stats["btcusd"]) trend = "down"; 
				else trend = "";
				
				stats["btcusd"] = result;
				if(stats["time"] < 7200) stats["btcusd"] *= 1.4;
				stats["btcusdX"] = avg;
				
				$("#rateIMG").prop("src", "img/"+trend+".png").fadeIn(100).delay(10000).fadeOut(2000);
				
			});
			setTimeout(getRate, getRateTime());
		}
		setTimeout(getRate,getRateTime());

		
		
		function buyHardware(computer, free, noRef) {
		
			function check() {
				updateWallet();
				updateHardware();
				
				
				
				if(hardwareOwned["usbasicminer"] > 0 && dungeons["onlineshop"] == 0) {
					dungeons["onlineshop"] = 1;
					listDunLevels(dungeons);
				}	
					
				//show Note bei Award upgrade
				if(hardwareOwned[computer] == 25)				
					showNote("bronze_"+computer, hardware[computer]["label"], "<img src='img/bronze.png' /> Bronze award assigned");
			
				if(hardwareOwned[computer] == 50)				
					showNote("silver_"+computer, hardware[computer]["label"], "<img src='img/silver.png' /> Silver award assigned");
				
				if(hardwareOwned[computer] == 100)				
					showNote("gold_"+computer, hardware[computer]["label"], "<img src='img/gold.png' /> Gold award assigned");
			  
				if(hardwareOwned[computer] == 200)				
					showNote("ruby_"+computer, hardware[computer]["label"], "<img src='img/ruby.png' /> Ruby award assigned");
					
				if(hardwareOwned[computer] == 500)				
					showNote("emerald_"+computer, hardware[computer]["label"], "<img src='img/emerald.png' /> Emerald award assigned");
					
				if(hardwareOwned[computer] == 1000)				
					showNote("diamond_"+computer, hardware[computer]["label"], "<img src='img/diamond.png' /> Diamond award assigned");
					return true;
				}
			
			
			if(computer == "update") {
				check();
				return false;
			}
			
			newCost = getNewCost(computer);			
			if((newCost <= money && !noRoom()) || free == true) {
				//console.log(noRoom());
				hardwareOwned[computer]++;
				stats["machines"]++;
				if(free !== true)
					loseMoney(newCost);
				if(!noRef) check();
				
				return true;
			}
		}
		
		
		
		//Kauf von Hardware
		$("#store > li > ul > li").on("click", function(event) {
			var klasse = $(event.target).prop("class");
			if(klasse == "sell10" || klasse == "sell1" || klasse == "buy10") return;
			
			var computer = this.id;
			buyHardware(computer);
		  
		  
		});
		
		
		//BUY 10 anzeigen
		$(".description").mouseover(function() {
		
			$(this).find(".buy10").show();
			$(this).find(".sell10").show();
			$(this).find(".sell1").show();
		
		})
		
		$(".description").mouseout(function() {
		
			$(this).find(".buy10").hide();
			$(this).find(".sell10").hide();
			$(this).find(".sell1").hide();
		
		})
		
		
		$(".buy10").click(function() {
		  
			var id = $(this).parent().parent().attr("id");
			var bought = 0;
			var tianSilver = false;
			if(hardwareOwned["tianhe2"] >= 50) tianSilver = true;
			
			for (i=1;i<=10;i++)
				{
				if(buyHardware(id, false, true) === true)
					bought += 1;
				}
			buyHardware("update");
		    if(bought>=9 && id == "tianhe2" && tianSilver) 
				setAchiev("tentian");
			
		});
		
		$(".sell1").click(function() {
			
			var id = $(this).parent().parent().attr("id");
			
			if(hardwareOwned[id] >= 1) {
				hardwareOwned[id]--;
				
				newMoney = 0.33* getNewCost(id, true);
				setMoney(newMoney);
			}
			
			updateWallet();
			updateHardware();

		});
		
		$(".sell10").dblclick(function() {
		
		  	var id = $(this).parent().parent().attr("id");
			
			for (i=1;i<=10;i++)
				{
					if(hardwareOwned[id] >= 1) {
						hardwareOwned[id]--;
						
						newMoney = 0.33* getNewCost(id, true);
						setMoney(newMoney);
					}
				}
			updateWallet();
			updateHardware();

		});
		
		//Research Funktionen
		function getResearchTime() {
			faktor = 1;
			if(prestige["res10"] == true)
				faktor -= 0.1;
			if(prestige["res20"] == true)
				faktor -= 0.2;
			if(prestige["res30"] == true)
				faktor -= 0.3;
			return faktor;
		}
		
		function listResearch(call) {
		
			listResearchAll(resOwned, money, call, getResearchTime()) ;
		}
		
		function callResClick() {
		
			if(resOwned["center"] >= 4)
				setAchiev("resgoose");
			if(getUpgradesSum() >= 5)
				setAchiev("res5");
			if(getUpgradesSum() >= 45)
				setAchiev("res25");
				
		
			$(".resBody").parent().click(function() {
				//Splitten, um Name und id auszugeben
				var id = $(this).attr("id");
				var idArray = id.split("_");
				var cost = res[idArray[1]][idArray[0]]["cost"];
				var time = getResearchTime() * parseInt(res[idArray[1]][idArray[0]]["time"]);
				console.log(time);
				
				//id Array Aufbau: 1_center o.�.
				if(money >= cost) {
					//money -= cost;
					loseMoney(cost);
				
					resOwned[idArray[1]] = idArray[0]+"_"+time;
					listResearch(callResClick);
				}
			});
			
			$(".payFaster").click(function() {
				var id = $(this).parent().parent().attr("id");
				var idArray = id.split("_");
				var cost = res[idArray[1]][idArray[0]]["cost"];
				
				stringValue = resOwned[idArray[1]].toString();
				if(stringValue.indexOf("_") > -1) {
					stringArray = stringValue.split("_");
					console.log(idArray[1]);
					time = Math.floor(parseInt(stringArray[1])-parseInt(stringArray[1])/4);
					
					resOwned[idArray[1]] = idArray[0]+"_"+time;
					//money -= cost;
					loseMoney(cost);
					
					listResearch(callResClick);
				}
			});
		}
		
		callResClick();
		
		var refreshRes = 1;
		
		setInterval(function() { 
			var idArray;
			var stringValue = "";
			var time = "";
		
			//laufende Forschungen ausgeben
			for(name in resOwned) {
				stringValue = resOwned[name].toString();
				
				//console.log(stringValue);
				//id Array Aufbau: 1_200 o.�.
				if(stringValue.indexOf("_") > -1) {
					idArray = stringValue.split("_");
					time = parseInt(idArray[1])-refreshRes;
					if(btcboost) time -= refreshRes*9;
					
					if(time > 0)
						resOwned[name] = idArray[0]+"_"+time;
					else {
						resOwned[name] = parseInt(idArray[0]);
						showNote("res_"+name, "RESEARCH READY!", "You researched successfully '"+res[name][idArray[0]]["label"]+"'", true);
						
						//"goldRes" Shop
						if(prestige["goldRes"] == true)
							prestige["coins"] += 2*(1+prestige["level"]);
						
						
						updateWallet();
						updateHardware();
						

					}
					
					
				}
			}
			listResearch(callResClick);
		}, refreshRes*1000);
		
		//Erforschte Researches anzeigen
		
		$("#showRes").click(function() {
			var num = 0;
			var ausgabe = "";
			
			if($("#oldRes").is(":visible")) 
				$("#oldRes").hide(300);
			else {
				for(main in res) {
					num = getResNum(main);
					ausgabe += "<div style='float:left; width:250px; min-height:220px; margin-right:50px; margin-bottom:40px;'>";
					for(i = 1; i <= num; i++) {
						
						ausgabe += "<span title='"+res[main][i]["description"]+"'>"+res[main][i]["label"]+"</span><br/>";
						
						
					}
					ausgabe += "</div>";
				}
				$("#oldRes").html(ausgabe).fadeIn(300);
			}	
		});
		
		var firmen = new Array(
		"AME","Infel","Zark Muckerberg","Stobs Jeve","Ted Schmosby","Torchwood","Brüno","Jon Doe","Mr. Smith","Jay-X","Z-Xibit","Nuck Chorris"
		);
		
		
		//Random Events
		
		var shown = false;
		var btcboost = false;
		var timeGone = 0;
		var dur = 4;
		
		function closeRandom() {
			shown = false;
			timeGone = 0;
			$("#randomButton").off("click").stop().fadeOut(0);
			if(document.title.substring(0,2) == "[R")
				document.title = document.title.substring(9,document.title.length);
		}
		
		function showRandom() {
			
			var limit = getRandomStatus("machines");
			if(prestige["randomMore"] == true) var p_find2 = Math.floor(p_find - p_find/4); else var p_find2 = p_find;
			var randomNum = Math.floor(Math.random()*p_find2);
			var rand;
			var owning = 0;
			var freeBuy = 0;
			var p = Math.floor(Math.random() * 100) + 1;
			var botnetTime = 15000;
			newMoney = 0;
			
			//console.log("random shown: "+shown);
			
			//console.log(p_magic+": "+randomNum+" ("+p_find2+")")
			if(getRandomStatus() >= 1)
			if(randomNum == p_magic && shown == false && btcboost == false) {
				document.title = "[Random] "+document.title;
			
				//console.log("Bla");
				var posx = (Math.random() * ($(document).width() - 500) +150 +130).toFixed();
				var posy = (Math.random() * ($(document).height() - 350) +100).toFixed();
				if(posy > 900) posy = 900;
				
				console.log("Position: "+posx+" "+posy)
				
				$("#randomButton").css({"left" : posx+"px", "top":posy+"px"}).fadeIn("slow");
				
				shown = true;
				
				//Klick auf Random Button
				// immer mit closeRandom(); !!!
				$("#randomButton").click(function() {
					stats["lastRandom"] = stats["timeSes"];
					stats["random"] +=1;
					if(stats["random"] >= 299)
						setAchiev("random299");
				
					if(p <= 5) {
						//Gold schenken
						prestige["coins"] += 1;
						showNote("random_gold", "Sugar daddy", "You got a free coin!", true);
						closeRandom();
						
					} else if(p <= 40) {
						//Geld schenken
						//newMoney = money * getRandomStatus("hustler");
						newMoney = getRandomStatus("hustler") * stats["btcusd"] * btcs * getSellFactor()/(Math.floor(Math.random() * 600) + 200);
						
						if(newMoney > money) newMoney = money;
						
						setMoney(newMoney);
						showNote("random_money", "Hustler", "They gave you extra "+dollar(newMoney.toFixed(2))+"!", true);
						closeRandom();
						
					} else if(p > 40 && p <= 65) {
						
						randomSell = Math.floor(hardwareOwned["dreidfxvodoo"]/4);
						if(randomSell < 2) randomSell = 2;
						updateHardware();
						showNote("random_btcs", "BTC/s Botnet", "BTC/s rate x"+randomSell+" for "+botnetTime/1000+"s (+Research Speed x10)", true);
						$('#fastBTC').prop('title', 'x'+randomSell);
						$("#fastBTC").show(300);
						
						closeRandom();
						btcboost = true;
						
						innerShadow(botnetTime);
						
						setTimeout(function() {
							randomSell = 1;
							btcboost = false;
							$("#fastBTC").hide(100);
							updateHardware();
							closeRandom();
						}, botnetTime);
						
						
					} else {
						
						//Zuf�lliges Ger�t mit mehr als 50 an der Anzahl
						var counter = 0;
						while(owning < limit) {
							rand = randomKey(hardwareOwned);
							owning = hardwareOwned[rand];	
							counter++;
							
							if(getBest(true) >= hardware[rand]["hid"]) break;
						}
						
						if(owning < limit) freeBuy = 1;
							else freeBuy = Math.floor(owning/limit);
						if(noRoom()) freeBuy = 1;
						
						for (i=1;i<=freeBuy;i++) {
							buyHardware(rand, true, true);
						}
						buyHardware("update");
						var someone = firmen[Math.floor(Math.random()*firmen.length)];
						showNote("random_machine", "serious sponsoring", someone+" donated you <i>"+freeBuy+"x "+hardware[rand]["label"]+"</i>!", true);
						closeRandom();
					}
					
				
				});
			
			} else if (shown == true && btcboost == false) {
				timeGone += 1;
				if(prestige["randomDouble"]) dur = 8;
				if(timeGone > dur) {
					$("#randomButton").fadeOut(3000, function() { console.log("You missed a random!"); closeRandom();});
					
				}
			}
		}
		
		setInterval(showRandom, 3000);
		
		
		//Stats ausgeben
		
		function isPrestigeLevelUp(coins, mode) {
			var base = 75 * (1+prestige["level"]);
			if(mode == "rest") return base-coins;
			if(coins >= base)
				return true; else false;
		}
		
		function showStats() {
			var now = stats["timeSes"];
			$("#stats_time").html(formatDate(stats["time"]));
			$("#stats_timeSes").html(formatDate(stats["timeSes"]));
			$("#stats_money").html(dollar(stats["money"].toFixed(2)));
			$("#stats_moneyall").html(dollar(stats["moneyall"].toFixed(2)));
			$("#stats_moneyspent").html(dollar(stats["moneyspent"].toFixed(2)));
			$("#stats_attacks").html(stats["attacksSes"]+" ("+stats["attacks"]+")");
			if(stats["lastRandom"] > 0) var lastram = " (last "+formatDate(now-stats["lastRandom"])+" ago)";
			$("#stats_random").html(stats["random"]+lastram);
			$("#tron_played").html(stats["tronPlayed"]);
			$("#tron_highscore").html(stats["tronHighscore"]);
		
			$("#res_multi").html(bigNum(precise_round(100*getBTCsFactor()/(1+getBTCsFactor(true)), 2)));
			$("#reset_multi").html(bigNum(Math.floor((1+getBTCsFactor(true))*100))+"%");
			$("#res_sell").html(bigNum(Math.round(getSellFactor())*100));
			$("#res_clickpower").html(getBegFactor(true));
			$("#res_buildcost").html(Math.round(getBuildFactor()*100));
			$("#res_random").html(numberWithCommas(Math.round(getRandomStatus("hustler")/(getRandomStatus("basehustler")))));
			$("#res_sum").html(getUpgradesSum());
			$("#stats_achievs").html(getAchievsNum()+"/"+getAchievsNum(true));
			$("#stats_machines").html(getMachineNum());
		
			//Wird auf Settings angezeigt
			$("#prestige_bonus").html(bigNum(getResetFaktor(true))); 
				
			if(isPrestigeLevelUp(getResetFaktor(true)) == true) $("#prestige_lvlup").html("1 prestige level!"); //Prestige Level UP
				else  $("#prestige_lvlup").html("no prestige level! (You need <b>"+isPrestigeLevelUp(getResetFaktor(true),"rest")+"</b> more reset-coins for prestige level)");
			
			if(getResetFaktor(true) < 1)
				$('#newGame').prop('disabled', true);
			else
				$('#newGame').prop('disabled', false);
		
			//Alle Achievs fertig
			if(getAchievsNum() == getAchievsNum(true) && stats["end"] == false) {
				
				stats["end"] = true;
				prestige["coins"] +=100;
				endGame();
				
			} else if(getAchievsNum() !== getAchievsNum(true) && stats["end"] == true)
				stats["end"] = false;
		}
		
		
		showStats();
		setInterval(showStats, 2000);
		

		//Top-Men� ausklappen
		
		$("#faqBar").click(function() {
		  
			expandInfo("faq");
		  
		});
		
		$("#contactBar").click(function() {
		  
			expandInfo("contact");
		  
		});
		
		$("#changelogBar").click(function() {
		  
			expandInfo("changelog");
		  
		});
		
		$("#overlay").click(function() {
		  
			restore();
		  
		});
		
		//Feedback 
		$("#sendFeed").click(function() {
			var radio = $("input[name='from']:checked").val();
			var text = $("#feedText").val();
			
			if(radio == "other") radio = $("#fromother").val();
			
			if(radio != undefined && radio.length > 1) {
			
				//Daten �bermitteln
				$.post("feedback.php?mode=send", { nick: nick, text: text, radio: radio, progress: localStorage["progress"] }, function(data) { $("#feedText, #fromother").val(""); } );
				//Best�tigung
				$("#feedHint").fadeOut(0).html("Feedback sent!").fadeIn(500, function() { $(this).delay(5000).fadeOut()})

				if(text.length > 3)
					setAchiev("feedback");
			
			} else {
			
				$("#feedHint").fadeOut(0).html("Error!").fadeIn(500, function() { $(this).delay(2000).fadeOut()})
			
			}
		
		});
		
		//Tastendruck abfangen für CMD Konsole
		var three = 0;
		var two = 0;
		var one = 0;
		var cmdOpen = false;
		
		document.onkeyup = function(event) {
		  
		  one = two;
		  two = three;		  
		  three = event.keyCode;
		
			//Um Settings etc zu schlie�en
		  if(three == 27) restore();
		
		
		  if (one == 67 && two == 77 && three == 68 && cmdOpen == false && !$("#message").is(":focus")) {
			showCMD();
			cmdOpen == true;
			
			//cmd Achievment
			setAchiev("cmd");
		  }
				
				
				if (event.keyCode == 13 &&  $("#cmdText").is(":focus") == true) {
					
					var returnValue = execCMD(document.getElementById("cmdText").value);
					if(returnValue !== undefined) returnValue();
					
					//Bleibt immer
					return false;
				}

		}
		
		$("#cmd").click(function() { $("#cmdText").focus(); });
		
		
		//Uhrzeit ausgeben
		var hsl = Math.floor(Math.random()*360);
		
		function uhrzeit() {
			a = new Date();
			b = a.getHours(); c = a.getMinutes();
			if(b < 10){b = '0'+b;} 
			if(c < 10){c = '0'+c;} 
			zeit = b+':'+c;
			$("#uhrzeit").html(zeit);
			$("#topBar").css("color", "hsl("+hsl+", 25%, 90%)");
			hsl += 15;
			if(hsl >360) hsl=0;
		}
		uhrzeit();
		setInterval(uhrzeit,10000);
		
		
		//TRON GAME
		
		// based on this game 
		// http://quaxio.com/tron/
		var timer;
		var scoretimer;
		var e;
		var key;
		document.onkeydown=function(event){ 
			key = event.which;
		};
		
		function stopTron() {
			clearInterval(timer);
		}
		
		function loadGame() {
			var hscore = stats["tronHighscore"];
			
			
			$("#score").html("");
			key = 0;
			var sp = 2;
			stopTron();
			z = tronCan.getContext("2d");
			z.fillStyle="#000";
			z.fillRect(s=0,0,w=400,h=260);
			x = 200*129+100; //Startposition
			
			function intervall() {
				function check() {
					var d = z.getImageData(x%w+rX, x/w+rY, 1, 1);
					
					if(0 < x%w && x+w < w*h && d.data[0] == 0){
						z.fillStyle="#b8fefc";
						z.fillRect(x%w,x/w,2,2);
						s++;
					}	else {
						stopTron();
						s = Math.floor(s/100);
						
						stats["tronPlayed"] +=1;
						
						if(stats["tronPlayed"]>=100)
							setAchiev("tron100r");
						if(s>=30)
							setAchiev("tron30");
						if(s>hscore)
							stats["tronHighscore"] = s;
						var coinsNew = s-hscore;
						if(coinsNew > 0) 
							prestige["coins"] += coinsNew;
						$("#coins").html(prestige["coins"]);
						
						z.fillStyle="#000";
						z.fillRect(90,30,230,90);
						
						z.fillStyle="#fff";
						z.font = '22pt Courier';
						z.fillText('游戏结束', 120, 50);
						z.font = '10pt Courier';
						z.fillText('最高分: '+hscore+" - 回合: "+s, 103, 70);
						if(coinsNew > 0) z.fillText("获得 "+coinsNew+" 金币!", 140, 85);
					}
				}
				if(key == 87 || key == 38) { //W
					x -= sp*w;
					rX = 0;
					rY = 1;
					check();
				}
				else if(key == 65 || key == 37){ //A
					x -= sp;
					rX = 0;
					rY = 1;
					check();
				}
				else if(key == 83 || key == 40){ //S
					x += sp*w;
					rX = 1;
					rY = 1;
					check();
				}
				else if(key == 68 || key == 39){ //D
					x += sp;
					rX = 1;
					rY = 1;
					check();
				}
			}
			//Intervall ausführen
			clearInterval(timer);
			clearInterval(scoretimer);
			timer = setInterval(intervall,10);
			scoretimer = setInterval(function() { $("#tronLive").html(Math.floor(s/100));},200);
		}
		
		$("#nrmlize").click(function() {
			$("#tronCan").animate({
				width: "400px",
				height: "260px"
			}, 700);
		});
		
		$("#dblsize").click(function() {
			$("#tronCan").animate({
				width: "800px",
				height: "520px"
			}, 700);
		});
		
		$("#tronRestart").click(function() {
			loadGame();
		});
		
		$(document).keypress(function(e) {
			if(e.which == 13) {
				loadGame();
			}
		});
		
		//FB like Page
		
		
		window.fbAsyncInit=function() {
			FB.Event.subscribe('edge.create',
				function(response) {
					if(stats["fblike"] == false) {
						showNote("fblike", "Thanks for liking", "You got 15 coins for free!");
						stats["fblike"] = true;
						prestige["coins"] += 15;
					} else {
						showNote("fblike", "Thanks for liking", "Thanks for liking again!");
					}
				}
			);
		} 
		
		//FAQ ausklappen
		
		$(".faqQuestion").click(function() {
			$(this).parent().find(".faqAnswer").toggle("fast");
		});
		
		
		//Adventures
		// Making all variables public
		
		
		var playerBTC;
		var playerBTCs;
		var playerName;
		
		var enemyBTC;
		var enemyBTCs;
		var enemyName;
		var enemyNum;
		
		var bossBTC;
		var bossBTCs;
		var bossName;
	
		var timePlayerNeeds;
		var timeEnemyNeeds;
		var timeNeeded;
	
		//Those vars are changing while fighting
		var fplayerBTC;
		var fenemyBTC;
		var fbossBTC;
		
		var ff = 1;
		var battleTimeLimit = 25;
		var frameStop;
		var battle = false;
		var frameRaid = 250;
		var frameMinus = 1000/frameRaid;
		
		// Draws Startscreen
		function showStartRaid(name) {
				var level = dungeons[dun_name];
				//Make higher levels harder
				var hF = timeFaktor = Math.pow(2.4,level);
				
				//Start infos set
				playerBTC = btc/10;
				playerBTCs = btcs/randomSell;
				playerName = nick;
				playerName = "You!";
				
				// Sets stats for called level
				enemyBTC = hF * dun[name]["buyer"]["btc"];
				enemyBTCs = hF * dun[name]["buyer"]["btcs"];
				enemyName = dun[name]["buyer"]["label"];	
				enemyNum = 1+Math.floor(level/dun[name]["meta"]["base"]);
				
				bossBTC = hF * dun[name]["boss"]["btc"];
				bossBTCs = hF * dun[name]["boss"]["btcs"];
				bossName = "<b>BOSS "+dun[name]["boss"]["label"]+"</b>";
				
				//Calculate time needed
				timePlayerNeeds = enemyBTC/playerBTCs;
				timeEnemyNeeds = playerBTC/enemyBTCs;

				// Calculate real battle time
				if(timePlayerNeeds >= battleTimeLimit) timeNeeded = timePlayerNeeds;
				else if(timeEnemyNeeds >= battleTimeLimit && timeEnemyNeeds < timePlayerNeeds) timeNeeded = timeEnemyNeeds;
				else timeNeeded = 0;
				
				if(timeNeeded >= battleTimeLimit && prestige["fastforward"])
					ff = timeNeeded/battleTimeLimit;
				else ff = 1;
			
				console.log("timePlayerNeeds: "+timePlayerNeeds);
				console.log("timeEnemyNeeds: "+timeEnemyNeeds);
				console.log("timeNeeded: "+timeNeeded);
				console.log("ff: "+ff);
				
				
				/* Reset everything */
				$('#mainRaid').css("background-image", "url(img/dun/"+dun_name+".jpg)");  
				
				$("#myselfRaid .nickRaid").html(playerName);
				$("#myselfRaid .nickBTC").html(pr(playerBTC));
				$("#myselfRaid .nickBTCs").html(pr(playerBTCs));
				$("#myselfRaid .health").width("100%");
				
				$("#enemyRaid .nickRaid").html(enemyName);
				$("#enemyRaid .nickBTC").html(pr(enemyBTC));
				$("#enemyRaid .nickBTCs").html(pr(enemyBTCs));
				$("#enemyRaid .health").width("100%");
				
				$("#spawnEnemies").html(enemyNum);
				
				$("#startRaid").prop('disabled', false);
				$("#stopRaid").prop('disabled', true);
				//$("#raidMessage").hide();
				$("#bigRaid").html("");
				$("#nextRaid").hide();
				$("#miniRaid").html("");
		}
		
		//Check var for battle, if true you cannot switch between levels
		var battle = false;
		var boss = false;
		var dun_name;
		var dun_id;
		
		function spawnPlayer() {
			fplayerBTC = playerBTC;
		}
		function spawnEnemy() {
			fenemyBTC = enemyBTC;
		}
		function spawnBoss() {
			fenemyBTC = bossBTC;
			enemyBTC = bossBTC;
			fenemyBTCs = bossBTCs;
		}
		function stopRaid() {
			if(battle == false) return;
			clearInterval(frameStop);
			stats["lastRaid"] = stats["timeSes"];
			$("#bigRaid").html("LOST");
			$("#nextRaid").html("Start Over");
			$("#nextRaid").show();
			
			boss = false;
			battle = false;
		}		
		
		//nächstes Level auf button klick
		$("#nextRaid").click(function() {
			if(battle == true) return;
			showStartRaid(dun_name);
			spawnPlayer();
			spawnEnemy();
			$("#startRaid").trigger("click");
		});
		
		//Klick auf Level
		$(".raid_building").click(function() {
			$(this).attr("id");
			var level = dungeons[$(this).attr("id")];
			if(level<1 || battle == true) return;
			
			dun_name = $(this).attr("id");
			dun_id = parseInt(dun[dun_name]["meta"]["id"]);
			
			//Draws level
			showStartRaid(dun_name);
			$("#mainRaid").visible();
			
			
			//Sets start BTC as fighting stats (they will decrease during battle)
			spawnPlayer();
			spawnEnemy();
		
		});
		
		//Start button
		$("#startRaid").click(function() {
			$("#startRaid").prop('disabled', true);
			$("#stopRaid").prop('disabled', false);
			
			// Ein Frame
			function raiden() {
				//Calculates fighting
				fenemyBTC -= (playerBTCs/frameMinus)*ff;
				fplayerBTC -= (enemyBTCs/frameMinus)*ff;
				
				//Draws stats and health
				$("#myselfRaid .nickBTC").html(pr(fplayerBTC));
				$("#myselfRaid .health").animate({width: precise_round(fplayerBTC/playerBTC,2)*100+"%"},frameRaid/1,"linear");
				
				$("#enemyRaid .nickBTC").html(pr(fenemyBTC));
				$("#enemyRaid .health").animate({width: precise_round(fenemyBTC/enemyBTC,2)*100+"%"},frameRaid/1,"linear");
				
				
				if(fenemyBTC <= 0) {
					if(boss == false) { 
						enemyNum--;
						stats["enemyKilled"]++;
					}
					clearInterval(frameStop);
					$("#spawnEnemies").html(enemyNum);
					
					
					if(enemyNum <= 0 && boss == false) {
						//BOSS einleiten, da vorherige tot sind
						//$("#bigRaid").html("BOSS!").parent().show();
						$("#bigRaid").html("BOSS!");
						$("#enemyRaid .nickRaid").html(bossName)
						setTimeout(function() {
							//$("#bigRaid").parent().fadeOut(100);
							$("#bigRaid").html("");
							boss = true;
							spawnBoss();
							startRaid();
						
						},500);
						
					} else if(fenemyBTC <= 0 && boss == true) {
						//Boss besiegt
						stats["bossKilled"]++; if(stats["bossKilled"]>=30) setAchiev("beat30");
						dungeons[dun_name]++;
						if(dungeons["onlineshop"] >= 10) setAchiev("level10");
						var reward = enemyBTC * dun[dun_name]["meta"]["reward"];
						btc += reward;
						
						var output = "+"+pr(reward)+" BTC";
						
						for(name in dun) {
							if(dun[name]["meta"]["id"] == dun_id+1 && dungeons[dun_name] >= dun[name]["meta"]["level"] && dungeons[name] == 0) {
								dungeons[name] = 1;
								output += " | "+dun[name]["meta"]["label"]+" unlocked";
								if(name == "jupiter") setAchiev("unlockjupiter");
							}
						}
						
						//$("#bigRaid").html("DONE").parent().show();
						$("#bigRaid").html("DONE");
						$("#miniRaid").html(output);
						$("#nextRaid").html("Start Level "+dungeons[dun_name]);
						$("#nextRaid").show();
						
						listDunLevels(dungeons);
						
						battle = false;
						boss = false;
					
					} else {
						//Wenn es noch weitere gegner gibt
						//$("#bigRaid").html("Win!").parent().show();
						$("#bigRaid").html("Win!");
						
						setTimeout(function() {
							//$("#bigRaid").parent().fadeOut(100);
							$("#bigRaid").html("");
							spawnEnemy();
							startRaid();
						},500);
						
					} 
				} else if(fplayerBTC <= 0){
					
					stopRaid();
					
				}
			}
			function startRaid() {
				//Start battle
				stats["numRaid"]++;
				battle = true;
				frameStop = setInterval(raiden, frameRaid);
			}
			
			startRaid();
		});
		
		$("#stopRaid").click(function() {
			stopRaid();
		});
	});	
