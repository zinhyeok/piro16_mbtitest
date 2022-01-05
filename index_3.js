const questionList = { 
    1: {"qnum": "Q1", "question": "1번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    2: {"qnum": "Q2", "question": "2번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답", "ans1Value1":"P","ans1Value1":"J","ans1Value1":"J"},
    3: {"qnum": "Q3", "question": "3번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    4: {"qnum": "Q4", "question": "4번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    5: {"qnum": "Q5", "question": "5번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    6: {"qnum": "Q6", "question": "6번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    7: {"qnum": "Q7", "question": "7번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    8: {"qnum": "Q8", "question": "8번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    9: {"qnum": "Q9", "question": "9번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
    10: {"qnum": "Q10", "question": "10번문제", 
    "ans1":"1번 답", 
    "ans2":"2번 답", 
    "ans3":"3번 답","ans1Value1":"P","ans1Value1":"J","ans1Value1":"J",},
  
}

const startButton = document.querySelector("#startButton"); 
const startImg = document.querySelector(".startImg");
const startPage = document.querySelector(".startPage");
const questionPage = document.querySelector(".questionPage");
const resultPage = document.querySelector(".resultPage")

const qnum = document.querySelector("#qnum")
const question = document.querySelector("#question")
const ans1Btn = document.querySelector("#ans1");
const ans2Btn = document.querySelector("#ans2");
const ans3Btn = document.querySelector("#ans3");


let num = 1;

function progressbar(){
    const progressbar = document.querySelector(".progress-bar");
    let progressStyle = progressbar.setAttribute('style',`width: calc(100/10*${num}%)`); 
}

function displayQuestion(e){
    questionPage.style.display ='flex';
    resultPage.style.display='none';
    startPage.style.display='none';
}

function changeQuestion(e){
    if (num == 11){
        pass
    }
    else{
    progressbar();
    qnum.innerHTML= questionList[num]["qnum"];
    question.innerHTML= questionList[num]["question"];
    ans1Btn.innerHTML=questionList[num]["ans1"];
    ans2Btn.innerHTML=questionList[num]["ans2"];
    ans3Btn.innerHTML=questionList[num]["ans3"];
    }
    num++;
}

function countValue(clicked_id){
    const clickedBtn = document.getElementById(clicked_id);
    if(clickedBtn.value1 == "E"){
        let preValue = document.querySelector("#EI").value;
        document.querySelector("#EI").value = parseInt(preValue)+1;
    }
    if(clickedBtn.value1 == "P"){
        let preValue = document.querySelector("#PJ").value;
        document.querySelector("#PJ").value = parseInt(preValue)+1;
    }
    if(clickedBtn.value1 == "F"){
        let preValue = document.querySelector("#FT").value;
        document.querySelector("#FT").value = parseInt(preValue)+1;
    }
    if(clickedBtn.value1 == "S"){
        let preValue = document.querySelector("#SN").value;
        document.querySelector("#SN").value = parseInt(preValue)+1;
    }
    }

function init(){
    startButton.addEventListener("click", displayQuestion);
    ans1Btn.addEventListener("click", changeQuestion);
    ans2Btn.addEventListener("click", changeQuestion);
    ans3Btn.addEventListener("click", changeQuestion);
}

init();