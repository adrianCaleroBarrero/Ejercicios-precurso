let counter = 0;
let counterPlayer1 = 0;
let counterPlayer2 = 0;
let fullColumn = false;
let finishGame = false;
let column = [];
let play = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]];
let welcome = document.querySelector('#welcome');
let columns = document.querySelectorAll('.column');

const start = () => {
    let playVs1 = document.querySelector('#play');
    playVs1.addEventListener('click', turns);
    playVs1.addEventListener('click', pressPanel);
}
    

const turns = () => { 

    if(counter % 2 == 0){
        welcome.innerHTML = 'Turno de las fichas rojas';
        let redCircle = document.createElement('div');
        redCircle.classList.add('circle-r');
        welcome.appendChild(redCircle);
    }else{
        welcome.innerHTML = 'Turno de las fichas amarillas';
        let yellowCircle = document.createElement('div');
       yellowCircle.classList.add('circle-y');
        welcome.appendChild(yellowCircle);
    }    
}

const pressPanel = () => {
    columns.forEach((button) => button.addEventListener('click', function(){
        if(finishGame === false){
            column.push(button);
            checkPanel();
        }
    }));
}



const checkPanel = () => {
    switch(column[counter].id[7]){
        case 'a':
            putTab(play[0], 'a');
            break;
        case 'b':
            putTab(play[1], 'b');
            break;
        case 'c':
            putTab(play[2], 'c');
            break;
        case 'd':
            putTab(play[3], 'd');
            break;
        case 'e':
            putTab(play[4], 'e');
            break;
        case 'f':
            putTab(play[5], 'f');
            break;
        case 'g':
            putTab(play[6], 'g');
            break;   
    }  
}

const putTab = (column, letter) => {
    let token = column.findIndex(element => element === 0)
    let changeToken = document.querySelector(`#${letter + token}`);

    if(changeToken !== null){
        fullColumn = false;
        if(counter % 2 == 0){
            changeToken.classList.remove('circle');
            changeToken.classList.add('circle-r');
            column[token] = 1;
            counter++;
            turns();
            checkIfConect4();
        }else {
            changeToken.classList.remove('circle');
            changeToken.classList.add('circle-y');
            column[token] = 2;
            counter++;
            turns();
            checkIfConect4(); 
        }
        
    }else if(fullColumn === false){
        let welcome = document.querySelector('#welcome');
        welcome.innerHTML = 'Columna completa';
        counter++
        fullColumn = true;
    }else{
        counter++
    }
}

const checkIfConect4 = () => {
    for(let i = 0; i < play.length; i++){
        for(let j = 0; j < play[i].length; j++){
            if(play[i][j] !== 0){
                if(j < 3){
                    if(play[i][j] === play[i][j+1] && play[i][j] === play[i][j+2] && play[i][j] === play[i][j+3]){
                        winner()
                    }
                }
                if(i < 4){
                    if(play[i][j] === play[i+1][j] && play[i][j] === play[i+2][j] && play[i][j] === play[i+3][j]){
                        winner()
                    }
                }
                if(j < 3 && i < 4){
                    if(play[i][j] === play[i+1][j+1] && play[i][j] === play[i+2][j+2] && play[i][j] === play[i+3][j+3]){
                        winner()
                    }
                }
                if(j > 2 && i < 4){
                    if(play[i][j] === play[i+1][j-1] && play[i][j] === play[i+2][j-2] && play[i][j] === play[i+3][j-3]){
                        winner()
                    }
                }
            }
        }
    }
}

const winner = () =>{
    if(counter % 2 == 0){
        welcome.innerHTML = 'Ganan las fichas amarillas';
        finishGame = true;
        playAgain()
        
    }else{
        welcome.innerHTML = 'Ganan las fichas roja';
        finishGame = true;
        playAgain();
    }
}

const playAgain = () => {
    play = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]];
    column = [];
    counter = 0;
    
    let removeAllPanel = document.querySelectorAll('.circle, .circle-r, .circle-y');
    
    let buttonPlayAgain = document.createElement('button');
    buttonPlayAgain.textContent = 'JUGAR OTRA VEZ';
    buttonPlayAgain.classList.add('play')
    welcome.appendChild(buttonPlayAgain);

    buttonPlayAgain.addEventListener('click', function(){
        removeAllPanel.forEach((circle) => {
            circle.classList.remove('circle-r', 'circle-y');
            circle.classList.add('circle');
        });
        finishGame = false;
        turns();
    });
}


start();