function sandwich (...items: string[]) {                //we used .... it is called the rest parameter, this allows 
                                                        //indefinite arguments as an array
    console.log("Making a sandwich with these items:");
    for (let item of items);
{console.log(`-${items}`);
}
console.log("your sandwich is ready! \n");
}
sandwich("Cheese","lettuce");
sandwich("grilled chicken","mayonese")
sandwich("tomatoes", "cucumber")
