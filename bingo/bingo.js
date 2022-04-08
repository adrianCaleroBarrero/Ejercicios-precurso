const playagain = () =>{

  let player1 = {
      name : '',           
      points: 100             
  };
  let player2 = {
    name : 'Robert',
    points: 4
  };
  let player3 = {
    name : 'David',
    points: 6  
  };
  let player4 = {
    name : 'Claire',
    points: 15   
  };
  let player5 = {
    name : 'Ryan',
    points: 9   
  };
  
let cartoon = [];
let gameRandom = [];
let anotherNum = false;
let numberPushed = false;
let isLine = false
  
  let askName = prompt('Whats your name?');
    player1.name = askName;
    console.log(`${player1.name} tus puntos actuales son: ${player1.points}, en cada turno se te restara 1 punto.Buena suerte.`);

    const divideArray = (colum) =>{
      let newDiv = [];
      for(let i = 0; i <colum.length; i+=5){
       
        newDiv.push(colum.slice(i, i+5));
      } 
      return newDiv
    }
    const doCartoonAgain = () =>{    
      
      const bingo = () => {
        cartoon = [];      
        
        while(cartoon.length < 15 ){
          let randomNum1 = (Math.random()*100).toFixed(0);     
          if(cartoon.length < 1){        
            cartoon.push(randomNum1);    
          }else if(!cartoon.some(function(elem){return elem == randomNum1})){      
            cartoon.push(randomNum1);    
            if(cartoon.length === 15){                     
              console.table(divideArray(cartoon));
            }
          }                   
        }        
      }

      bingo();

      let anotherCartoon = prompt('Do you want change the cartoon? y/n');
      if(anotherCartoon === 'y'){
        doCartoonAgain();
      }
    }
    doCartoonAgain();
    
    const generateNum = () => {
      let askNum =  prompt('Show number? y/n');
           
      if(askNum === 'y'){
        anotherNum = true;       
      }else if(askNum === 'n'){
        anotherNum = false;        
      }

      while(numberPushed === false){       
        let bingoBall = (Math.random()*100).toFixed(0);       
        if(gameRandom.length < 1){
          gameRandom.push(bingoBall);
          console.log(bingoBall);
          player1.points--             
        }else if(!gameRandom.some(function(elem){return elem == bingoBall})){
          gameRandom.push(bingoBall);
          console.log(bingoBall);
          numberPushed = true;
          player1.points--   
        }

        function allX(number){
          return number === 'x';
      };

        const checkLine = (allCartoon) => {
          const firstColumn = allCartoon.slice(0, 5).every(allX);
          const secondColumn = allCartoon.slice(5, 10).every(allX);
          const thirdColumn = allCartoon.slice(10, 15).every(allX);                   
          
          if((firstColumn || secondColumn || thirdColumn) && isLine === false){
            alert('LINE!');
            isLine = true;
          }         
        }
               
        cartoon.forEach(function(num){
          if(num === bingoBall){
            let index = cartoon.indexOf(num);
            cartoon.splice(index, 1, 'x');
            console.table(divideArray(cartoon));
            checkLine(cartoon);           
            
            if(cartoon.every(allX)){
              let playersForRanking = [];
              playersForRanking.push(player1, player2, player3, player4, player5);

              const playersOrder = playersForRanking.sort((play1, play2) => {               
                return play2.points - play1.points;
              }) 

              alert('BINGO!');
              console.log(`${player1.name} tu puntuacion final es de: ${player1.points}.`);
              console.log('RANKING:')
              console.log(playersOrder);
              anotherNum = false;              
         }
      }
    }); 
  } 

    while(anotherNum === true && numberPushed === true){
      numberPushed = false;
      generateNum();     
    }  
}
  generateNum();
  
  let anotherplay = prompt('Want you play again?y/n');
  
  if(anotherplay === 'y'){
    playagain();
  }
}
playagain();

