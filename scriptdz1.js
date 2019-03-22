var x1 = +prompt('Введите первое значение', '');
var y1 = +prompt('Введите последнее значение', '');
function displayEvenNumbers(x,y){
for (var i = x; i <= y; i++) {
	if (i % 2 == 0) {
	console.log(i);
}}}
displayEvenNumbers(x1,y1);