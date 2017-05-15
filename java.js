function init(){
  generateEQUIP();
}

function createEQUIP(name, body, bodylr, sta, cap, str,mag,spd,def,effect,desc,location){
  this.name   = name;
  this.body   = body;
  this.sta    = sta;
  this.cap    = cap;
  this.str    = str;
  this.mag    = mag;
  this.spd    = spd;
  this.def    = def;
  this.effect = effect;
  this.desc   = desc;
  this.loc    = location;
}

var listEQUIP = [];
listEQUIP[0] = new createEQUIP("excalibur","weapon","","0","","3","1","2","","effect","legendary sword","california");

function generateEQUIP(){
  var equip = "";
  var i = "";
  for (i = 0; i < listEQUIP.length; i++) {
    equip += listEQUIP[i].name;
  }
  document.getElementById('testing').innerHTML = equip;
}

window.onload = init;
