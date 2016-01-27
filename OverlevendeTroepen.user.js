// ==UserScript==
// @name        Overlevende Troepen
// @namespace   kc-productions.org
// @include     https://*.tribalwars.*/game.php?*&screen=report*
// @version     1.2
// @grant       none
// ==/UserScript==

function survivors(table, deff){
  var row = table.insertRow(table.rows.length);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  if(deff==1){
    for(var c = 0; c<13; c++){
      row.insertCell(c)
    }
  }
  else{
    for(var c = 0; c<12; c++){
      row.insertCell(c)
    }
  }


  var aanval = new Array();
  var doden = new Array();
  var overlevend = new Array();
  var row2 = table.rows[table.rows.length-3];
  for (var j = 1, col; col = row2.cells[j]; j++) {
       aanval.push(col.innerHTML);
     }
   row2 = table.rows[table.rows.length-2];
   for (var j = 1, col; col = row2.cells[j]; j++) {
        doden.push(col.innerHTML);
      }
  for(var i=0; i<doden.length;i++){
    overlevend[i]=aanval[i]-doden[i];
  }
  var k = 0;
  for (var j = 0, col; col = row.cells[j]; j++) {
       col.innerHTML= overlevend[k];
       if(overlevend[k]!=0){
         col.className = "unit-item unit-item-axe" ;
       }
       else{
         col.className = "unit-item unit-item-sword hidden";
       }
       col.style = "text-align:center";
       k++;
     }
   var temp = row.insertCell(0);
   temp.innerHTML = "Overlevend:";
   temp.style.width = "20%";
}

var table = document.getElementById("attack_info_att_units");
survivors(table, 0);
table = document.getElementById("attack_info_def_units");
survivors(table,1);
