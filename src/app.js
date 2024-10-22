/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["the keys", "my homework", "the car"];
  let when = [
    "before the class",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const getRandomElemnt = listElements => {
    let element = "";
    element = listElements[Math.floor(Math.random() * listElements.length)];
    return element;
  };
  let excuseGen = document.querySelector("#excuse");
  console.log(excuseGen);
  excuseGen.innerHTML =
    getRandomElemnt(who) +
    " " +
    getRandomElemnt(action) +
    " " +
    getRandomElemnt(what) +
    " " +
    getRandomElemnt(when);
};
