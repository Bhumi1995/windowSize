"use strict";

onload = function getSize() {
  let w = this.document.documentElement.clientWidth;
  let h = this.document.documentElement.clientHeight;
  const widthHeight = document.getElementById("wh");
  if (w === 991 && h === 368) {
    widthHeight.style.fontSize = "1rem";
  } else if (w === 455 && h === 392) {
    widthHeight.style.fontSize = "1.5rem";
  } else {
    widthHeight.style.fontSize = "1rem";
  }
  widthHeight.innerHTML = `<h1> Width: ${w} <br/> Height: ${h} </h1>`;
  widthHeight.style.fontFamily = "Arial, Helvetica, sans-serif";
  window.addEventListener("resize", getSize);
};
