// ==UserScript==
// @name        Overlevende Troepen
// @namespace   kc-productions.org
// @include     https://*.tribalwars.*/game.php?*&screen=report*
// @version     1.3
// @grant       none
// ==/UserScript==

function survivors(table, deff){
  var row = table.insertRow(table.rows.length);

  if(deff==1){
    for(var c = 0; c<13; c++){
      row.insertCell(c);
      var doden = new Array(13);
    }
  }
  else{
    for(var c = 0; c<12; c++){
      row.insertCell(c);
      var doden = new Array(12);
    }
  }

  var aantal = table.rows[table.rows.length-3];
  var gestorven = table.rows[table.rows.length-2];

  for (var j = 0, col; col = row.cells[j]; j++) {
    doden[j]=gestorven.cells[j+1].innerHTML;
    var survived = aantal.cells[j+1].innerHTML-gestorven.cells[j+1].innerHTML;
       col.innerHTML= survived;
       if(survived!=0){
         col.className = "unit-item unit-item-axe" ;
       }
       else{
         col.className = "unit-item unit-item-sword hidden";
       }
       col.style = "text-align:center";
     }
   var temp = row.insertCell(0);
   temp.innerHTML = "Overlevend:";
   temp.style.width = "20%";
   return doden;
}

function calcODA(array, table){
  var result = 0;
  result+=4*array[0];
  result+=5*array[1];
  result+=1*array[2];
  result+=5*array[3];
  result+=1*array[4];
  result+=5*array[5];
  result+=6*array[6];
  result+=23*array[7];
  result+=4*array[8];
  result+=12*array[9];
  result+=40*array[10];
  result+=200*array[11];

  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ODA: " + result;
  cell1.style.fontWeight = 'bold';

}
function calcODD(array, table){
  var result = 0;
  result+=1*array[0];
  result+=2*array[1];
  result+=4*array[2];
  result+=2*array[3];
  result+=2*array[4];
  result+=13*array[5];
  result+=12*array[6];
  result+=15*array[7];
  result+=8*array[8];
  result+=10*array[9];
  result+=20*array[10];
  result+=200*array[11];

  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ODD: " + result;
  cell1.style.fontWeight = 'bold';
}

var attack = document.getElementById("attack_info_att_units");
var deathByDefense = survivors(attack, 0);
var defense = document.getElementById("attack_info_def_units");
var deathByOffense = survivors(defense,1);
calcODA(deathByOffense, attack);
calcODD(deathByDefense, defense);
