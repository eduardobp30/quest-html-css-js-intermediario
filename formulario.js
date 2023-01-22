"use strict";

const inputs = document.querySelectorAll(".input");
const campos = document.querySelectorAll(".campo");
const form = document.querySelector("[name='form']");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  campos.forEach(function (item) {
    if (item.classList.contains("borda-vermelha")) {
      item.classList.replace("borda-vermelha", "borda-preta");
    } else if (item.classList.contains("borda-verde")) {
      item.classList.replace("borda-verde", "borda-preta");
    }
  });
  campos.forEach(function (item, i) {
    if (inputs[i].children[1].classList.contains("campo-obrigatorio-ativo")) {
      inputs[i].children[1].classList.replace(
        "campo-obrigatorio-ativo",
        "campo-obrigatorio-inativo"
      );
    }
  });
  campos.forEach(function (item, i) {
    if (item.value === "") {
      item.classList.replace("borda-preta", "borda-vermelha");
      inputs[i].children[1].classList.replace(
        "campo-obrigatorio-inativo",
        "campo-obrigatorio-ativo"
      );
    } else {
      item.classList.replace("borda-preta", "borda-verde");
    }
  });
});
