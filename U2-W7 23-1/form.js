let dati = (event) => {
  let nome = document.getElementById("name");
  let cognome = document.getElementById("surname");
  let data = document.getElementById("dataNascita");
  let table = document.querySelector("table");
  table.innerHTML += `<tr><td>${nome.value + " " + cognome.value + " " + data.value}</td></tr>`;
};
