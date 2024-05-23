//person object
interface person {
 name: string,
 age: number,
 gender: string,
 pakistani: boolean
}
let person: person= {
    name: 'Adnan',
    age: 40,
    gender: 'male',
    pakistani: true
}
console.log(person);


//car object
interface car{
    name: string,
    model: number,
    registered: boolean
}
let car = {
    name: 'Toyota',
    model: 2018,
    registered: true
}
console.log(car);