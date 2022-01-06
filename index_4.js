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

const resultList = {
    ENFP: {"img": "static/성기훈3.jpg","name": "성기훈(NO.456)", "oneLine": '"잘 들어. 난 말이 아니야. 사람이야. 그래서 궁금해. 너희들이 누군지, 어떻게 사람에게 이런 짓을 할 수 있는지…"',
    "explain":"성기훈 설명"},
    ESTJ: {"img": "static/조상우.jpg","name": "조상우(NO.218)", "oneLine": '“어차피 우리가 저 돈 가지고 나가려면 다른 놈들 다 죽어야 돼. 형 손에 피 안 묻히게 해줬으면 오히려 고마워해야 되는 거 아니야?”',
    "explain":"조상우설명"},
    ENFJ: {"img": "static/일남.jpg","name": "오일남(NO.001)", "oneLine": '“아직도… 사람을 믿나?”',
    "explain":"이러다 다 죽어~"},
    ISTJ: {"img": "static/새벽.jpeg","name": "강새벽(NO.067)", "oneLine": '“당신들 나 믿어? 난 당신들 못 믿는데.”“그러지 마.. 아저씨 그런 사람 아니잖아.”',
    "explain":"새벽이 온다~"},
    ENTP: {"img": "static/장덕수.png","name": "장덕수(NO.101)", "oneLine": '“야 이 xx놈들아! 나 여기서 더 이상 안가! 갈라면 니들 먼저 가!”',
    "explain":"깡패 스타일"},
    ESTP: {"img": "static/한미녀.jpg","name": "한미녀(NO.212)", "oneLine": '“니들 지금 실수하는 거야. 니들 정말 나 없이 이길 수 있을 거 같애? 나 한미녀야!”',
    "explain":"미녀는 한미녀야."},
    ISFP: {"img": "static/알리.jpg","name": "알리 압둘(NO.199)", "oneLine": '“사장님들 다시 만나서 반갑습니다”',
    "explain":"알리알리 알라숑"},
    INFP: {"img": "static/지영.jpg","name": "지영(NO.240)", "oneLine": '“너는 여기서 나갈 이유가 있지만, 난 없어”',
    "explain":"지영 설명"},
    ISTJ: {"img": "static/프론트맨2.png","name": "프론트맨", "oneLine": '“Front man speaking”',
    "explain":"모히또 가서 몰디브 한잔?"},
    INTP: {"img": "static/황준호.jpg","name": "황준호", "oneLine": '“이 게임에 대해서 네가 아는 거 다 얘기해”',
    "explain":"황준호 설명"},
    ISFJ: {"img": "static/성기훈 엄마.png","name": "성기훈 엄마", "oneLine": '"치킨 좋아안하나. 닭이나 한 마리 사 먹이고 와."',
    "explain":"치킨은 황올"},
    ENTJ: {"img": "static/공유.jpeg","name": "딱지치는 남자", "oneLine": '"선생님, 저랑 게임 한 번 하시겠습니까?"',
    "explain":"지은탁..."},
    ISFJ: {"img": "static/진행요원.jpg","name": "진행요원", "oneLine": '"이자리에 오신 여러분을 진심으로 환영합니다."',
    "explain":"개미는 뚠뚠"},
    ESFP: {"img": "static/첫사망자.jpg","name": "최초 탈락자(NO.324)", "oneLine": '“내기할래? 누가 먼저 골인하나? 100만원 빵 콜!”',
    "explain":"죽었당"},
    INTP: {"img": "static/vip.jpg","name": "VIP", "oneLine": '"아무리 중계를 잘해도 직접 관람하는 재미를 이길수는 없지"',
    "explain":"부자다"},
    ESFJ: {"img": "static/노상훈.png","name": "노상훈(NO.119)", "oneLine": '"너같이 어린 놈이.... 왜 이렇게 된 거야..."',
    "explain":"노상훈 설명"},
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

function progressbar(){
    const progressbar = document.querySelector(".progress-bar");
    let progressStyle = progressbar.setAttribute('style',`width: calc(100/10*${num}%)`); 
}

function displayQuestion(e){
    questionPage.style.display ='flex';
    resultPage.style.display='none';
    startPage.style.display='none';
}

function displayResult(){
    questionPage.style.display ='none';
    resultPage.style.display='flex';
    startPage.style.display='none';
}

function mbtiResult(){

    let value1 = document.querySelector("#EI").value;
    let value2 = document.querySelector("#SN").value;
    let value3 = document.querySelector("#FT").value;
    let value4 = document.querySelector("#PJ").value;
    
    let mbti = "";

    value1 >=2 ? mbti+="E" : mbti +="I";
    value2 >=2 ? mbti+="S" : mbti +="N";
    value3 >=2 ? mbti+="F" : mbti +="T";
    value4 >=2 ? mbti+="P" : mbti +="J";  
    
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
    }
    
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