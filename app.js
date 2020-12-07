const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: 'ゆうの彼女の苗字は？',
    answers: [
      '田中',
      '井上',
      '佐藤',
      '斉藤'
    ],
    correct: '佐藤'
  }, {
    
    question: 'ゆうの嫌いな食べ物は？',
    answers: [ 'マヨネーズ', 'ケチャップ', 'あおじそドレッシング', 'バジル'],
    correct: 'マヨネーズ'
  }, 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers [buttonIndex];
    buttonIndex++;
  }
}
//.lengthにすることで柔軟性を生み出す
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert('finish! あなたのスコアは'+score+'/'+quizLength+'です!');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) =>  {
    clickHandler(e);
  });
  handlerIndex++;
}


