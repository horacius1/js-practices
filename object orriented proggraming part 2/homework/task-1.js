function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    function onReady() {
		console.log('Coffee is ready');
    }

  this.setOnReady = function(x) {
	 x = onReady ;
  }
  this.getWaterAmount = function(){
        return waterAmount;
  }
  this.ready = function (){
    return onReady();
  }
  this.run= function() {
		setTimeout(this.ready, getTimeToBoil());
  };
}