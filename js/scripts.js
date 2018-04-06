// business logic

// Pizza object constructor w properties size, toppings
function Pizza(size, veggies) {
  this.size = size;
  this.veggies = veggies;
}

// prototype method cost pizza size, toppings
Pizza.prototype.priceCost = function() {
  var price = "";
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
  // calculate toppings price
  var veggiePrice = (this.veggies.length * 1);

// calculate final cost
  var pizzaPrice = price + veggiePrice;
  return "$" + pizzaPrice;
}


// ui logic

$(document).ready(function(){

// submit button
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    $(".output").show();
    $(".kiki1").show();

    // variables size and veggies from input

    var size = $('.size-value:checked').val();

    var veggies = [];
    var veggyCheckedInputs = $('.veg-group:checked');
    veggyCheckedInputs.each(function() {
      var veggy = $(this).val();
      veggies.push(veggy);
    });

    var pizza = new Pizza(size, veggies);
    $("#pizza-output").html("Pizza: " + size + ", " + veggies + ", " + "Cost: " + pizza.priceCost());

    $('.size-value:checked').prop('checked', false);
    $('.veg-group:checked').prop('checked', false);
  });

});
