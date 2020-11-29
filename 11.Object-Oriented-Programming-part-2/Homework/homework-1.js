// ## Rewrite as class
// There is a class CoffeeMachine, created in a functional style.

// **Task**: rewrite CoffeeMachine using prototype.

// Source code:

function CoffeeMachine(power) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    waterAmount = amount;
};
CoffeeMachine.prototype.run = function () {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, getTimeToBoil());
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

