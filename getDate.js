
function getDate()
{
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var str = "";
    var newDate = str.concat(month+1, " / ", day, " / ", year);
    document.getElementById("date").innerHTML = newDate;
}
