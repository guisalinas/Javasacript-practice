//Carga un array con una indefinida cantidad de nombres segun quiera el usuarioy los saluda uno por uno, y luego a todos juntos.

let namesArray = [];
let name_;

//carga el array desde el promt hasta que el usuario ingrese un campo vacío o de click en "cancelar"
while(true){
    name_ = prompt("Hola! ¿A quién damos la bienvenida?")
    if(name_ == null || name_ ==""){
        break;
    }
    namesArray.push(name_); //carga el array con cada nombre en cada iteración
}


function greetOne (namesArray){
    //recorre el array y le imprime el saludo a cada nombre
    for(let name_ of namesArray) {
        console.log(`Hola ${name_}!! Te damos la Bienvenida!`);
    }
}

function greetEveryone(namesArray){
    //Utiliza el metodo join para transformar el array en string separados por una coma.
    console.log(`Hola ${namesArray.join(", ")}! Les damos la bienvenida!!`)
}

console.log("--Saludo de a uno:");
greetOne(namesArray)

console.log("--Saludo a todos juntos:");
greetEveryone(namesArray)



