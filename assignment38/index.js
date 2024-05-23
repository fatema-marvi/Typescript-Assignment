"use strict";
function describe_cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_cities('Karachi');
describe_cities('Lahore');
describe_cities('Istanbul', 'Turkey');
