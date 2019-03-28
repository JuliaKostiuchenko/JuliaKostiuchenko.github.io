var arr = null;
function load() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = processD;
	httpRequest.open('GET','https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', true);
	httpRequest.send(null);
}
function processD() {
	if (this.readyState == 4) {
		if (httpRequest.status == 200) {
			var result = JSON.parse(httpRequest.responseText);
			arr = result;
		} else {
			//
		}
	}
}
function get(){
	console.log(arr);
	var enter = document.getElementById('amount').value;
	console.log(enter);
	for (var i = 0; i < arr.length; i++){
	var obj = arr[i];
	var cur = document.getElementById('currencyCode');
	if (cur.options[cur.selectedIndex].value == obj.cc) {
		var resenter = enter/obj.rate;
		var res = document.getElementById('convertedAmount');
		res.value = resenter;
	}
}}

//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json