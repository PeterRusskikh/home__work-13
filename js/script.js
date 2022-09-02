$(document).ready(function () {
  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-9999");
  });
});


function changeInputColor() {
  let inputs = document.querySelectorAll(".input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
      inputs[i].classList.toggle("background-white");
    });
  }
}

changeInputColor();


function getPrice2() {
  let pizza1 = {
    name: "Мясной Микс",
    cost: 300,
  };
  let pizza2 = {
    name: "Индейка с овощами гриль",
    cost: 400,
  };
  let pizza3 = {
    name: "Песто",
    cost: 500,
  };

  let pizzaArray = [pizza1, pizza2, pizza3];
  let sumOfOrderInDiv = document.querySelector(".sum-1");
  let mainInput = document.querySelectorAll("main input");

  for (let i = 0; i < mainInput.length; i++) {
    mainInput[i].addEventListener("change", function (e) {
      if (e.target.checked) {
        sumOfOrderInDiv.textContent =
          Number(sumOfOrderInDiv.textContent) + Number(pizzaArray[i].cost);
      } else {
        sumOfOrderInDiv.textContent =
          Number(sumOfOrderInDiv.textContent) - Number(pizzaArray[i].cost);
      }
    });
  }
}
getPrice2();

function makeBigNav() {
  let burger = document.querySelector(".burger");
  let headerList = document.querySelector(".header-list");
  let headerListItems = headerList.querySelectorAll(".header-list-item");
  burger.addEventListener("click", function () {
    headerList.classList.toggle("enabled");
    burger.classList.toggle("exit");
    for (let i = 0; i < headerListItems.length; i++) {
      headerListItems[i].classList.toggle("header-list-item-big");
    }
  });
}

makeBigNav();
