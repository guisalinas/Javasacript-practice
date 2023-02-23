/*
    My first JS
    In your JS file place variables or constants with your personal data, name, surname,
    age, if you have children their names, if you have pets, their characteristics, data
    about your home, in short the data that you believe convenient to share with us, the
    more data you incorporate the more you will practice and the richer the exercise will be.
    * Add a consolelog to each data to be able to visualize it in the inspection tools of
    your browser. */

let name = "Homero J";
let surname = "Simpson";
let birthdate = 05-12-1956;
let civilStatus= "married";

let address = {
    "location": "springfield",
    "addressStreet": "Evergreen Terrace 742",
};

let sons = ["Bart", "Lisa", "Maggie"];
let pets = ["Snowball", "Santa's Little Helper"];

console.log(`Today we present ${name} ${surname}. His birthday is ${birthdate} and his civil status is ${civilStatus}. Has ${pets.length} pets: ${pets[0]} and ${pets[1]}. His sons are ${sons[0]}, ${sons[1]} and ${sons[2]}. Live in ${address.addressStreet}, ${address.location}.`);

