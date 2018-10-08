//define car class and do hw
//files we make can be imported just like modules car class is being required the export out of that folder will be a class
//make a class called car and export it, the text file is importing it
//cars should have a color and a convertible true or false
//test car class by running npm test - type error - car isn't a constructor
//phase 1 write test soud have color describe() and it() function for test suits, makes the tests readable
//we need to define car class - make a list of things you want it to work like and then write code to make those wishes
//true.  Test driven development
class Car {
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;

        
        // decelerate = ()
}
accelerate(accelerate) {
    this.speed += accelerate;
        }
decelerate(decelerate) {
    this.speed -=decelerate;
}
}
//already instantiated, need to export it
module.exports = Car;
//the car class will come out of requre.  run the stuff you want to work, then inside the describe and it part run it to make sure they work the way expected to
//the first 2 features are working
//when character.attack.villain = 4, it passes