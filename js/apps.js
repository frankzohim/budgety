//BUDGET CONTROLLER
var budgetController = (function () {
  //Some code
})();

//UI CONTROLLER
var UIController = (function () {
  //Some code
})();

//GOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UIctrl) {
  var crtlAddItemEvent = function () {
    //1. Get the fields input data
    //2. Add the item to the budget controller
    //3. Add the new item to the UI
    //4. Calculate the budget
    //5. Display the budget on the UI
    console.log("ok");
  };
  document
    .querySelector(".add__btn")
    .addEventListener("click", crtlAddItemEvent);

  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      crtlAddItemEvent();
    }
  });
})(budgetController, UIController);
