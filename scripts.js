function selectDish(food) {
  const botao = document.querySelector(".dish.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function selectDrink(food) {
  const botao = document.querySelector(".drink.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function selectDissert(food) {
  const botao = document.querySelector(".dissert.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function checkList() {
  const botao = document.querySelector(".dish.checked");
  const botao2 = document.querySelector(".drink.checked");
  const botao3 = document.querySelector(".dissert.checked");

  if (botao !== null && botao2 !== null && botao3 !== null) {
    console.log("habilitar");
  }
}
