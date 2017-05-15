function init(){
  generateCast("all");
  document.getElementById('all').onclick = function(){generateCast("all");};
  document.getElementById('Magician').onclick = function(){generateCast("Magician");};
  document.getElementById('Human').onclick = function(){generateCast("Human");};
  document.getElementById('Entity').onclick = function(){generateCast("Entity");};
  document.getElementById('NPC').onclick = function(){generateCast("NPC");};

  createINFORMATION("Pamela","Roux","4/21/1946","Magician","Light","Upper Sixth Form Student");
  createINFORMATION("Christoph","Payne","12/3/1954","Human","Earth","First Form Student");
  createINFORMATION("Basil","Payne","12/3/1954","Magician, T4","Earth","English Literature Professor");
  createINFORMATION("Aelia","Alberhect","12/3/1954","Magician","Electricity","Undergradate Student");

  document.getElementById('info_Pamela').style.display = "flex";
  generateLINK('f-link-1','mainLINK');
  generateLINK('f-link-2','eventLINK');
  generateLINK('f-link-3','blockLINK');
  generateLINK('link-1','mainLINK');
  generateLINK('link-1','eventLINK');
  generateLINK('link-1','blockLINK');


}
function myF(abc){
  var aaa = document.getElementById(abc);
  var all = document.getElementsByClassName('info_character');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }
  if (aaa.style.display == "none"){
    aaa.style.display = "flex";
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
function createNPC(first,last,type, image, desc){
  this.first    = first;
  this.last     = last;
  this.type     = "NPC";

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

tableINFO += "<tr><td colspan=\"2\">"+info+"</td></tr>";
tableINFO += "<tr><td colspan=\"2\">"+name+"</td></tr>";
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
    studentBODY[6] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');
    studentBODY[7] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');
    studentBODY[8] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');
    studentBODY[9] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');
    studentBODY[10] = new createSTUDENT('Rabbit','','E','img/thumb_rabbit.png','');
    studentBODY[11] = new createNPC('Basil','Payne','NPC','img/thumb_christoph.png','');

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

function createLINK(display,hyperlink,desc){
  this.link = "<a href=\"" + hyperlink + "\">" + display + "</a>" + "<p>" + desc +  "</p>";
}



function generateLINK(where,links){
  var list = "";
  var i =0;
  var docLINK = [];
  if (links == "mainLINK"){
    docLINK[0] = new createLINK('Joining',  'https://docs.google.com/document/d/1RhU5Cx8verBEfpb7okc4unbG7-e3HiY4V1ZMZtK9I8o/edit?usp=sharing#heading=h.rm60uadpnsno','How to Join');
    docLINK[1] = new createLINK('Handbook',  'https://docs.google.com/document/d/1RhU5Cx8verBEfpb7okc4unbG7-e3HiY4V1ZMZtK9I8o/edit?usp=sharing','Main Handbook');
    docLINK[2] = new createLINK('Chatroom',  'http://chat.deviantart.com/chat/arspactum','');
    docLINK[3] = new createLINK('Inventory',  'https://docs.google.com/spreadsheets/d/1i-_tX5PRas9vS0IER5GGl8BUPjevELigOzsc5GnZb8I/edit?usp=sharing','Spreadsheet to Inventory');
    docLINK[4] = new createLINK('Labyrinth', 'https://docs.google.com/spreadsheets/d/1kF-j8obN4o5cwRNt8XWM0C-GVd7hSTfpV1uHwhR93xE/edit?usp=sharing','Extended Reading for Labyrinth');
  }else if( links == "eventLINK"){
    docLINK[0] = new createLINK('Event 001','#','Autumn Equinox');
    docLINK[1] = new createLINK('Event 002','#','Bonfire Night');
    docLINK[2] = new createLINK('Event 002.1','#','Souling and Guising');
    docLINK[3] = new createLINK('Event 003','#','Beaver Moon');
    docLINK[4] = new createLINK('Event 004','#','Square One');
    docLINK[5] = new createLINK('Event 005','#','Valentine\'s Day Vinery');
  }else if( links == "blockLINK"){
    docLINK[0] = new createLINK('Block 000','#','Scuttlespore');
    docLINK[1] = new createLINK('Block 001.1','#','Apples');
    docLINK[2] = new createLINK('Block 001.2','#','Apples');
  }
  for(i = 0; i < docLINK.length; i++){
    list += "<li>"+docLINK[i].link+"</li>";
  }
  document.getElementById(where).innerHTML += list;
}





window.onload = init;
