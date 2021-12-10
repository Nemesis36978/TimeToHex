setInterval(function() {getTime();}, 100);

function getTime(){
    var d = new Date();
    var h = `${d.getHours()}`.padStart(2, '0');
    var m = `${d.getMinutes()}`.padStart(2, '0');
    var s = `${d.getSeconds()}`.padStart(2, '0');

    var displayDate = h + m + s;
    document.getElementById("time").innerHTML = displayDate;

    var color = '#' + displayDate.toString();
    document.body.style.backgroundColor = color;
}
