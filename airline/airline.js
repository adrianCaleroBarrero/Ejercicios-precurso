 let user = prompt('Cual es tu nombre:');
 console .log(`Bienvenido ${user}`);

 let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


let flynow = flights.map(function(fly){
    
    if(fly.scale === true){
    return console.log(`El vuelo con origen: ${fly.from}, y con destino a: ${fly.to} tiene un coste de ${fly.cost}$ y realiza escala.`);
}else{
    return console.log(`El vuelo con origen: ${fly.from}, y con destino a: ${fly.to} tiene un coste de ${fly.cost}$ y no realiza ninguna escala.`);
}
});

var average = flights.reduce((total, next) => total + next.cost, 0) / flights.length;

console.log(`El coste promedio de los vuelos es de ${average.toFixed(2)}$.`);


var scaleCount = flights.filter(x => x.scale === true).length;
console.log(`${scaleCount} en total tienen escala.`);


const lastFly = flights.map(function(last){
    if(last.id >= 5){
        console.log(`Uno de los ultimos vuelos tiene destino a: ${last.to}.`);
    }
});