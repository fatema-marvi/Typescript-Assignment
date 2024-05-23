"use strict";
function sandwich(...items) {
    //indefinite arguments as an array
    console.log("Make a sandwich with these items:");
    for (let item of items)
        ;
    {
        console.log(`-${items}`);
    }
    console.log("your sandwich is ready! \n");
}
sandwich("Cheese", "lettuce");
sandwich("grilled chicken", "mayonese");
sandwich("tomatoes", "cucumber");
