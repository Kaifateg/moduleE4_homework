function ElectricDevice(){
    this.category = 'home device'
}

ElectricDevice.prototype.on = function(){
    this.state = 'on'
}

ElectricDevice.prototype.off = function(){
    this.state = 'off'
}

function TableLamp(location, color){
    this.location = location;
    this.color = color
}

TableLamp.prototype = new ElectricDevice();

TableLamp.prototype.power = function(voltage){
    console.log(`Power of the lamp: ${voltage*220} watt`)
}

function Computer(name, type){
    this.name = name;
    this.type = type;
}

Computer.prototype = new ElectricDevice();

Computer.prototype.power = function (voltage){
    console.log(`Power of the ${this.name}: ${voltage*220} watt`)
}

const firstLamp = new TableLamp('hall', 'red');
const secondLamp = new TableLamp('bedroom', 'black');

firstLamp.on()
secondLamp.power(12)

const firstComp = new Computer('CPU1', 'For work');
const secondComp = new  Computer('CPU2', 'For video');

secondComp.on()
firstComp.power(180)

console.log(firstLamp);
console.log(secondLamp);
console.log(firstComp);
console.log(secondComp)
