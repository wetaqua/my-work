var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "animelist_1704986849_-_13175414.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, y, i, xlen, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    com = xmlDoc.getElementsByTagName("my_status").innerHTML;
   // x = xmlDoc.getElementsByTagName("book")[0];
    xlen = x.childNodes.length;
    y = x.firstChild;
    txt = "";
    for (i = 0; i < xlen; i++) {
        if (com == "completed") {
            txt = xmlDoc.getElementsByTagName("series_title").innerHTML;
            console.log(txt);
        }
        y = y.nextSibling;
    }
    //document.getElementById("demo").innerHTML = txt;
}