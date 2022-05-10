"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(color, shape) {
        var _this = this;
        this.speed = 0;
        this.gear = "mechanic"; //accesibila la parinti-copii
        this.speedUp = function (time) {
            _this.speed *= time;
        };
        this.speedDown = function (time) {
            _this.speed /= time;
            return _this.speed;
        };
        this.speedUpFast = function (time) {
            _this.speed = _this.speed * (time + time);
        };
        this.speedDownFast = function (time) {
            _this.speed = _this.speed / (time + time);
            return _this.speed;
        };
        this.color = color;
        this.shape = shape;
    }
    Car.prototype.getSpeed = function () {
        return this.speed.toString();
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Car.prototype.getGear = function () {
        return this.gear;
    };
    Car.prototype.setGear = function (gear) {
        this.gear = gear;
    };
    return Car;
}());
exports.Car = Car;
var car = new Car("green", "hatchback");
console.log(car.color);
console.log(car.shape); //only readonly
//console.log(car.speed); //cannot do
console.log(car.getSpeed());
var FastestCar = /** @class */ (function (_super) {
    __extends(FastestCar, _super);
    function FastestCar(color, shape) {
        return _super.call(this, color, shape) || this;
    }
    //override
    FastestCar.prototype.getGear = function () {
        return this.gear + "5 viteze";
    };
    return FastestCar;
}(Car));
exports["default"] = FastestCar;
console.log(car.getGear());
console.log(new FastestCar("black", "sedan").getGear());
var eyeColor = "brown";
var me = {
    lastName: "Florescu",
    firstName: "Victor",
    day: 21,
    month: 2,
    year: 2001,
    eyesColor: "brown"
};
var him = {
    day: 10,
    month: 2,
    year: 2000,
    lastName: "Al"
};
//basic types
function printBasicType(value) {
    if (typeof value === "number") {
        console.log(value.toString());
    }
    if (typeof value === "string") {
        console.log(value.charAt(1));
    }
    else {
        console.log(value.toString());
    }
}
//arrays
var array1 = ["a", "b", "c"];
var array2 = ["a", "b", "c"];
var exTuple = [14, "a", true];
//enum
var CarType;
(function (CarType) {
    CarType[CarType["Sedan"] = 1] = "Sedan";
    CarType[CarType["Cabriolet"] = 2] = "Cabriolet";
    CarType[CarType["Coupe"] = 3] = "Coupe";
    CarType[CarType["Pickup"] = 4] = "Pickup";
})(CarType || (CarType = {}));
console.log(CarType);
//unknown
var unknownEx = { id: 1, field: "some field" };
//verificam daca e object obiectul, daca nu e null si daca cheia exista in obiect
function hasKey(obj, key) {
    return typeof obj === "object" && obj !== null && key in obj;
}
if (hasKey(unknownEx, "id")) {
    console.log(unknownEx);
}
//never nu va returna nimic pana la urma
function throwError(message) {
    throw new Error(message);
}
//daca nu exista obiectul, arunca eroare noua
//returneaza asserts obiectul ii T
function assertObj(obj) {
    if (!obj) {
        throw new Error("Object is undefined");
    }
}
//object - orice care nu-s primitive
function testObject(obj) {
    assertObj(obj);
    console.log(obj.firstName + " " + obj.lastName);
}
testObject({ lastName: "Victor", firstName: "Florescu" });
//testObject(); va arunca eventual eroare deoarece e null
//this lucreaza dupa context
var exObject = {
    name: "Victor",
    lastName: "Florescu",
    printName: function () {
        console.log("name = ".concat(this.name, ", lastName: ").concat(this.lastName));
    }
};
//ii dam un context cu bind ca sa poata gasi this.name
//ii dam ca context obiectul sine insusi
//da acolo deja alt obiect
var printName1 = exObject.printName.bind(exObject);
//daca nu indicam alte fielduri, ele vor fi undefined
var printName2 = exObject.printName.bind({ name: "another" });
console.log(exObject.printName());
console.log(printName1());
console.log(printName2());
function add(a, b) {
    console.log(a + b);
}
add(5, 2);
add("5", "2");
//genericul extinde length, adica va avea length
function printLength(obj) {
    console.log(obj.length);
}
printLength([1, 2, 3]); //va printa length la array
printLength("aaaaaaa"); //va printa length la string
//va scoate un anumit field din obiect care este cerut
function getValue(obj, key) {
    return obj[key];
}
var objVal = {
    name: "123",
    lastName: "Florescu"
};
console.log(getValue(objVal, "lastName"));
var cats = [
    {
        name: "Jerry",
        color: "gray",
        age: 2
    },
    {
        name: "Tom",
        color: "white",
        age: 3
    },
    {
        name: "Stiopa",
        color: "black",
        age: 1
    }
];
function mapAllKeys(array, key) {
    array.forEach(function (element) {
        console.log(element[key]);
    });
}
mapAllKeys(cats, "name");
function interf(value) {
    return value;
}
var resNum = interf(1);
var res = interf("1");
