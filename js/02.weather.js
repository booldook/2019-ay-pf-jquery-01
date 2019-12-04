// 도시정보 가져오기
$.ajax({
	url: '../json/city.json',
	success: getCity
});

function getCity(res) {
	/*
	for(var i=0; i<res.cities.length; i++) {
		$("#cityId").append('<option value="'+res.cities[i].id+'">'+res.cities[i].name+'</option>');
	}
	for(v of res.cities) {
		$("#cityId").append('<option value="'+v.id+'">'+v.name+'</option>');
	}
	*/
	for(i in res.cities) {
		$("#cityId").append('<option value="'+res.cities[i].id+'">'+res.cities[i].name+'</option>');
	}
}

// 화면전환
function uiChg(view) {
	switch(view) {
		case "Daily":
			$(".main-wrap").hide();
			$(".daily-wrap").show();
			$(".weekly-wrap").hide();
			$(".nav-item").removeClass("active");
			$(".nav-item").eq(1).addClass("active");
			break;
		case "Weekly":
			$(".main-wrap").hide();
			$(".daily-wrap").hide();
			$(".weekly-wrap").show();
			$(".nav-item").removeClass("active");
			$(".nav-item").eq(2).addClass("active");
			break;
		default :
			$(".main-wrap").show();
			$(".daily-wrap").hide();
			$(".weekly-wrap").hide();
			$(".nav-item").removeClass("active");
			$(".nav-item").eq(0).addClass("active");
			break;
	}
}

// 이벤트
$(".nav-item").click(function(){
	uiChg($(this).data("view"));
});

$("#cityId").change(function(){
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather",
		data: {
			id: $(this).val(),
			appid: "02efdd64bdc14b279bc91d9247db4722",
			units: "metric"
		},
		success: chgDaily
	});
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast",
		data: {
			id: $(this).val(),
			appid: "02efdd64bdc14b279bc91d9247db4722",
			units: "metric"
		},
		success: chgWeekly
	});
});

function chgDaily(res) {
	$(".daily-wrap .title").html(res.name);
	$(".daily-wrap .icon").attr("src", "http://openweathermap.org/img/wn/"+res.weather[0].icon+"@2x.png");
	$(".daily-wrap .temp").html(res.main.temp);
	$(".daily-wrap .forecast").html(res.weather[0].description);	
	$(".nav-item").eq(1).trigger("click");
}

function chgWeekly(res) {
	console.log(res);
	$(".weekly-wrap .title").html(res.city.name);
	for(var i in res.list) {
		icon = "http://openweathermap.org/img/wn/"+res.list[i].weather[0].icon+"@2x.png";
		html 	= '<ul class="d-flex justify-content-between align-items-center p-2 border-bottom">';
		html += '<li style="flex:20% 0 0"><img src="'+icon+'" alt="icon" class="icon"></li>';
		html += '<li style="flex:75% 0 0">';
		html += '<div>날짜: <span class="time">'+new Date(res.list[i].dt * 1000)+'</span></div>';
		html += '<div>온도: <span class="temp">'+res.list[i].main.temp+'도</span></div>';
		html += '<div>날씨: <span class="forecast">'+res.list[i].weather[0].description+'</span></div>';
		html += '</li>';
		html += '</ul>';
		$(".weekly-lists").append(html);
	}
}