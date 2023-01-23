const nome = document.getElementById("name");
const cognome = document.getElementById("surname");
const data = document.getElementById("data");

const Utente = function (nome, cognome, data) {
  this.nome = nome;
  this.cognome = cognome;
  this.data = data;
};

const utente = (event) => {
  const table = document.querySelector("table");
  table.innerHTML += `<tr><td>${nome.value + " " + cognome.value + " " + data.value}
  <i class="fa-solid fa-trash-can" onclick="rimozione(event)"></i></td></tr>`;
  const giova = new Utente(nome.value, cognome.value, data.value);
  console.log(giova);
};

const rimozione = (e) => {
  e.stopPropagation();
  e.target.parentElement.parentElement.remove();
};
