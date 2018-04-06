// business logic

// Pizza object constructor w properties size, toppings
function Pizza(size, veggies) {
  this.size = size;
  this.veggies = veggies;
}

// prototype method cost pizza depending on toppings
Pizza.prototype.priceCost = function() {
  var veggiePrice = (this.veggies.length * 1);

// conditional statement size cost
  if (this.size === 'tiny'){
    var price = 5;
  } else if (this.size === 'medium'){
    var price = 12;
  } else if (this.size === 'large'){
    var price = 17;
  } else if (this.size === 'gigantor'){
    var price = 23;
  }

// calculate final cost
  var pizzaPrice = price + priceCost;
  return pizzaPrice;
}

// ui logic
$(document).ready(function(){

// submit button
  $('form#pizza-order').submit(function(event){
  event.preventDefault();
  });

  // variables size and veggies from input
  var size = $('#size-value').prop('checked', true);

  var veggies = []
  $('input:checked').map(function(){
    return $(this).val();
    });

  var totalOrder = new Pizza(size, veggies);
  $('#pizza-output').text(totalOrder.pizzaPrice).val();

});
