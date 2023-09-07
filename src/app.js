/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const ExcusaRandom = () => {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    const excusaAleatoria = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    document.getElementById("excusa").textContent = excusaAleatoria;
  };

  const botonExcusa = document.getElementById("generarExcusa");
  botonExcusa.addEventListener("click", ExcusaRandom);

  ExcusaRandom();
  console.log("Hello Rigo from the console!");
};
