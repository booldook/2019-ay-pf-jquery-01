/* 
0. BOM(Browser Object Model)

jQuery
1. Selector - find(), children(), parent(), next(), prev(), eq(), index(), .each()
2. Event - .click(), mouseover(), mouseenter(), mouseleave(), scroll(), resize()
3. Dimension - width(), height(), innerWidth(), innerHeight(), outerWidth(), outerHeight()
4. Property - attr(), prop(), css(), addClass(), removeClass(), toggleClass()
5. Animation - show(), hide(), toggle(), fadeIn(), fadeOut(), fadeToggle(), slideDown(), slideUp(), slideToggle(), animate()
6. DOM(Document Object Model) - append(), apprendTo(), prepend(), prependTo(), .html(), empty(), remove()

js
1. ES5
2. ES6
*/

/* Selector */
var lists = document.querySelector(".lists");
var $lists = $(".lists");

console.log(	lists	);
console.log(	$lists	);
console.log(	$(lists).html()	);
console.log(	$lists[0].innerHTML	);
console.clear();

var $list = $(".list");
var list = document.querySelectorAll(".list");
console.log(list);

/*
for(var i=0, html; i<$list.length; i++) {
	html = "안녕하세요 " + $list.eq(i).html();
	$list.eq(i).html(html);
}

$(".list").each(function(){	
	$(this).html("안녕하세용 " + $(this).html());
});

for(var i=0, html; i<list.length; i++) {
	html = "안녕하세요 " + list[i].innerHTML;
	list[i].innerHTML = html;
}
*/

$("#btn1").click(function(){
	$(".list").each(function(){	
		$(this).html("안녕하세용 " + $(this).html());
	});
});

var scores = [
	{id: 1, name: "홍길동", kor: 85, eng: 95, math: 80},
	{id: 2, name: "홍길순", kor: 75, eng: 80, math: 70},
	{id: 3, name: "홍길만", kor: 95, eng: 68, math: 85},
	{id: 4, name: "홍길룡", kor: 80, eng: 76, math: 90},
	{id: 5, name: "홍길녀", kor: 87, eng: 82, math: 95},
];

console.log(scores);
console.log(JSON.stringify(scores));	// JS-Object -> json문자열
console.log(JSON.parse(JSON.stringify(scores))); // json문자열 -> JS-Object

$("#btnScore").click(function(){
	for(var i=0, html=''; i<scores.length; i++) {
		scores[i].tot = scores[i].kor + scores[i].eng + scores[i].math;
		scores[i].avg = (scores[i].tot/3).toFixed(2);
		html  = '<tr>';
		html += '<td>'+scores[i].id+'</td>';
		html += '<td>'+scores[i].name+'</td>';
		html += '<td>'+scores[i].kor+'</td>';
		html += '<td>'+scores[i].eng+'</td>';
		html += '<td>'+scores[i].math+'</td>';
		html += '<td>'+scores[i].tot+'</td>';
		html += '<td>'+scores[i].avg+'</td>';
		html += '</tr>';
		$("#scoreTb").find("tbody").append(html);
	}
});

$("#btnScoreRev").click(function(){
	$("#scoreTb").find("tbody").empty();
});


// 02efdd64bdc14b279bc91d9247db4722
// 1835848

$.ajax({
	url: "https://api.openweathermap.org/data/2.5/weather",
	type: "get",
	dataType: "json",
	data: {
		id: 1835848,
		appid: "02efdd64bdc14b279bc91d9247db4722",
		units: "metric"
	},
	success: function(res){
		console.log(res);
	}
});


