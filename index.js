const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');

let score = Number(localStorage.getItem('score'));

if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What si ${num1} multiply by ${num2}?`;

const correct = num1*num2;

formEl.addEventListener('submit',()=>{
    const userInput = Number(inputEl.value);
    if(userInput === correct){
       score++;
       Storage();
    }else{
        score=0;
        Storage();
    }
});

function Storage(){
    localStorage.setItem('score',JSON.stringify(score));
}
