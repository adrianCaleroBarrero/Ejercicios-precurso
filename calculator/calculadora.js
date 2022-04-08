
let saveNum = [];
let parameterNum = 0;

const tellNumber = () => {
    let numberOfParameters = +prompt('How numbers you want to add:(1 or 2)');
   
    if(numberOfParameters === 0){
        alert('Add numbers!');
        tellNumber();       
    }else if(numberOfParameters > 2){
        alert('Many numbers!');
        tellNumber();        
    }else if(isNaN(numberOfParameters) || numberOfParameters === '' || numberOfParameters === null){
        alert('Enter a number!');
        tellNumber();   
    }else {
        parameterNum = numberOfParameters;
    }
}



const numbers = () => {  
    for(let i = 0; i < parameterNum; i++){
        let parameter = +prompt('Add a number: ');   
        if(isNaN(parameter) || parameter === '' || parameter === null){
            alert('enter only numbers')
            numbers();
        }else{
            saveNum.push(parameter);
        } 
    }    
}

const printNumbers = () =>{
    if(saveNum.length === 1){
        console.log('The result of the square root: ' + (Math.sqrt(saveNum[0])).toFixed(3));
    }else if(saveNum.length === 2){
        console.log(`The result of the sum is ${(saveNum[0] + saveNum[1]).toFixed(3)}`);
        console.log(`The result of the rest is ${(saveNum[0] - saveNum[1]).toFixed(3)}`);
        console.log(`The result of the multiply is ${(saveNum[0] * saveNum[1]).toFixed(3)}`);
        console.log(`The result of the divide is ${(saveNum[0] / saveNum[1]).toFixed(3)}`);
    }else if(isNaN(saveNum[0]) && isNaN(saveNum[1]) || saveNum[0] === '' && saveNum[1] === '' || saveNum[0] === null && saveNum[1] === null){
        alert('Enter at least one number.');
    } 
}

tellNumber();
numbers();
printNumbers();