function init(){
 document.getElementById('cast').innerHTML = pamela.last;
}
function student(last, first, type){
  this.last  = last;
  this.first = first;
  this.type  = type;
  console.log(this.last);
}

var pamela = new student(roux, pamela, magician);

window.onload = init;
