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
		success: function(res){
			console.log(res);
		}
	});
});