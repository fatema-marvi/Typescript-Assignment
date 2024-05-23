function carstore(manufacturer:string, model:string,extraproperties:{ [key:string]: any} )
{
let car = {
    manufacturer: "Toyota",
    model:"Corolla",
    ...extraproperties            //... is used to spread extra properties..we can add as many properties as want
};
return car;
}
let myCar = carstore("Toyota","Corolla",{color:"white",year:2016});

console.log(myCar);