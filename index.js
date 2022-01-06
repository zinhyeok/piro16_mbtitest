const questionList = { 
    1: {"qnum": "Q1", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"P","ans1Value2":"0",
    "ans2Value1":"J","ans2Value2":"0",
    "ans3Value1":"J","ans3Value2":"0"},
    2: {"qnum": "Q2", "question": "2질문", 
    "ans1":"2-1", 
    "ans2":"2-2", 
    "ans3":"2-3",
    "ans1Value1":"F","ans1Value2":"G",
    "ans2Value1":"T","ans2Value2":"B",
    "ans3Value1":"F","ans3Value2":"G"},
    3: {"qnum": "Q3", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"E","ans1Value2":"0",
    "ans2Value1":"E","ans2Value2":"0",
    "ans3Value1":"I","ans3Value2":"0"},
    4: {"qnum": "Q4", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"F","ans1Value2":"0",
    "ans2Value1":"T","ans2Value2":"0",
    "ans3Value1":"F","ans3Value2":"0"},
    5: {"qnum": "Q5", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"E","ans1Value2":"0",
    "ans2Value1":"I","ans2Value2":"0",
    "ans3Value1":"I","ans3Value2":"0"},
    6: {"qnum": "Q6", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"P","ans1Value2":"G",
    "ans2Value1":"J","ans2Value2":"B",
    "ans3Value1":"J","ans3Value2":"G"},
    7: {"qnum": "Q7", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"F","ans1Value2":"G",
    "ans2Value1":"F","ans2Value2":"B",
    "ans3Value1":"T","ans3Value2":"B"},
    8: {"qnum": "Q8", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"P","ans1Value2":"0",
    "ans2Value1":"J","ans2Value2":"0",
    "ans3Value1":"P","ans3Value2":"0"},
    9: {"qnum": "Q9", "question": "1질문", 
    "ans1":"1-1", 
    "ans2":"1-2", 
    "ans3":"1-3",
    "ans1Value1":"E","ans1Value2":"0",
    "ans2Value1":"I","ans2Value2":"0",
    "ans3Value1":"I","ans3Value2":"0"},
    10: {"qnum": "Q10", "question": "길을 가던 중 발견한 명함에는 ○△□가 적혀있다. 나는", 
    "ans1":"게임에 참여한다", 
    "ans2":"게임에 참여한다", 
    "ans3":"게임에 참여한다",
    "ans1Value1":"0","ans1Value2":"0",
    "ans2Value1":"0","ans2Value2":"0",
    "ans3Value1":"0","ans3Value2":"0"},
}

const resultList = {
    EFPG: {"img": "static/성기훈3.jpg","name": "성기훈(NO.456)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ETJB: {"img": "static/조상우.jpg","name": "조상우(NO.218)","oneLine": '"1줄 설명"',
    "explain":"설명"},
    EFJB: {"img": "static/일남.jpg","name": "오일남(NO.001)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ITJG: {"img": "static/새벽.jpeg","name": "강새벽(NO.067)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ETPB: {"img": "static/장덕수.png","name": "장덕수(NO.101)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    
    IFPB: {"img": "static/알리.jpg","name": "알리 압둘(NO.199)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    IFPG: {"img": "static/지영.jpg","name": "지영(NO.240)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ITJB: {"img": "static/프론트맨2.png","name": "프론트맨","oneLine": '"1줄 설명"',
    "explain":"설명"},
    ITPG: {"img": "static/황준호.jpg","name": "황준호","oneLine": '"1줄 설명"',
    "explain":"설명"},
    IFJG: {"img": "static/성기훈 엄마.png","name": "성기훈 엄마", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ETJG: {"img": "static/공유.jpeg","name": "딱지치는 남자", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    IFJB: {"img": "static/진행요원.jpg","name": "진행요원", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    EFPB: {"img": "static/첫사망자.jpg","name": "최초 탈락자(NO.324)", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    ITPB: {"img": "static/vip.jpg","name": "VIP", "oneLine": '"1줄 설명"',
    "explain":"설명"},
    EFJG: {"img": "static/노상훈.png","name": "노상훈(NO.119)", "oneLine": '"1줄 설명"',
    "explain":"설명"}
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
const resultImg = document.querySelector("#resultImg");
const resultName = document.querySelector("#resultName");
const resultOneLine = document.querySelector("#resultOneLine");
const resultExplain = document.querySelector("#resultExplain");

let num = 1;

function displayQuestion(e){
    questionPage.style.display ='flex';
    resultPage.style.display='none';
    startPage.style.display='none';
    changeQuestion();
}

function displayResult(){
    resultPage.style.display ='flex';
    questionPage.style.display ='none';
    startPage.style.display='none';
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
    if(clickedBtn.value2 == "G"){
        let preValue = document.querySelector("#GB").value;
        document.querySelector("#GB").value = parseInt(preValue)+1;
    }
    }

function progressbar(){
    const progressbar = document.querySelector(".progress-bar");
    let progressStyle = progressbar.setAttribute('style',`width: calc(100/10*${num}%)`); 
}

function mbtiResult(){
    let value1 = document.querySelector("#EI").value;
    let value2 = document.querySelector("#FT").value;
    let value3 = document.querySelector("#PJ").value;
    let value4 = document.querySelector("#GB").value;
    let mbti = "";
    value1 >=2 ? mbti+="E" : mbti +="I";
    value2 >=2 ? mbti+="F" : mbti +="T";
    value3 >=2 ? mbti+="P" : mbti +="J";  
    value4 >=2 ? mbti+="G" : mbti +="B";
    changeAnswer(mbti); 
}

function changeAnswer(mbti){
    resultImg.setAttribute("src",`${resultList[mbti]["img"]}`);
    resultName.innerHTML= resultList[mbti]["name"];
    resultOneLine.innerHTML= resultList[mbti]["oneLine"];
    resultExplain.innerHTML= resultList[mbti]["explain"];
}

function changeQuestion(e){
    num++;
    if (num == 11){
        displayResult();
        mbtiResult();
    }
    else{
    progressbar();
    qnum.innerHTML= questionList[num]["qnum"];
    question.innerHTML= questionList[num]["question"];
    ans1Btn.innerHTML=questionList[num]["ans1"];
    ans2Btn.innerHTML=questionList[num]["ans2"];
    ans3Btn.innerHTML=questionList[num]["ans3"];
    ans1Btn.value1=questionList[num]["ans1Value1"];
    ans1Btn.value2=questionList[num]["ans1Value2"];
    ans2Btn.value1=questionList[num]["ans2Value1"];
    ans2Btn.value2=questionList[num]["ans2Value2"];
    ans3Btn.value1=questionList[num]["ans3Value1"];
    ans3Btn.value2=questionList[num]["ans3Value2"];
    countValue;
    }

}
function onMouseOver() {
    startImg.setAttribute("src", "./static/시작하기.png");
 }
function onMouseOut() {
    startImg.setAttribute("src", "./static/ㅇㅅㅁ.png");
 }

function init(){
    startButton.addEventListener("click", displayQuestion);
    startButton.addEventListener("mouseover", onMouseOver);
    startButton.addEventListener("mouseout", onMouseOut);
    ans1Btn.addEventListener("click", changeQuestion);
    ans2Btn.addEventListener("click", changeQuestion);
    ans3Btn.addEventListener("click", changeQuestion);
}

init();
