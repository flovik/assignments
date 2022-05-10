import { Car, Car as Car2 } from ".";
import FastestCar from ".";
import * as mod from 'module'
let car = new Car("black", "sedan");
car.getSpeed();
let car2 = new Car2("white", "sportcar");
car2.getSpeed();
let fast = new FastestCar("green", "sportcar");
fast.getSpeed();

console.log(mod.sum(1, 3));