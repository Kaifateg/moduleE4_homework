class ElectricDevice{
    constructor(){
        this.category = 'home device'
    }
    on(){
        this.state = 'on'
    }
    off(){
        this.state = 'off'
    }
}

class TableLamp extends ElectricDevice{
    constructor(location, color){
        super();
        this.location = location;
        this.color = color;
    }
    power(voltage){
        console.log(`Power of the lamp: ${voltage*220} watt`)
    }
}

class Computer extends ElectricDevice{
    constructor(name, type){
        super();
        this.name = name;
        this.type = type
    }
    power(voltage){
        console.log(`Power of the ${this.name}: ${voltage*220} watt`)
    }
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
