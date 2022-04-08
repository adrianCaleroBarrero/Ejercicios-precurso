const questions = [

    { newPass: "a", answer: ["abducir", "alcachofa", "ajo"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha.", "CON LA A. Planta con raíz comestible, de color blanco y olor fuerte"]},

    { letter: "b", answer: ["bingo", "botiquin", "baston"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Caja en la que se guardan medicinas", "CON LA B. Palo de madera que sirve para apoyarse al andar"]},

    { letter: "c", answer: ["churumbel", "camilla", "cactus"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos", "CON LA C. Planta verde con muchas espinas"]},

    { letter: "d", answer: ["diarrea", "dedicatoria", "danzar"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Palabras que se escriben y se dicen como regalo a alguien", "CON LA D. Moverse al ritmo de una música"]},

    { letter: "e", answer: ["ectoplasma", "empañar", "embudo"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E, Mancharse un cristal con el vapor de agua", "CON LA E. Objeto con forma de cono que se utiliza para pasar líquidos de un recipiente a otro"]},

    { letter: "f", answer: ["facil", "fabula", "fauces"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja", "CON LA F. Boca y dientes de animales muy fieros"]},

    { letter: "g", answer: ["galaxia", "guisar", "gatear"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Preparar alimentos cocinándolos con calor", "CON LA G. Avanzar con las rodillas y las palmas de las manos"]},

    { letter: "h", answer: ["harakiri", "hamaca", "hambre"], status: 0, question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama", "CON LA H. Sensación que provocan las ganas de comer"]},

    { letter: "i", answer: ["iglesia", "imperdible", "interruptor"], status: 0, question: ["CON LA I. Templo cristiano", "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho", "CON LA I. Aparato que se usa para abrir o cerrar el paso de la corriente eléctrica"]},

    { letter: "j", answer: ["jabali", "jinete", "jungla"], status: 0, question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Persona que monta a caballo", "CON LA J. Selva propia del clima tropical"]},

    { letter: "k", answer: ["kamikaze", "karaoke", "ketchup"], status: 0, question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla", "CON LA K. Salsa de tomate condimentada con vinagre, azúcar y especias"]},

    { letter: "l", answer: ["licantropo", "litera", "ladrillo"], status: 0, question: ["CON LA L. Hombre lobo", "CON LA L. Mueble formado por dos camas puestas una encima de la otra", "CON LA L. Pieza de arcilla con la que se construyen muros"]},

    { letter: "m", answer: ["misantropo", "mayonesa", "manada"], status: 0, question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Salsa que se hace batiendo huevo y aceite", "CON LA M. Grupo de animales de la misma especie que van juntos"]},

    { letter: "n", answer: ["necedad", "nuca", "nana"], status: 0, question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Parte posterior de la cabeza situada encima del cuello", "CON LA N. Canción de cuna que se canta a los bebés para que se duerman"]},

    { letter: "ñ", answer: ["señal", "teñir", "gruñido"], status: 0, question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados", "CONTIENE LA Ñ.  Sonido que hace el cerdo"]},

    { letter: "o", answer: ["orco", "orilla", "oculista"], status: 0, question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Borde del mar, de un lago o de un río", "CON LA O. Médico especialista en las enfermedades de los ojos"]},

    { letter: "p", answer: ["protoss", "planchar", "pesadilla"], status: 0, question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Quitar las arrugar a una prenda", "CON LA P. Sueño que produce angustia o temor"]},

    { letter: "q", answer: ["queso", "quitamanchas", "quirofano"], status: 0, question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Producto natural o preparado que sirve para quitar manchas", "CON LA Q. Habitación de hospital donde los médicos realizan las operaciones"]},

    { letter: "r", answer: ["raton", "racimo", "raiz"], status: 0, question: ["CON LA R. Roedor", "CON LA R. Conjunto de uvas sostenidas en un mismo tallo", "CON LA R. Parte por la que se alimenta una planta, que está bajo tierra"]},

    { letter: "s", answer: ["stackoverflow", "sembrar", "susurrar"], status: 0, question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Enterrar semillas en la tierra para que crezcan", "CON LA S. Hablar muy bajito"]},

    { letter: "t", answer: ["terminator", "taburete", "talon"], status: 0, question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Asiento sin respaldo", "CON LA T. Parte posterior del pie de una persona"]},

    { letter: "u", answer: ["unamuno", "untar", "umbral"], status: 0, question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. Extender mantequilla sobre una rebanada de pan", "CON LA U. Parte inferior de una puerta"]},

    { letter: "v", answer: ["vikingos", "vecino", "vacaciones"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON AL V. Persona que vive en el mismo barrio o edificio que otra", "CON LA V. Tiempo de descanso en el que las personas no trabajan o no van al colegio"]},

    { letter: "w", answer: ["sandwich", "wifi", "walabi"], status: 0, question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Sistema de conexión inalámbrica para conectarse a internet", "CON LA W. Animal marsupial que habita en Australia. Se parece al canguro pero es de menor tamaño"]},

    { letter: "x", answer: ["botox", "fenix", "extremidades"], status: 0, question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas", "CONTIENE LA X. Órganos externos, articulados con el tronco, que cumplen funciones de locomoción, vuelo o manipulación de objetos en los animales"]},
    
    { letter: "y", answer: ["peyote", "yunque", "yegua"], status: 0, question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo", "CON LA Y. Hembra del caballo"]},
    
    { letter: "z", answer: ["zen", "zumbido", "zurdo"], status: 0, question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito", "CON LA Z. Persona que habitualmente utiliza su mano o pie izquierdos"]} 
];

let newPassWord = [];
let countQuestion = 0;
let waitToCheck = false
let rightQuestions = 0;
let time = 120;


questions.forEach(function(newPass){
    let getRandom = Math.floor(Math.random() * newPass.question.length);
    newPassWord.push({answer: newPass.answer[getRandom], question: newPass.question[getRandom], status: newPass.status});        
});

const pressPlay = () => {
    let playBotom = document.querySelector('#play');
    playBotom.addEventListener('click', createQuestions);
    playBotom.addEventListener('click', timer);
}

const createQuestions = () => {
    if(newPassWord[countQuestion].status === 0){
        let playBotom = document.querySelector('#play');
        playBotom.disabled = true; 

        let writeQuestion = document.createElement('p');
        writeQuestion.textContent = newPassWord[countQuestion].question;

        let answerWrite = document.createElement('input');
        answerWrite.setAttribute('id', 'answer');
        answerWrite.classList.add('placeholder');
        

        let button = document.createElement('button');
        button.setAttribute('id', 'button');
        button.textContent = 'ENVIAR';
        button.classList.add('inputsQuestion');

        let buttonForExit = document.createElement('button');
        buttonForExit.setAttribute('id', 'button');
        buttonForExit.textContent = 'SALIR';
        buttonForExit.classList.add('inputsQuestion');

        let letter = document.querySelector(`#l-${countQuestion}`);
        letter.classList.add("focusLetter");

        let question = document.querySelector('#questions');
        question.appendChild(writeQuestion);
        question.appendChild(answerWrite);
        question.appendChild(button);
        question.appendChild(buttonForExit);
        
        button.addEventListener('click', checkAnswer);
        buttonForExit.addEventListener('click',finishGame);
        answerWrite.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                button.click();
            }
        });       
    } 
    document.querySelector('#answer').focus(); 
}

const checkAnswer = () => {
    let answerWrite = document.querySelector('#answer');
    let wordSave = answerWrite.value;
    checkWord(wordSave,newPassWord[countQuestion].answer)
}

const checkWord = (word, wordList) => {
    let letter = document.querySelector(`#l-${countQuestion}`);
    let cleanQuestion = document.querySelector('#questions');
    waitToCheck = false;

    if(countQuestion <= (newPassWord.length - 1)){
        if(word.toLowerCase() === wordList){
            letter.classList.add("turnGreen");
            rightQuestions++;
            cleanQuestion.innerHTML = '';
            newPassWord[countQuestion].status = 1;
        }else if(word.toLowerCase() === 'pasapalabra'){
            cleanQuestion.innerHTML = '';
            newPassWord[countQuestion].status = 0;
        }else if(word.toLowerCase() !== wordList ){
            letter.classList.add("turnRed");
            cleanQuestion.innerHTML = `La respuesta correcta es: ${wordList}.`;
            newPassWord[countQuestion].status = -1;
        }
        countQuestion++    
    }

    if(countQuestion <= (newPassWord.length - 1) && newPassWord[countQuestion].status === 0){
        createQuestions();
    }else{
        anotherRound();
    }
};
const finishGame = () => {
    clearInterval(TimeRest);
    let showRightQuestions = document.querySelector('#questions');
    showRightQuestions.innerHTML = '';
    let writeResults = document.createElement('p');
    let writeTime = document.createElement('p');
    let playAgain = document.createElement('button');
    writeResults.textContent = `FELICIDADES!!! Has acertado ${rightQuestions} preguntas.`;
    if(time === -1){
        writeTime.textContent = 'Lo siento te has quedado sin tiempo.';
    }else{
        writeTime.textContent = `Todavía te quedaban ${time} segundos.`;
    }
    playAgain.textContent = 'JUGAR OTRA VEZ';
    playAgain.classList.add('placeholder');

    showRightQuestions.appendChild(writeResults);
    showRightQuestions.appendChild(writeTime);
    showRightQuestions.appendChild(playAgain);

    playAgain.addEventListener('click', RemoveDiv);
    playAgain.addEventListener('click', anotherPlay);
}

const RemoveDiv = () =>{
    let div = document.querySelector('#questions');
    div.textContent = '';
}

const anotherRound = () => {
    const valueStatus = (x) => x.status !== 0;
    newPassWord.map(function (answer){
        if(answer.status === 0 && waitToCheck === false){

            countQuestion = newPassWord.indexOf(answer);
            waitToCheck = true;
            createQuestions();
        }     
    });
    if(newPassWord.every(valueStatus)){
        finishGame();
    }                 
};

const timer = () => {
    let timer = document.querySelector('#timer');
    time = 180;
    TimeRest = setInterval(function(){
        timer.innerHTML = time;
        time--;
        if(time === -1){
            clearInterval(TimeRest);
            finishGame();
        }
    },1000);
};

const anotherPlay = () => {
    newPassWord = [];
    questions.forEach(function(newPass){
        let getRandom = Math.floor(Math.random() * newPass.question.length);
        newPassWord.push({answer: newPass.answer[getRandom], question: newPass.question[getRandom], status: newPass.status});
    });

    questions.forEach((letter) => {
        let circle = document.querySelector(`#l-${questions.indexOf(letter)}`);
        circle.classList.remove('turnGreen');
        circle.classList.remove('turnRed');
    })
   countQuestion = 0;
   timer();
   createQuestions();
}



pressPlay();
