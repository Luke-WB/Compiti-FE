const addNewList = () => {
  const list = document.querySelector("ul");
  const newLi = document.createElement("li");
  const valoreInput = document.querySelector("input").value;
  const text = document.createTextNode(valoreInput);

  list.appendChild(newLi);
  newLi.appendChild(text);
};

const removeNewList = () => {
  const newLiRemove = document.querySelector("li");
  newLiRemove.remove();
};

const listCompletata = () => {
  const list = document.querySelector("ul");
  list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });
};
