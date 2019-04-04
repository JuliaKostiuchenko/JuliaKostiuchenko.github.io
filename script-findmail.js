 function sendMail() {
    var an = document.getElementById("aname");
	var am = document.getElementById("amail");
	var at = document.getElementById("atema");
	var me = document.getElementById("amessage");
	if (an.value && am.value && at.value && me.value) {
		var link = 'mailto:'+am.value
					+'?subject='+at.value
					+'&body=Hello '+an.value+'. '+me.value;
    window.location.href = link;
	} else {alert('Недостатньо даних!');}
}

 function findSelect() {
	function replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	} 
    var af = document.getElementById("afind");
	if (af.value) {
		var words=af.value
	    var text=document.getElementById('main').innerHTML
	    var result=replaceAll(text, words,"<span style='background-color:Red; color:White;'>"+words+"</span>");
	    document.getElementById('main').innerHTML=result;
	} else {alert('Недостатньо даних!');}
}

 function findGoogle() {
    var af = document.getElementById("afind");
	if (af.value) {
		var link = 'https://www.google.com.ua/search?q=site:juliakostiuchenko.github.io+'+af.value;
		//window.location.href = link;
		window.open(link)
	} else {alert('Недостатньо даних!');}
}
