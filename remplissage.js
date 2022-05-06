

interpreteMeteo = function(t){
  var nom = t["name"];
  var T = t["main"]["temp"];
  var temps = t["weather"][0]["description"];
  var P = t["main"]["pressure"];
  var H = t["main"]["humidity"];
  var V = t.wind.speed;
  var D = t.wind.deg;
  var DCiel = t["weather"]["0"]["description"];
  
  var ville = document.getElementById("ville");
  ville["innerHTML"] = nom;
  var temp = document.getElementById("temp");
  temp["innerHTML"] = T;
  var Pression = document.getElementById("P");
  Pression["innerHTML"] = P;
  var humidite = document.getElementById("H");
  humidite["innerHTML"] = H;
  var vitesse = document.getElementById("V");
  vitesse["innerHTML"] = V;
  var dir = document.getElementById("Dir");
  dir["innerHTML"] = D;
  var dir = document.getElementById("DC");
  dir["innerHTML"] = DCiel;
}

go = function(arg){
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + arg.ville.value + ",France&units=metric&lang=fr&appid=e759acd75041488c1cead171614dd70c";
var promesse = fetch(url);
var jsonprom = promesse.then(function(r) {return r.json()});
jsonprom.then(interpreteMeteo);
}
