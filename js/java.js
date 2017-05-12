function init(){
  generateCast("all");
  document.getElementById('all').onclick = function(){generateCast("all");};
  document.getElementById('Magician').onclick = function(){generateCast("Magician");};
  document.getElementById('Human').onclick = function(){generateCast("Human");};
  document.getElementById('Entity').onclick = function(){generateCast("Entity");};

createINFORMATION("Pamela","Roux","4/21/1946","Magician","Light","s");
createINFORMATION("Christoph","Payne","12/3/1954","Human","Earth","s");
createINFORMATION("Aelia","Alberhect","12/3/1954","Magician","Electricity","s");



}
function myF(abc){
  var aaa = document.getElementById(abc);
  var all = document.getElementsByClassName('info_character');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }
  if (aaa.style.display == "none"){
    aaa.style.display = "block";
  }else{
    aaa.style.display = "none";
  }

}
function createSTUDENT(first,last,type, image, desc){
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
  if (this.last === ""){
    this.name   = first;
  }else{
    this.name   = last + ", " + first;
  }

  this.namespan = "<span class='hello'>" + this.name + "</span> ";

  this.image    = "<img src=\""+image+"\" >";
  this.id       = "thumb_"+first;
  this.info       = "info_"+first;
  this.link     = " <button id=\""+this.id+"\" onclick=myF(\""+this.info+"\")>"+this.image+"</button> ";



}
function createINFORMATION(first,last, birthday, type, magic, info){
  var name = first + " "+ last;
  var d = new Date(birthday);
  var year = d.getFullYear();
  var age = 1966 - year;
  var tableINFO ="";
  var tableID = 'tbl_'+first;

tableINFO += "<tr><td>Name</td><td>"+name+"</td></tr>";
tableINFO += "<tr><td>Age</td><td>"+age+"</td></tr>";
tableINFO += "<tr><td>Birthday</td><td>"+birthday+"</td></tr>";
tableINFO += "<tr><td>Type</td><td>"+type+"</td></tr>";
tableINFO += "<tr><td>Magic</td><td>"+magic+"</td></tr>";


  document.getElementById(tableID).innerHTML = tableINFO;
}


function generateCast(type){
  var studentBODY = [];
    studentBODY[0] = new createSTUDENT('Pamela','Roux','M','img/thumb_pamela.png','');
    studentBODY[1] = new createSTUDENT('Lamont','D\'Reichier','M','img/thumb_lamont.png','');
    studentBODY[2] = new createSTUDENT('Christoph','Payne','H','img/thumb_christoph.png','');
    studentBODY[3] = new createSTUDENT('Marjorie','Wolfe','H','img/thumb_marjorie.png','');
    studentBODY[4] = new createSTUDENT('Aelia','Alberhect','M','img/thumb_aelia.png','');
    studentBODY[5] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');

    var cast = document.getElementById('cast_thumbnail');

    var listbySURNAME = [];

    for (var i = 0; i < studentBODY.length; i++) {
      if(type == "all"){

        studentBODY[i].namespan += studentBODY[i].link;
        listbySURNAME.push(studentBODY[i].namespan);
      }
      else if(type == studentBODY[i].type){
        // studentBODY[i].namespan += studentBODY[i].link +studentBODY[i].type+studentBODY[i].image;
        studentBODY[i].namespan += studentBODY[i].link;
        listbySURNAME.push(studentBODY[i].namespan);
      }
    }
    cast.innerHTML = listbySURNAME.sort().join('');
}






window.onload = init;
