//Ausgelagerte Funktion, die nicht auf Variablen von game.js zugreifen m�ssen

function getLog(y) {
    return Math.log(y)/Math.log(10);
}


function OpenInNewTab(url) {
	  var win = window.open(url, '_blank');
	  win.focus();
}

function showNote(id, title, text) {
	//if(width) width = "cmdInfo"; else width = "cmdInfo";
	var content = '<span class="cmdInfo" id="'+id+'"><h4>'+title+'</h4>'+text+'</span>';
	var log = '<div class="log_entry" id="log_'+id+'" style="width:500px; margin-bottom:10px;"><h4>'+title+'</h4>'+text+'</div>';
	
	$("#notes").prepend(content); 
	$("#"+id).fadeOut(0).fadeIn("slow").delay(5000).fadeOut("slow", function() { $(this).remove(); });
	$("#"+id).css('cursor','pointer').click(function() {$(this).remove(); });
	
	if($(".log_entry").length > 6)
		//$("#eventlog").last()
		$("#eventlog div:last-child").remove();
	
	$("#eventlog").prepend(log); $("#"+id).fadeOut(0).fadeIn("slow");
	
}

function showCMD() {
	$("#wrap").show();
	$("#cmd").show("fast");
	$('#cmdText').focus();
}

// USD/BTC Kurs
function getRate2(prevent, callback) {
	
	$.get("rate.html", function(data) {
		
		try {
			var btcArr = JSON.parse(data, true);
			var avg = Math.floor(btcArr["last"]); //Average value
			var high = Math.floor(btcArr["high"]); //max. value for actual rate
			var low = Math.floor(btcArr["low"]); //min. value for actual rate
			
			//calculating random rate between high and low
			var rate = Math.floor(Math.random()*(high-low+1)+low);
			
			
		} catch(e) { var rate = 565.62; console.log(e) }
		
			//getting first digit of actual rate
			var first = Math.floor(rate/100);
			//increase rate and average value 
			if(first <6) rate += 100 * (5-first);
			if(first <6) avg += 100 * (5-first);
		
			//Just make it a little bit nicer
			var komma = (Math.floor(Math.random() * 100) + 1)/100;
			var add = 60;
			var sub = 30;
			
			//For backhander
			if(prevent) { add = 30; sub = 0; }
			
			rate += komma;
			avg += komma;
			rate += Math.floor(Math.random()*(add)-sub);
			
		callback(rate, avg);
	});
}
	
	
function formatDate(sec) //Sekunden formatieren
	{	
	   sec = parseInt(sec);
	   minuten = parseInt(sec/60);
	   sec = sec%60;
	   stunden = parseInt(minuten/60);
	   minuten = minuten%60;
	   tage = parseInt(stunden/24);
	   stunden = stunden%24;
	  
	  var ausgabe = "";
		 if(tage>0) {ausgabe += tage+"d, "+stunden+"h"; if(minuten!==0) ausgabe+= ", "+minuten+"m"}
		 else if(stunden >0) ausgabe += stunden+"h, "+minuten+"m"
		 else if(minuten >0) ausgabe += minuten+"m"
		 if(ausgabe == "") ausgabe += sec+"s";
		 else if(sec != 0) ausgabe += ", "+sec+"s"

	  return ausgabe;

	}

//zuf�lliger Array key	
function randomKey(obj) {
    var ret;
    var c = 0;
    for (var key in obj)
        if (Math.random() < 1/++c)
           ret = key;
    return ret;
}

function precise_round(num,decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function pr(num) {
	var round = precise_round(num,3);
	if(round >=0)
		return bigNum(round);
	else return 0;
}

function gross(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1);
}

//http://www.mathcats.com/explore/reallybig/MathCatsRoundingBigNumbersCentillion.js
var notations =
[
	[
		'',
		' million',
		' billion',
		' trillion',
		' quadrillion',
		' quintillion',
		' sextillion',
		' septillion',
		' octillion',
		' nonillion',
		' decillion',
		' undecillion',
		' duodecillion',
		' tredecillion',
		' quattuordecillion',
		' quindecillion',
		' sexdecillion',
		' septendecillion',
		' octodecillion',
		' novemdecillion',
		' vigintillion',
		' unvigintillion',
		' duovigintillion',
		' trevigintillion',
		' quattuorvigintillion',
		' quinvigintillion',
		' sexvigintillion',
		' septenvigintillion',
		' octovigintillion',
		' novemvigintillion',
		' trigintillion',
		' untrigintillion',
		' duotrigintillion',
		' tretrigintillion',
		' quattuortrigintillion',
	],
	[
		'',
		' Millionen',
		' Milliarden',
		' Billionen',
		' Billiarden',
		' Trillionen',
		' Trilliarden',
		' Quadrillionen',
		' Quadrilliarden',
		' Quintillionen',
		' Quintilliarden',
		' Sextillionen',
		' Sextilliarden',
		' Septillionen',
		' Septilliarden',
		' Octillionen',
		' Octilliarden',
		' Nonillionen',
		' Nonilliarden',
		' Decillionen',
		' Decilliarden',
		' Undecillionen',
		' Undecilliarden',
		' Duodecillionen',
		' Duodecilliarden',
		' Tredecillionen',
		' Tredecilliarden',
		' Quattuordecillionen',
		' Quattuordecilliarden',
		' Quindecillion',
		' Quindecilliarden',
		' Sexdecillion',
		' Sexdecilliarden',
		' Septendecillion',
		' Septendecilliarden',
	],
	[
		'',
		'e6',
		'e9',
		'e12',
		'e15',
		'e18',
		'e21',
		'e24',
		'e27',
		'e30',
		'e33',
		'e36',
		'e39',
		'e42',
		'e45',
		'e48',
		'e51',
		'e54',
		'e57',
		'e60',
		'e63',
		'e66',
		'e69',
		'e72',
		'e75',
		'e78',
		'e81',
		'e84',
		'e87',
		'e90',
		'e93',
		'e96',
		'e99',
		'e102',
	]
];

function getFormat() {
	try { 
		var string = JSON.parse(atob(localStorage["progress"])); 
		return string.settings["format"];
	}
	catch(e) {  
		return 0;
	}
	
}

function numberWithCommas(x) {
	if(x == undefined) return "unknown";
	var save = getFormat();
	var komma = ".";
	var tausend = ",";
	if(save == 1) {
		komma = ","; tausend = ".";
	}
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, tausend);
	return parts.join(komma);
}

function dollar(x) {
	
	return "$"+bigNum(x);
	
}

//�bernommen von Cookie Clicker 
function bigNum(value)
{
		var orgVal = value;
		var save = getFormat();
		if(!parseInt(save)) 
			save = 0;
			
		var base = 0,
		notationValue = '';
		if (value >= 1000000 && isFinite(value))
		{
			
			value /= 1000;
			
			
			while(Math.round(value) >= 1000)
			{
				value /= 1000;
				base++;
			}
			//console.log(notations[save]);
			if (base >= notations[save].length) { 
				if(orgVal >= Math.pow(10,100)) {
					orgVal = Math.floor(orgVal/3)*3;
				
					var ende = ""+orgVal;
					notationValue = "e"+ende.substring(ende.length-3,ende.length);
					
				}
				
			} else {notationValue = notations[save][base];}
			
			return numberWithCommas( Math.round(value * 1000) / 1000 ) + notationValue+" ";
		}
		else if(value >= 1000) {
			return(numberWithCommas(Math.floor(value)))
		}
		else {
			return(numberWithCommas(value))
		}
	
}

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));