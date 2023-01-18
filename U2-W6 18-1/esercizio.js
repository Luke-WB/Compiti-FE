const transform = (event) => {
  const button = document.querySelector(".button btn btn-primary");
  const img = document.querySelector("img");
  if (button === null) {
    img.classList.add("ruota");
  }
};

const transformReverse = (event) => {
  const button = document.querySelector(".button btn btn-secondary");
  const img = document.querySelector("img");
  if (button === null) {
    img.classList.remove("ruota");
  }
};
