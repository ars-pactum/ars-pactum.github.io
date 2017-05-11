function init(){
  document.getElementById('all').onclick = function(){generateCast("all");};
  document.getElementById('Magician').onclick = function(){generateCast("Magician");};


}

function createSTUDENT(first,last,type){
  this.first    = first;
  this.last     = last;
  if(type       == "M"){
    this.type   = "Magician";
  }else if(type == "H"){
    this.type   = "Human";
  }else if(type == "E"){
    this.type   = "Entity";
  } else{
    this.type   = "Unknown";
  }
  this.name     = last + ", " + first;
  this.namespan = "<span class='hello'>" + this.name + "</span> ";
  this.link     = " <a href=\"#\">"+this.name+"</a> ";

}

function generateCast(type){
  var studentBODY = [];
    studentBODY[0] = new createSTUDENT('Pamela','Roux','M');
    studentBODY[1] = new createSTUDENT('Lamont','DeRechier','M');
    studentBODY[2] = new createSTUDENT('Christoph','Payne','H');
    studentBODY[3] = new createSTUDENT('Taesong','Jun','M');
    studentBODY[4] = new createSTUDENT('Aelia','Alberhect','M');

    var cast = document.getElementById('cast');
    var listbySURNAME = [];

    for (var i = 0; i < studentBODY.length; i++) {
      if(type == "all"){
        studentBODY[i].namespan += studentBODY[i].link +studentBODY[i].type;
        listbySURNAME.push(studentBODY[i].namespan);
      }
      else if(type == studentBODY[i].type){
        studentBODY[i].namespan += studentBODY[i].link +studentBODY[i].type;
        listbySURNAME.push(studentBODY[i].namespan);
      }


    }
    cast.innerHTML = listbySURNAME.sort().join('<br>');
}


window.onload = init;
