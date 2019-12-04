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

// 이벤트
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