
function getDate()
{
    var date = new Date().toJSON();
    var year = date.slice(0,4);
    var month = date.slice(5,7);
    var day = date.slice(8,10);
    var str = "";
    var newDate = str.concat(month, " / ", day, " / ", year);
    document.getElementById("date").innerHTML = newDate;
}
