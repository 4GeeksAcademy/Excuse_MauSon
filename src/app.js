/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarExcusa();

  document.getElementById("excusaBtn").addEventListener("click", generarExcusa);

  //Función para generar la frase de excusa aleatoria
  function generarExcusa() {
    let who = ["El Papa", "Pedrito Sánchez", "Milei", "Messi"];
    let action = ["rompe", "miente", "enamora", "se toca", "seduce"];
    let what = ["las pelotas", "un huevo", "descaradamente"];
    let when = [
      "durante el encuentro",
      "a diario",
      "durante la entrevista",
      "por la noche",
      "cuando reza"
    ];

    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    //Genero mi excusa aleatoria con las posiciones random anteriores
    let excusaFrase =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

    document.getElementById("excusa").innerHTML = excusaFrase;
  }
};
