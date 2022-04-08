
    let numberList = [];
    let stopNumber = false;  
    const answerNumber = () => {
           
               let newNumber = prompt('Enter a number or press cancel for stop the sequence.');  

            if(isNaN(newNumber) || newNumber === ''){  

                alert('Is not a number, please enter a number.');
                answerNumber();  

            }else if(newNumber === null){
                
                stopNumber = true;

            }else if(!isNaN(newNumber) && stopNumber === false){
                           
                numberList.push(+newNumber); 
                answerNumber();             
        }
    }
        
        const results = () => { 
            const sum = numberList.reduce((partial_sum, a) => partial_sum + a);
            
            const rest = numberList.reduce((partial_rest, a) => partial_rest - a);
            
            const multiply = numberList.reduce((partial_multi, a) => partial_multi * a);
            
            const divide = numberList.reduce((partial_div, a) => partial_div / a);
            
            
            if(numberList.length === 1){
                console.log('The result of the square root: ' + (Math.sqrt(numberList[0])).toFixed(3));
            }else if(numberList.length > 1){
            
                console.log(`The result of the sum is ${sum.toFixed(3)}`);
            console.log(`The result of the rest is ${rest.toFixed(3)}`);
            console.log(`The result of the multiply is ${multiply.toFixed(3)}`);
            console.log(`The result of the divide is ${divide.toFixed(3)}`);
        }
            
     let reborn = prompt('New numbers? y/n');
     
     if(reborn === 'y'){
         calculatorPro();
        }
    }    
    
    answerNumber();
    results();
