
let display = [];
let saveNumbers = [];
let operatorSelected;
let number = document.getElementsByClassName('numbers');
let operators = document.getElementsByClassName('operation');
let equal = document.getElementsByClassName('done');
let clean = document.getElementById('clear');
let back = document.getElementById('back');
let itsDone = false;
let firstClick = false;

for(let i = 0; i < number.length; i++){
    number[i].onclick = (e) => {
        if(itsDone === true){
            document.getElementsByClassName('display')[0].value = '';
            saveNumbers = [];
            display = [];
            operatorSelected = '';
            itsDone = false;
        }
        if(firstClick === false || e.target.value !== '.'){
            document.getElementsByClassName('display')[0].value += e.target.value;
            display.push(e.target.value);
        }
        if(e.target.value === '.'){
            firstClick = true;
        }   
    }
}

for(let i = 0; i < operators.length; i++){
    operators[i].onclick = (e) => {
        let collectNums = display.join('');
        itsDone = false;
        if(saveNumbers.length < 1){
            saveNumbers.push(+collectNums);
        }       
        document.getElementsByClassName('display')[0].value += ' ' + e.target.value + ' ';
        display = [];
        operatorSelected = operators[i].value;
        firstClick = false; 
    }
}

equal[0].onclick = () => {
    let collectOtherNums = display.join('');
    saveNumbers.push(+collectOtherNums);
    
    if(operatorSelected === '+'){
        let plus = saveNumbers.reduce((acc, item) => acc + item);
        document.getElementsByClassName('display')[0].value = plus;
        saveNumbers = [];
        saveNumbers.push(plus); 
    }else if(operatorSelected === '-'){
        console.log(saveNumbers)
        let minus = saveNumbers.reduce((acc, item) => acc - item);
        document.getElementsByClassName('display')[0].value = minus;
        saveNumbers = [];
        saveNumbers.push(minus);
    }else if(operatorSelected === '*'){
        let multi = saveNumbers.reduce((acc, item) => acc * item);
        document.getElementsByClassName('display')[0].value = multi;
        saveNumbers = [];
        saveNumbers.push(multi);
    }else if(operatorSelected === '/'){
        let div = saveNumbers.reduce((acc, item) => acc / item);
        document.getElementsByClassName('display')[0].value = div;
        saveNumbers = [];
        saveNumbers.push(div);
    }
    itsDone = true;
}

clean.onclick = () => {
    document.getElementsByClassName('display')[0].value = '';
    saveNumbers = [];
    display = [];
    operatorSelected = ''; 
    itsDone = false;
    firstClick = false;  
}

back.onclick = () => {
    display.pop();
    document.getElementsByClassName('display')[0].value = display.join('');
}
