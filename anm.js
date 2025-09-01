var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "El verano vino y se fue", time: 9 },
  { text: "Los inocentes nunca pueden durar", time: 14 },
  { text: "Despiértame cuando septiembre termine", time: 18 },
  { text: "Así como mi padre se fue", time: 28 },
  { text: "Siete años han pasado muy rápido", time: 33 },
  { text: "Despiértame cuando septiembre termine", time: 37 },
  { text: "Aquí viene la lluvia otra vez", time: 46 },
  { text: "Cayendo de las estrellas", time: 50 },
  { text: "Empapado en mi dolor otra vez", time: 55 },
  { text: "Convirtiéndonos en lo que somos", time: 59 },
  { text: "Mientas mi memoria descansa", time: 64 },
  { text: "Pero nunca olvida lo que perdí", time: 79 },
  { text: "Despiértame cuando septiembre termine", time: 73 },
  { text: "El verano vino y se fue", time: 96 },
  { text: "Los inocentes nunca pueden durar", time: 101 },
  { text: "Despiértame cuando septiembre termine", time: 105 },
  { text: "Suenen las campanas otra vez", time: 114 },
  { text: "Como hicimos cuando comenzó la primavera", time: 118 },
  { text: "Despiértame cuando septiembre termine", time: 123 },
  { text: "Aquí viene la lluvia otra vez", time: 133 },
  { text: "Cayendo de las estrellas", time: 137 },
  { text: "Empapado en mi dolor otra vez", time: 142 },
  { text: "Convirtiéndonos en lo que somos", time: 146 },
  { text: "Mientras mi memoria descansa", time: 151 },
  { text: "Pero nunca olvida lo que perdí", time: 156 },
  { text: "Despiértame cuando septiembre termine", time: 160 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);


function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 216000);