const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")

//クイズの内容
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！",
]

//クイズの内容２
//const feedbacks2 = ["勝ち！", "残念！", "残念！"]

const choose = function (c) {
  feedback.textContent = feedbacks[c]
}

//選択肢の関数（？）
//const choose2 = function (c) {
//feedback.textContent = feedbacks2[c]
//}

choice1.onclick = function () {
  choose("0")
}
choice2.onclick = function () {
  choose("1")
}
choice3.onclick = function () {
  choose("2")
}

//クイズの表示に関する内容
// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

//クイズの表示に関する内容２

const quiz2 = {
  text: "ジャンケンに勝ってください",
  image: "Two.jpeg",
  choices2: [
    {
      text: "グー",
      feedback: "勝ち！",
    },
    {
      text: "チョキ",
      feedback: "残念！",
    },
    {
      text: "パー",
      feedback: "残念！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()

//ボタンを押して変換
nextQuiz.onclick = function () {
  quizText.textContent = "Q. " + quiz2.text

  // 画像を表示
  quizImage.src = "./images/" + quiz2.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz2.choices2[0].text
  choice2.textContent = quiz2.choices2[1].text
  choice3.textContent = quiz2.choices2[2].text
}
