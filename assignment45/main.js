"use strict";
function carstore(manufacturer, model, extraproperties) {
    let car = Object.assign({ manufacturer: "Toyota", model: "Corolla" }, extraproperties);
    return car;
}
let myCar = carstore("Toyota", "Corolla", { color: "white", year: 2016 });
console.log(myCar);
