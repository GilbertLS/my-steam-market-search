// ==UserScript==
// @name        SteamMarket
// @namespace   Steam
// @include     http://steamcommunity.com/market/search*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js
// ==/UserScript==

jQuery.noConflict(true);
var $ = jQuery;

/*! TinySort 1.5.6
* Copyright (c) 2008-2013 Ron Valstar http://tinysort.sjeiti.com/
* License:
*     MIT: http://www.opensource.org/licenses/mit-license.php
*     GPL: http://www.gnu.org/licenses/gpl.html
*/
!function(a,b){"use strict";function c(a){return a&&a.toLowerCase?a.toLowerCase():a}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]==b)return!e;return e}var e=!1,f=null,g=parseFloat,h=Math.min,i=/(-?\d+\.?\d*)$/g,j=/(\d+\.?\d*)$/g,k=[],l=[],m=function(a){return"string"==typeof a},n=function(a,b){for(var c,d=a.length,e=d;e--;)c=d-e-1,b(a[c],c)},o=Array.prototype.indexOf||function(a){var b=this.length,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1};a.tinysort={id:"TinySort",version:"1.5.6",copyright:"Copyright (c) 2008-2013 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licensed:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},plugin:function(){var a=function(a,b){k.push(a),l.push(b)};return a.indexOf=o,a}(),defaults:{order:"asc",attr:f,data:f,useVal:e,place:"start",returns:e,cases:e,forceStrings:e,ignoreDashes:e,sortFunction:f}},a.fn.extend({tinysort:function(){var p,q,r,s,t=this,u=[],v=[],w=[],x=[],y=0,z=[],A=[],B=function(a){n(k,function(b){b.call(b,a)})},C=function(a,b){return"string"==typeof b&&(a.cases||(b=c(b)),b=b.replace(/^\s*(.*?)\s*$/i,"$1")),b},D=function(a,b){var c=0;for(0!==y&&(y=0);0===c&&s>y;){var d=x[y],f=d.oSettings,h=f.ignoreDashes?j:i;if(B(f),f.sortFunction)c=f.sortFunction(a,b);else if("rand"==f.order)c=Math.random()<.5?1:-1;else{var k=e,o=C(f,a.s[y]),p=C(f,b.s[y]);if(!f.forceStrings){var q=m(o)?o&&o.match(h):e,r=m(p)?p&&p.match(h):e;if(q&&r){var t=o.substr(0,o.length-q[0].length),u=p.substr(0,p.length-r[0].length);t==u&&(k=!e,o=g(q[0]),p=g(r[0]))}}c=d.iAsc*(p>o?-1:o>p?1:0)}n(l,function(a){c=a.call(a,k,o,p,c)}),0===c&&y++}return c};for(p=0,r=arguments.length;r>p;p++){var E=arguments[p];m(E)?z.push(E)-1>A.length&&(A.length=z.length-1):A.push(E)>z.length&&(z.length=A.length)}for(z.length>A.length&&(A.length=z.length),s=z.length,0===s&&(s=z.length=1,A.push({})),p=0,r=s;r>p;p++){var F=z[p],G=a.extend({},a.tinysort.defaults,A[p]),H=!(!F||""===F),I=H&&":"===F[0];x.push({sFind:F,oSettings:G,bFind:H,bAttr:!(G.attr===f||""===G.attr),bData:G.data!==f,bFilter:I,$Filter:I?t.filter(F):t,fnSort:G.sortFunction,iAsc:"asc"==G.order?1:-1})}return t.each(function(c,d){var e,f=a(d),g=f.parent().get(0),h=[];for(q=0;s>q;q++){var i=x[q],j=i.bFind?i.bFilter?i.$Filter.filter(d):f.find(i.sFind):f;h.push(i.bData?j.data(i.oSettings.data):i.bAttr?j.attr(i.oSettings.attr):i.oSettings.useVal?j.val():j.text()),e===b&&(e=j)}var k=o.call(w,g);0>k&&(k=w.push(g)-1,v[k]={s:[],n:[]}),e.length>0?v[k].s.push({s:h,e:f,n:c}):v[k].n.push({e:f,n:c})}),n(v,function(a){a.s.sort(D)}),n(v,function(a){var b=a.s,c=a.n,f=b.length,g=c.length,i=f+g,j=[],k=i,l=[0,0];switch(G.place){case"first":n(b,function(a){k=h(k,a.n)});break;case"org":n(b,function(a){j.push(a.n)});break;case"end":k=g;break;default:k=0}for(p=0;i>p;p++){var m=d(j,p)?!e:p>=k&&k+f>p,o=m?0:1,q=(m?b:c)[l[o]].e;q.parent().append(q),(m||!G.returns)&&u.push(q.get(0)),l[o]++}}),t.length=0,Array.prototype.push.apply(t,u),t}}),a.fn.TinySort=a.fn.Tinysort=a.fn.tsort=a.fn.tinysort}(jQuery);

/**
 * jquery.timer.js
 *
 * Copyright (c) 2011 Jason Chavannes <jason.chavannes@gmail.com>
 *
 * http://jchavannes.com/jquery-timer
 */
(function($){$.timer=function(func,time,autostart){this.set=function(func,time,autostart){this.init=true;if(typeof func=="object"){var paramList=["autostart","time"];for(var arg in paramList){if(func[paramList[arg]]!=undefined){eval(paramList[arg]+" = func[paramList[arg]]")}}func=func.action}if(typeof func=="function"){this.action=func}if(!isNaN(time)){this.intervalTime=time}if(autostart&&!this.isActive){this.isActive=true;this.setTimer()}return this};this.once=function(e){var t=this;if(isNaN(e)){e=0}window.setTimeout(function(){t.action()},e);return this};this.play=function(e){if(!this.isActive){if(e){this.setTimer()}else{this.setTimer(this.remaining)}this.isActive=true}return this};this.pause=function(){if(this.isActive){this.isActive=false;this.remaining-=new Date-this.last;this.clearTimer()}return this};this.stop=function(){this.isActive=false;this.remaining=this.intervalTime;this.clearTimer();return this};this.toggle=function(e){if(this.isActive){this.pause()}else if(e){this.play(true)}else{this.play()}return this};this.reset=function(){this.isActive=false;this.play(true);return this};this.clearTimer=function(){window.clearTimeout(this.timeoutObject)};this.setTimer=function(e){var t=this;if(typeof this.action!="function"){return}if(isNaN(e)){e=this.intervalTime}this.remaining=e;this.last=new Date;this.clearTimer();this.timeoutObject=window.setTimeout(function(){t.go()},e)};this.go=function(){if(this.isActive){this.action();this.setTimer()}};if(this.init){return new $.timer(func,time,autostart)}else{this.set(func,time,autostart);return this}}})(jQuery)

var query 	  		= "";	//Search query
var count     		= 100;	//How many results are returned
var start    		= 0;	//Show results starting at
var gameId			= "";	//Game App ID

var lowestPrice 	= 0;
var checkForLowest  = 0;

//Timer Variables
var incrementTime 	= 1000;
var startTime 		= 0
var currentTime;
var timer     		= $.timer(updateTimer, incrementTime, false); //Refresh Timer

$(document).ready(function(){
	//Setup
	$("#market_search").append('<div id="coolButton" style="text-align: right;padding-right: 15px;margin-top: 0.25em;"><div class="btn_black btn_details btn_small" id="market_search_advanced_show"><span><span style="float: left;">Cool Guy Search...</span><span class="btn_details_arrow down"></span></span></div></div>');
	$("div#coolButton").click(function() {
		replaceSearch();
		eventHandlers();
		$("#searchResults_controls").remove();
	});
});

function doSearchWithString(searchString)
{
	//Get the results and display them
	query = plusifyQuery(searchString);

	doSearch();
}

function doSearch()
{
	$("div.market_section_header > h2.market_section_title").text("Results for \""+query+"\"");
	getData(query, count, start);
}

function replaceSearch()
{

	//Search Box
	var html = "<input type='text' autocomplete='off' placeholder='Search' value='' id='replacedSearchBox' class='filter_search_box market_search_sidebar_search_box' /><button id='replacedSearchSubmit' class='market_search_submit_button' />";
	$(".market_search_box_container").html(html);

	//Game Buttons Box
	html = '<div id="browseItems"><div class="market_search_sidebar_contents"><h2 class="market_section_title">Browse by Game</h2><div class="market_search_game_button_group"><a class="game_button" href="http://steamcommunity.com/market/search?appid=730"><span class="game_button_edge game_button_left"></span><span class="game_button_contents"><span class="game_button_game_icon"><img alt="Counter-Strike: Global Offensive" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/730/69f7ebe2735c366c65c0b33dae00e12dc40edbe4.jpg"></span><span class="game_button_game_name">Counter-Strike: Global Offensive</span></span><span class="game_button_edge game_button_right"></span><span class="game_button_preload"></span></a><a class="game_button" href="http://steamcommunity.com/market/search?appid=570"><span class="game_button_edge game_button_left"></span><span class="game_button_contents"><span class="game_button_game_icon"><img alt="Dota 2" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/570/0bbb630d63262dd66d2fdd0f7d37e8661a410075.jpg"></span><span class="game_button_game_name">Dota 2</span></span><span class="game_button_edge game_button_right"></span><span class="game_button_preload"></span></a><a class="game_button" href="http://steamcommunity.com/market/search?appid=753"><span class="game_button_edge game_button_left"></span><span class="game_button_contents"><span class="game_button_game_icon"><img alt="Steam" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/753/135dc1ac1cd9763dfc8ad52f4e880d2ac058a36c.jpg"></span><span class="game_button_game_name">Steam</span></span><span class="game_button_edge game_button_right"></span><span class="game_button_preload"></span></a><a class="game_button" href="http://steamcommunity.com/market/search?appid=440"><span class="game_button_edge game_button_left"></span><span class="game_button_contents"><span class="game_button_game_icon"><img alt="Team Fortress 2" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/440/e3f595a92552da3d664ad00277fad2107345f743.jpg"></span><span class="game_button_game_name">Team Fortress 2</span></span><span class="game_button_edge game_button_right"></span><span class="game_button_preload"></span></a></div></div></div>';
	$("div#sideBar").append(html);
	
	//Game Buttons
	var buttons = $(".market_search_game_button_group").find("a.game_button");
	buttons.each(function(){
		var appid 	   = $(this).attr("href");
		var leftIndex  = appid.indexOf("appid=") + 6;
		appid          = appid.substring(leftIndex);

		$(this).attr("appid", appid);
		$(this).attr("href", "#");
	});

	//Refresh Box
	html = "<div id='refresh'><div class='market_search_sidebar_contents'><h2 class='market_section_title'>Refresh</h2><div class='market_refresh_box_container'><input type='text' autocomplete='off' placeholder='Refresh every X seconds' value='' id='replacedRefreshBox' class='filter_search_box market_search_sidebar_search_box' /><br/><input id='alert1' type='checkbox' checked/>Alert me if lowest price changes<br/><input id='alert2' type='checkbox' checked/>Alert if price is lower than<br/><input type='text' autocomplete='off' placeholder='$' value='' id='replacedPriceBox' class='filter_search_box market_search_sidebar_search_box' align='left' style='width: 30px;'/><br/><input id='alert3' type='checkbox' checked/>Sound?<br/><button id='replacedRefreshButton' class='refreshButton'>Refresh</button><button id='replacedCancelButton' class='cancelButton'>Cancel</button></div></div>";
	$("div#sideBar").append(html);

	$("button#replacedCancelButton").hide();
	
	//Sound player
	$("body").append("<audio id='audio1' src='http://a.audiour.com/pglfwdfh.ogg' width='300' height='32' controls='controls'></audio>");
	$("body").append("<audio id='audio2' src='http://audiour.com/vehudcdv.ogg' width='300' height='32' controls='controls'></audio>");
}

function getData(query, count, start)
{
	$.getJSON("http://steamcommunity.com/market/search/render?query="+query+"&count="+count+"&start="+start+"&appid="+gameId, function(data, status)
	{
		if(data.results_html)
			build(data);
	});
}

function build(data)
{
	var html = data.results_html;
	html = $(html);

	$("span#searchResults_start").text(start+1);
	$("span#searchResults_end").text(count > data.total_count ? data.total_count : count);
	$("span#searchResults_total").text(data.total_count);

	var items = html.find(".market_listing_their_price > .market_table_value > span");
	items.each(function(){

		//add price attribute for easier manipulation
		var leftIndex  = this.innerHTML.indexOf("$");
		var rightIndex = this.innerHTML.indexOf(" USD");
		if(rightIndex>-1)
			var price      = this.innerHTML.substring(leftIndex+1,rightIndex);
		else
			var price      = this.innerHTML.substring(leftIndex+1);
		$(this).parents("a").attr("price", price);
		$(this).parents("a").attr("target", "_blank");
	});

	$("div#searchResultsRows").html(html);

	$("div#searchResultsRows > a").tsort({attr:"price"});
	
	 lowestPriceAlert();
}

function lowestPriceAlert()
{
	if(lowestPrice)
	{
		var currentLowestPrice = $("div#searchResultsRows > a").attr("price");

		if(currentLowestPrice != null) {
			if(currentLowestPrice <= checkForLowest && $("input#alert2").is(':checked'))
			{
				if($("input#alert3").is(':checked'))
					$('#audio2').get(0).play();
				alert("BUY BUY BUY");
			}
			else if(currentLowestPrice != lowestPrice && $("input#alert1").is(':checked'))
			{
				if($("input#alert3").is(':checked'))
					$('#audio1').get(0).play();
			}
		}
	}
	lowestPrice = currentLowestPrice;
}

//************* Utility *************//
function plusifyQuery(text)
{
	return text.replace(/\s/g, "+");
}

//************* Timer *************//
function updateTimer()
{
		// If timer is complete, trigger alert
        if (currentTime == 0) {
            doSearch();
            currentTime = startTime;
            return;
        }

        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;

        document.title = currentTime/1000 + " seconds until refresh";
        $("input#replacedRefreshBox").val(currentTime/1000 + " seconds until refresh")
}

//************* EVENT HANDLERS *************//
function eventHandlers()
{
	//Search button press
	$("button#replacedSearchSubmit").click(function() {
		searchEvent();
	});

	$('input#replacedSearchBox').keypress(function(event) {
		if(event.keyCode == 13) {
			searchEvent();
		}
	});

	function searchEvent()
	{
		var search = $("input#replacedSearchBox").val();
		cancelEvent();
		doSearchWithString(search);
	}

	//appid buttons
	$("a.game_button").click(function(e) {
		$("a.game_button").each(function() {
			$(this).css({"border":"#6B9240 0px solid"});
		});
		$(this).css({"border":"#6B9240 2px solid"});
		$(this).css({"border-radius":"5px"});
		gameId = $(this).attr("appid");
		e.preventDefault();
		return false;
	});

	//Refresh button press
	$("button#replacedRefreshButton").click(function() {
		refreshEvent();
	});

	$('input#replacedRefreshBox').keypress(function(event) {
		if(event.keyCode == 13) {
			refreshEvent();
		}
	});

	$('input#replacedPriceBox').keypress(function(event) {
		if(event.keyCode == 13) {
			refreshEvent();
		}
	});

	function refreshEvent()
	{
		if(query)
		{
			$("button#replacedRefreshButton").hide();
			$("button#replacedCancelButton").show();
			$("div.market_refresh_box_container > input").prop("disabled", true);
			$("select#proxySelect").prop("disabled", true);

			var refreshTime = $("input#replacedRefreshBox").val();
			refreshTime = refreshTime.replace(/\D/g,'');

			if(refreshTime < 10)
				refreshTime = 10;
				
			lowestPrice    = $("div#searchResultsRows > a").attr("price");
			checkForLowest = $("input#replacedPriceBox").val();
			checkForLowest = parseInt(checkForLowest.replace(/[^0-9\.]/g,'')); 
			$("input#replacedPriceBox").val(checkForLowest + "$");

			startTime 	= refreshTime * 1000;
			currentTime = startTime;
			timer.play(true);
		}

	}

	//Refresh Cancel button press
	$("button#replacedCancelButton").click(function() {
		cancelEvent();
	});

	function cancelEvent()
	{
		$("button#replacedCancelButton").hide();
		$("button#replacedRefreshButton").show();
		$("div.market_refresh_box_container > input").prop("disabled", false);
		$("select#proxySelect").prop("disabled", false);

		if(startTime)
			$("input#replacedRefreshBox").val(startTime/1000);
		document.title = "Steam Community Market";

		lowestPrice    = 0;
		checkForLowest = 0;

		timer.stop();
	}
}

console.log("Gilbert's cool guy search ran correctly.");