// ==UserScript==
// @name        Overlevende Troepen
// @author      kefke44
// @namespace   https://github.com/coorenskevin/Tribalwars-Overlevende-troepen-in-berichten.
// @description Adds survivors to reports and shows gained ODA and ODD
// @icon        http://m.img.brothersoft.com/android/405/1352517939_icon.png
// @include     https://*.tribalwars.*/game.php?*&screen=report*
// @version     1.8
// @grant       none
// ==/UserScript==

// Start process
function survivors(table, deff){
  var row = table.insertRow(table.rows.length);

  if(deff==1){
    for(var c = 0; c<deffunits; c++){
      row.insertCell(c);
      var doden = new Array(deffunits);
    }
  }
  else{
    for(var c = 0; c<offunits; c++){
      row.insertCell(c);
      var doden = new Array(offunits);
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
  var killed = 0;

  for(var i=0; i<oda.length;i++){
    result += oda[i] * array[i];
    killed += array[i] * 1;
  }
  var row = table.insertRow(table.rows.length);
  var row2 = table.insertRow(table.rows.length);
  var cell2 = row2.insertCell(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "ODA: " + result;
  cell1.style.fontWeight = 'bold';

  cell2.innerHTML = "AVDD: " + killed;
  cell2.style.fontWeight = 'bold';

}
function calcODD(array, table){
  var result = 0;
  var killed = 0;

  for(var i=0; i<odd.length;i++){
    result += odd[i] * array[i];
    killed+= array[i]*1;
  }

  var row = table.insertRow(table.rows.length);
  var row2 = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row2.insertCell(0);
  cell1.innerHTML = "ODD: " + result + " aiaiai miserie miserie miserie";
  cell1.style.fontWeight = 'bold';
  cell2.innerHTML = "VVDD: " + killed;
  cell2.style.fontWeight = 'bold';
}

function setWorldVariables(world){
  if(world=='nl47'){
    odd = [1,2,4,2,13,15,8,10,200];
    oda = [4,5,1,1,5,23,4,12,200];
    deffunits = 10;
    offunits = 9;
  }
}

var odd = [1,2,4,2,2,13,12,15,8,10,20,200];
var oda = [4,5,1,5,1,5,6,23,4,12,40,200];
var deffunits = 13;
var offunits = 12;
var url = window.location.href;
var url_safe = url.replace('https://','');
var url_array = url_safe.split(".");
var world = url_array[0];
setWorldVariables(world);

var attack = document.getElementById("attack_info_att_units");
var deathByDefense = survivors(attack, 0);
var defense = document.getElementById("attack_info_def_units");
var deathByOffense = survivors(defense,1);
calcODA(deathByOffense, attack);
calcODD(deathByDefense, defense);
