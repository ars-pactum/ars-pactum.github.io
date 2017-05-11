function init(){
  function createSTUDENT(first,last,type){
    this.first = first;
    this.last = last;
    this.type = last;
  }

  var pamela = new createSTUDENT('Pamela','Roux','Magician');

  var cast = document.getElementById('cast');
  cast.textContent = pamela.last;
}

// function pullINFO(KEYWORD) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//             setSTUDENT(this);
//     }
//   };
//   xhttp.open("GET", "catalog.xml", true);
//   xhttp.send();
// }
//
// function setSTUDENT(xml) {
//   var xmlSKILL;
//   var xmlDOC = xml.responseXML;
//   var x = xmlDOC.getElementsByTagName("student");
//   for (i = 0; i <x.length; i++) {
//       var n = x[i].getElementsByTagName("fname")[0].childNodes[0].nodeValue;
//       var l = x[i].getElementsByTagName("lname")[0].childNodes[0].nodeValue;
//       xmlSKILL += n + ",";
//       xmlSKILL += l + "<br>";
//
//   }
//     document.getElementById("cast").innerHTML = xmlSKILL;
// }



window.onload = init;
