const form = document.querySelector(".main");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");
const a5 = document.querySelector("#a5");
const a6 = document.querySelector("#a6");
const a7 = document.querySelector("#a7");
const b1 = document.querySelector(".a1");
const b2 = document.querySelector(".a2");
const b3 = document.querySelector(".a3");
const b4 = document.querySelector(".a4");
const b5 = document.querySelector(".a5");
const b6 = document.querySelector(".a6");
const b7 = document.querySelector(".a7");

document.querySelector(".input").oninput = function () {
  let val = this.value.trim();
  let menu = document.querySelectorAll('.menu li');
  if (val != '') {
    menu.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      }
      else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(val), val.lenght);
      }
    });
  }
  else {
    menu.forEach(function (elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
      return menu;
    });
  }
};

function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + string.slice(pos + len) + "</mark>";
};

a1.addEventListener("click", (ev) => {
  b1.classList.toggle("hide");
  form.classList.add("hide");
});

a2.addEventListener("click", (ev) => {
  b2.classList.toggle("hide");
  form.classList.add("hide");
});

a3.addEventListener("click", (ev) => {
  b3.classList.toggle("hide");
  form.classList.add("hide");
});

a4.addEventListener("click", (ev) => {
  b4.classList.toggle("hide");
  form.classList.add("hide");
});

a5.addEventListener("click", (ev) => {
  b5.classList.toggle("hide");
  form.classList.add("hide");
});

a6.addEventListener("click", (ev) => {
  b6.classList.toggle("hide");
  form.classList.add("hide");
});

a7.addEventListener("click", (ev) => {
  b7.classList.toggle("hide");
  form.classList.add("hide");
});