//use system date to establish a baseline date, +1 year
//use baseline to count how many days played


var name = document.getElementById("name").innerHTML = prompt("Please log in:");
let knownWorlds = [];

var researchButton = document.getElementById("research");
var findWorldsButton = document.getElementById("findWorlds");
var viewWorldsButton = document.getElementById("viewWorlds");
var exitButton = document.getElementById("exit");
findWorldsButton.onclick = function() {generateWorld()};
viewWorldsButton.onclick = function() {listWorlds(knownWorlds)};
exitButton.onclick = function() {exit()};

function exit() {
  alert("Thank you for your contribution, "+name);
}
//document.getElementById("p1").innerHTML = "New text!";
function generateWorld () {
    var newWorld = intelGenerator()+"I-"+atmoGenerator()+"A.";
    // check if world class exists in knownWorlds
    let newLength = knownWorlds.push(newWorld);
    /*
    NI-NA No Intel Natural Atmo
    II-NA Initial Intel Natural Atmo
    YI-NA Young Intel Natural Atmo
    SI-NA Sophisticated Intel Natural Atmo
    NI-DA No Intel Dead Atmo
    II-DA Initial Intel Dead Atmo
    YI-DA Young Intel Dead Atmo
    SI-DA Sophisticated Intel Dead Atmo

    LIFE REQUIRES PHOSPHORUS OR REPLACEMENT FOR DNA - Joe Scott
    */
    alert("You discovered a world of classification "+newWorld);
}

/*
function addToLog() {
  // if newWorld class already exists in knownWorlds
  //edit newWorld to include an integer
}
*/

function hideButton() {
  if (knownWorlds.length>=1) {
     researchButton.style.display="inline-block";
      }
  else {
    researchButton.style.display="none";
  }
}

function listWorlds(list) {
    var k = list.length;
    var i=0;
    if (k >= 1 && i <= k) {
      for (i=0; i <= k;) {
        console.log(knownWorlds[i]);
        i++;
      }
    }
    else {
      alert("You have not found any worlds.");
    }
}

//upon exit click
//alert("Thank you for your contribution, "+userName);


function intelGenerator() {
    var valIntel = Math.round((Math.random()*100)+1);
    var intelligenceType;
    if (valIntel >= 99) {
        intelligenceType = "S";
    }
    else if (valIntel >= 95) {
        intelligenceType = "Y";
    }
    else if (valIntel >= 50) {
        intelligenceType = "I";
    }
    else {
        intelligenceType = "Z";
    }
    return intelligenceType;
}

function atmoGenerator () {
    var valAtmo = Math.round((Math.random()*100)+1);
    var atmoType;

    if (valAtmo >= 90) {
        atmoType = "N";
    }
    else if (valAtmo >= 20) {
        atmoType = "D";
    }
    else {
        atmoType = "Z";
    }
    return atmoType;
}

function atmoDetails(atmoType) {
  var atmoDetail;
  if (atmoType == "N") {
    atmoDetail = "This world has a \"Natural\" atmosphere, similar in composition to Earth's atmosphere.";
    return atmoDetail;
  }
}
