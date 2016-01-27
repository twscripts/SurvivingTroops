// ==UserScript==
// @name        Overlevende Troepen
// @namespace   kc-productions.org
// @include     https://*.tribalwars.*/game.php?*&screen=report*
// @version     1.4
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
  var oda = [4,5,1,5,1,5,6,23,4,12,40,200];
  var result = 0;

  for(var i=0; i<oda.length;i++){
    result += oda[i] * array[i];
  }

  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ODA: " + result;
  cell1.style.fontWeight = 'bold';

}
function calcODD(array, table){
  var odd = [1,2,4,2,2,13,12,15,8,10,20,200];
  var result = 0;

  for(var i=0; i<odd.length;i++){
    result += odd[i] * array[i];
  }

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
