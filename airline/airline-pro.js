let nameUser = prompt('Cual es tu nombre:');
console .log(`Bienvenido ${nameUser}`);

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

const askAdminUser = () => {
    const adminUser = prompt('ADMIN O USER?');
    adminUser.toLowerCase();
    if(adminUser !== 'admin' && adminUser !== 'user'){
        askAdminUser();
    }else{
        return adminUser;
    }
}

    const adminOrUser = (itsAdmin) =>{
        let callAdminOrUser = itsAdmin();       
        if(callAdminOrUser === 'admin'){
             let askCreateFly = prompt('Quieres crear un vuelo? s/n');
    
            if(askCreateFly !== null || isNaN(askCreateFly)){
                askCreateFly.toLowerCase();                           
                if(askCreateFly === 's'){
                    const constructorFly = (id, to, from, cost, scale) =>{
    
                        id = flights.length + 1;
                        to = prompt('destino?');
                        from = prompt('desde donde sale el vuelo?');
                        let price = prompt('precio del vuelo?');
                        if(!isNaN(price)){
                            cost = price;
                        }else{
                            cost = prompt('El precio solo puede tener valor numérico, porfavor ponga el precio del vuelo.');
                        }
                        let transfer = prompt('tiene escala? si/no');
                        if(transfer === 'si'){
                            scale = true;
                        }else{
                            scale = false;
                        }
    
                        flights.push({id, to, from, cost, scale});
    
                        flights.forEach(function(newsFly){
                            if(newsFly.scale === true){
                            console.log(`vuelo con salida desde ${newsFly.from} y destino ${newsFly.to}, un coste de ${newsFly.cost}, con escala.`);
                        }else{
                            console.log(`vuelo con salida desde ${newsFly.from} y destino ${newsFly.to}, un coste de ${newsFly.cost}, sin escala.`);
                        }});

                        let anotherFly = prompt('Quieres crear otro vuelo? si/no');
                        anotherFly.toLowerCase();

                        if(anotherFly === 'si'){

                            constructorFly();

                        } else if(askCreateFly === 'n' || anotherFly !== 'si'){

                            flights.forEach(function(removeFly){
                                console.log(`el vuelo con procedencia ${removeFly.from} y destino ${removeFly.to} tiene la ID: ${removeFly.id}.`)
                            });
            
                            let remove = +prompt('Quieres eliminar algun vuelo? indica el número (00 - 15)');                                
                            let newFlights = flights.filter((item) => item.id !== remove);
            
                            newFlights.forEach(function(newArray){
                                if(flights.scale === true){
                                    console.log(`vuelo con salida desde ${newArray.from} y destino ${newArray.to}, un coste de ${newArray.cost}, con escala.`);
                                }else{
                                    console.log(`vuelo con salida desde ${newArray.from} y destino ${newArray.to}, un coste de ${newArray.cost}, sin escala.`);
                                }});
                        }
                    }
                constructorFly();
        }else{
            adminOrUser(askAdminUser);
        }          
    }
    
}else if(callAdminOrUser === 'user'){
    let priceUser = +prompt('Que precio maximo quieres gastar?');
    flights.map(function(money){
         if(money.cost <= priceUser){
             console.log(`El vuelo con salida desde ${money.from} y destino ${money.to}, tiene un precio de ${money.cost}$, su id de compra es : ${money.id}.`);
         }});
         
   let buy = +prompt('Que vuelo quieres comprar? indica su id de compra.');

   flights.map(function(bye){
       if(bye.id === buy){
           console.log(`Felicidades, se va ha ${bye.to} y su salida es de ${bye.from}.`);
           console.log('Gracias por su compra, vuelva pronto.');
       }});
    }
}

adminOrUser(askAdminUser);

 


