const startButton = document.querySelector("#startButton"); 
const startImg = document.querySelector(".startImg");
const startPage = document.querySelector(".startPage");
const questionPage = document.querySelector(".questionPage");
const resultPage = document.querySelector(".resultPage")

function displayQuestion(e){
    questionPage.style.display ='flex';
    resultPage.style.display='none';
    startPage.style.display='none';
}


function init(){
    startButton.addEventListener("click", displayQuestion);
}

init();