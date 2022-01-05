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
    EFPG: {"img": "static/성기훈3.jpg","name": "성기훈(NO.456)", "oneLine": '"잘 들어. 난 말이 아니야. 사람이야. 그래서 궁금해. 너희들이 누군지, 어떻게 사람에게 이런 짓을 할 수 있는지…"',
    "explain":"오징어게임에 참가한 당신, 따뜻한 인간적인 매력과 자유로움을 가진 인물, 성기훈과 닮은 유형입니다. 항상 타인을 즐겁게 만드는 당신의 주변은 친구가 끊이질 않습니다. 또 항상 새로운 시도와 새로운 사람을 만나는 것을 좋아하는 당신은 자유로운 영혼의 소유자입니다. 때때로 창의적인 모습을 보여줘 주변을 놀라게하고는 합니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 낯선 타인과 함께하며 게임에서 분위기를 주도하는 당신. 때로는 당신의 엉뚱함이 게임을 풀어나갈 키가 되기도 할 것입니다. 하지만 너무 사람을 믿지 마십쇼. 아픔은 당신의 몫입니다."},
    ETJB: {"img": "static/조상우.jpg","name": "조상우(NO.218)", "oneLine": '“어차피 우리가 저 돈 가지고 나가려면 다른 놈들 다 죽어야 돼. 형 손에 피 안 묻히게 해줬으면 오히려 고마워해야 되는 거 아니야?”',
    "explain":"오징어게임에 참가한 당신, 팀을 이끌지만 자신의 이익을 위해서라면 한없이 냉정한 인물, 조상우와 비슷한 유형입니다. 천성적으로 타고난 리더인 당신은 자신감과 현명한 모습으로 사람들을 이끌어 왔습니다. 계획적이고, 승부욕이 넘치는 당신은 많은 성공을 거두었지만, 때때로 냉정하다는 소리를 듣고는 합니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 전략적인 사고와 빠른 판단력을 이용해 게임에서 남들을 이끌며, 때로는 자신을 위해 남들을 희생시키며 나아갈 것입니다. 게임에서 무엇보다 자기 자신을 잃지 않도록 조심해야할 것입니다."},
    EFJB: {"img": "static/일남.jpg","name": "오일남(NO.001)", "oneLine": '“아직도… 사람을 믿나?”',
    "explain":"오징어게임에 참가한 당신, 극단적인 상황에서도 홀로 순수하게 게임을 즐기는 어린아이와 같은 노인 오일남과 비슷한 유형입니다. 평소 눈치가 빠르며 센스가 있다는 소리를 듣는 당신은 평소 사람들을 독려하고, 동참시키고 이끄는 사람입니다. 감정적으로 남을 너무나 잘 이해하는 당신은 특유의 매력으로 사람들을 이끕니다. 자신의 신념을 위해 나서는 것을 두려워하지 않습니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 눈치가 빠르고 남들과 잘 공감하는 당신은 점차 변해가는 사람들을 보며 상처를 받을 수도 있습니다. 하지만 순수함이 최고의 무기인 당신은 게임을 잘 풀어나갈 것입니다. 하지만 항상 자신의 비밀을 잘 지키도록 하세요."},
    ITJG: {"img": "static/새벽.jpeg","name": "강새벽(NO.067)", "oneLine": '“당신들 나 믿어? 난 당신들 못 믿는데.”“그러지 마.. 아저씨 그런 사람 아니잖아.”',
    "explain":"오징어게임에 참가한 당신, 냉정하고 이기적인 모습으로 보여지지만 누구보다 여린 마음을 가졌기에 사람들을 밀어내는 인물, 강새벽과 닮은 유형입니다. 대부분 다가가기 어려운 첫인상을 가졌습니다. 내향적이고 자기탐구적인 성향이 강하며 사람들과 만나는 것보다 혼자 있는 것을 좋아하는 당신 혹시 별명이 책벌래? 다가가기 힘들지만, 친해지면 모든 것을 공유하는 당신. 혼자 있는 시간을 즐길 때 행복을 느낍니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 낯선 타인을 믿지 않고 항상 경계하는 당신은 생존할 수 있을 것입니다. 하지만 때로는 사람을 믿어보는 것도 나쁘지 않습니다."},
    ETPB: {"img": "static/장덕수.png","name": "장덕수(NO.101)", "oneLine": '“야 이 xx놈들아! 나 여기서 더 이상 안가! 갈라면 니들 먼저 가!”',
    "explain":"오징어게임에 참가한 당신, 참가자 중 가장 강렬한 인물, 장덕수와 닮은 유형입니다. 당신은 스릴 있는 것을 즐기며, 남의 눈치를 보지 않는 마이웨이입니다. 주변에 일어나는 일에 관심이 많지만 깊게 생각하는 것은 딱 질색이며 경쟁, 내기를 좋아합니다. 긴 설명을 싫어하고 감각적입니다. 누구보다도 현실적이어서 문제를 빠르게 해결하는 당신은 든든한 해결사입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 현실적이고 직관적인 판단력으로 게임에서 승부하는 당신. 남보다는 내가 무엇보다도 중요합니다. 물론 그런 당신을 싫어하는 무리도 있겠습니다만… 이건 이런 게임일 뿐입니다."},
    ETPG: {"img": "static/한미녀.jpg","name": "한미녀(NO.212)", "oneLine": '“니들 지금 실수하는 거야. 니들 정말 나 없이 이길 수 있을 거 같애? 나 한미녀야!”',
    "explain":"오징어게임에 참가한 당신, 목적 달성을 위해서라면 자존심도 기꺼이 버리는 인물, 한미녀와 닮은 유형입니다. 다재 다능한 팔방미인인 당신은 상대방에게 호감을 잘 표현하기도, 잘 사기도 합니다. 당신은 자신감과 자존감이 매우 높습니다. 당신은 타인과 교류는 즐기지만, 정서적인 교류에는 큰 관심이 없고, 때때로 사람들이 귀찮다고 생각이 들기도 합니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다.사람들 사이에서, 강자와 함께 행동하며 항상 이기는 편과 함께할 것입니다. 자기 주장이 강하기에 항상 직설적으로 말하는 당신. 필요하다면 선의의 거짓말을 하는 것이 더 나을 수도 있음을 이 게임을 통해 배울 것입니다."},
    IFPB: {"img": "static/알리.jpg","name": "알리 압둘(NO.199)", "oneLine": '“사장님들 다시 만나서 반갑습니다”',
    "explain":"오징어 게임에 참가한 당신, 위험을 무릅쓰고 타인을 구하는 순수하고 정의로운 마음을 가진 인물, 알리 압둘과 닮은 유형입니다. 당신은 타인의 감정을 살피며 배려하는 것이 익숙합니다. 때로는 손해를 본적도 많지만, 자기 자신을 잘 내세우지 않고 주변을 따라가는 편이며, 착하다는 이야기를 많이 듣습니다. 다른 사람의 불편함을 외면하지 못하는 당신은 선행의 아이콘입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 이기적인 사람들 사이에서, 당신은 끝까지 남을 도우면서 살아남을 수 있을까요? 선행이 항상 선행으로 돌아오지 않는다는 교훈을 당신은 이 게임을 통해 배울 것입니다."},
    IFPG: {"img": "static/지영.jpg","name": "지영(NO.240)", "oneLine": '“너는 여기서 나갈 이유가 있지만, 난 없어”',
    "explain":"오징어게임에 참가한 당신, 염세주의적 시선을 가졌지만, 동시에 매우 순수한 마음씨를 가진 인물, 지영이와 닮은 유형입니다. 이 유형은 낭만적이고 따뜻한 마음을 가졌습니다. 자신이 지향하는 이상에 정열적이고 내적 신념이 깊습니다. 그런 당신은 현실감각이 둔하고 몽상가적 기질이 많습니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 평소 따뜻하고 순수한 마음을 가진 당신은 그런 당신의 여린 모습을 숨기고 사람들 사이에서 버텨야 합니다. 게임에 큰 관심을 가지지 않고, 큰 욕망도 없지만 그런 당신이기에 이 게임에서 살아남을 수 있을 것입니다."},
    ITJB: {"img": "static/프론트맨2.png","name": "프론트맨", "oneLine": '“Front man speaking”',
    "explain":"오징어게임에 참가한 당신, 가면으로 목소리를 숨기고 있지만, 넘치는 카리스마로 게임을 진행하는 최고관리자 프론트맨과 닮은 유형입니다. 당신은 한번 일을 맡으면 모든 책임을 다하고 신중하게 처리하며 계획적인 성격을 가졌습니다. 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며 계획과 원칙을 중요시합니다. 때로는 딱딱하다는 사람들도 있지만, 필요한 말만 할 뿐입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 최고관리자인 당신은 책임감을 가지고 신중하게 게임을 진행할 것입니다. 모든 것은 당신의 통제 하에 있으며, 무슨 일이 있어도 원칙은 지켜질 것입니다. 무슨 일이 있더라도…"},
    ITPG: {"img": "static/황준호.jpg","name": "황준호", "oneLine": '“이 게임에 대해서 네가 아는 거 다 얘기해”',
    "explain":"오징어게임에 참가한 당신, 실종된 형의 행방을 찾아 목숨을 걸고 나서는 경찰, 황준호와 닮은 유형입니다. 관찰력이 뛰어나며 호기심이 많고 탐색하는 것을 좋아합니다. 조용하고 과묵하며 무뚝뚝한 경향이 있지만, 항상 에너지를 천천히 쌓고 있는 중입니다. 침착하지만 때로는 과감하게 움직이는 당신은 냉철한 판단과 실행착오를 통해 앞으로 나아갔을 것입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 게임에 숨어서 형의 행방을 찾고 있는 당신은 침착하지만 과감하게 움직여 단서를 찾을 것입니다. 하지만 진실은 때로는 당신의 예상을 뛰어넘고는 합니다."},
    IFJG: {"img": "static/성기훈 엄마.png","name": "성기훈 엄마", "oneLine": '"치킨 좋아안하나. 닭이나 한 마리 사 먹이고 와."',
    "explain":"오징어게임에 참가한 당신, 가족을 위해 헌신하는 인물, 성기훈엄마와 닮은 유형입니다. 당신은 속이 깊고 섬세한 이타주의자로, 책임감이 강하고 성실하며 매사에 열심히 하는 유형입니다. 타인을 향한 연민과 동정심이 강한 당신은, 여러분의 가족이나 친구를 위해서는 강한 모습을 보여주기도 합니다. 안정성을 최고로 여기며, 꼼꼼하고 겸손한 태도로 모두와 친밀함을 유지하는 당신입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 당신이라면 이런 위험천만한 게임에 참여하지 않겠지만, 이미 참여해버린 몸. 당신의 가족, 친구를 지키기 위해, 모두가 함께 살아남기 위해 노력할 것입니다. 분란을 일으키는 무리는 철저히 배제할 것이지만 말이죠."},
    ETJG: {"img": "static/공유.jpeg","name": "딱지치는 남자", "oneLine": '"선생님, 저랑 게임 한 번 하시겠습니까?"',
    "explain":"오징어게임에 참가한 당신, 오징어게임의 시작을 알리는 인물, 딱지 치는 남자와 닮은 유형입니다. 당신은 사람의 성격을 잘 파악하지만, 실용적이고 현실적인 인물로 능청맞다는 이야기를 듣기도 합니다. 리더쉽이 있고, 조직적이고 무게감이 있는 모습을 보여주기도 하지만 스스로에게 엄격하고 현실적인 유형이기도 합니다. 본인의 배려를 주변에게 보여주기도 하는 사회생활 고수인 당신입니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 당신은 이 게임에 들어올 사람들을 하나씩 설득해야 합니다. 눈웃음과 사람을 다루는 능력, 출중한 게임 실력까지 모두 갖춘 당신. 웃음 뒤에 감춰진 모습으로 사람들을 현혹하고 모으는 당신이 이제 게임의 시작을 알립니다."},
    IFJB: {"img": "static/진행요원.jpg","name": "진행요원", "oneLine": '"이자리에 오신 여러분을 진심으로 환영합니다."',
    "explain":"오징어게임에 참가한 당신, 가면으로 신원을 가리고 주어진 역할을 묵묵히 수행하는 진행요원과 닮은 유형입니다. 당신은 눈치가 빠르고 통찰력, 영감이 뛰어난 사람입니다. 사람에 대한 통찰력이 뛰어나기에 남을 잘 의식하는 편입니다. 또 계획을 중요시하며 계획을 지키는 것과 원칙을 중요하게 생각합니다. 낯가림이 심하기 때문에 타인을 만나는 것을 싫어하는 편입니다. 이제 당신은 오징어게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 진행 요원으로서 주어진 역할을 묵묵히 수행하며, 모든 규칙을 준수해야 합니다. 가면을 벗지 말고, 감정도 드러내지 마십쇼. 그렇지 않으면 끔찍한 처벌만이 당신을 기다릴 뿐입니다. 당신도 그저 게임의 일부일 뿐입니다."},
    EFPB: {"img": "static/첫사망자.jpg","name": "최초 탈락자(NO.324)", "oneLine": '“내기할래? 누가 먼저 골인하나? 100만원 빵 콜!”',
    "explain":"오징어게임에 참가한 당신, 첫번째 게임에서 가장 먼저 달려나가지만 최초로 탈락하는 인물, 324번 참가자와 닮은 유형입니다. 어떠한 상황에서도 에너지가 넘치는 낙관 주의자로, 매사에 즐거워하고 심각한 상황에도 여유가 있습니다. 새로운 시도에 거리낌이 없는 당신은 어디를 가든 분위기 메이커이며 재치 있는 성격으로 친구가 많습니다. 가벼운 이미지로 오해를 받기도 하지만 비교도 안 되는 매력으로 남들을 끌어당깁니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 과감한 움직임과 스포트라이트를 즐기는 당신! 괜찮습니다. 뭐 즐거웠으면 됐죠!"},
    ITPB: {"img": "static/vip.jpg","name": "VIP", "oneLine": '"아무리 중계를 잘해도 직접 관람하는 재미를 이길수는 없지"',
    "explain":"오징어게임에 참가한 당신, 가면 뒤에 숨어서 사람들을 지켜보는 유형인 VIP와 닮은 유형입니다. 당신은 평범함을 거부하며, 당신의 독특한 관심분야와 호기심을 즐깁니다. 또 이것에 나름의 자부심이 있기도 합니다. 이런저런 몽상에 사로잡혀 있는 것이 대부분이며, 가장 합리적으로 사고하고 생각하지만, 가장 감정적이기도 한 당신입니다. 평소 여유롭고, 편안한 상태의 당신이지만, 상대방으로부터 비판을 받는 경우에는 쉽게 흥분하고는 합니다. 개인의 취향이 확실하여 호불호가 뚜렷한 편에 속합니다. 그런 당신은 그런 독특함을 통해 성공하였고, VIP가 되어 지금 이 자리에 있습니다. 이제 당신은 오징어 게임에서 VIP답게 열심히 즐기시면 됩니다. 모든 것은 당신 아래에 있으며, 규칙 또한 그 예외는 아닙니다."},
    EFJG: {"img": "static/노상훈.png","name": "노상훈(NO.119)", "oneLine": '"너같이 어린 놈이.... 왜 이렇게 된 거야..."',
    "explain":"오징어게임에 참가한 당신, 평소 동정심이 많고, 앞서서 불의에 맞설 수 있는 인물, 노상훈과 닮은 유형입니다. 당신은 평소 사회성이 풍부하며 정이 많아 사람들을 좋아하는 사람입니다. 다른 사람들을 평소에 잘 도와주고 사람에 관련된 일은 냉철하게 판단하기 어려워합니다. 또한 타인의 말에 쉽게 마음의 상처를 받는 여린 마음의 소유자이기도 합니다. 이제 당신은 오징어 게임에서 그런 당신의 특성을 활용하여 살아남아야 합니다. 정이 많은 당신은 게임의 승리자에게 보다 탈락자에 더 마음이 갈 것입니다. 하지만 그런 마음은 잠시 내려놓고 냉정하게 판단해야 합니다. 그렇지 않으면 다음 탈락자는 당신이 될 것입니다."},
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
    resultPage.style.display ='flex';
    questionPage.style.display ='none';
    startPage.style.display='none';
}
function mbtiResult(){
    let value1 = document.querySelector("#EI").value;
    let value2 = document.querySelector("#FT").value;
    let value3 = document.querySelector("#PJ").value;
    let value4 = document.querySelector("#SN").value;
    let mbti = "";
    value1 >=2 ? mbti+="E" : mbti +="I";
    value2 >=2 ? mbti+="F" : mbti +="T";
    value3 >=2 ? mbti+="P" : mbti +="J";  
    value4 >=2 ? mbti+="S" : mbti +="N";
    changeAnswer(mbti); 
}

function changeAnswer(mbti){
    console.log(mbti);
    console.log(resultList[mbti]["img"]);    
    resultImg.setAttribute("src",`${resultList[mbti]["img"]}`);
    resultName.innerHTML= resultList[mbti]["name"];
    resultOneLine.innerHTML= resultList[mbti]["oneLine"];
    resultExplain.innerHTML= resultList[mbti]["explain"];
}

function changeQuestion(e){
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