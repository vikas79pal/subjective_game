


const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

let currentActiveCard = 0;

//store dom cards
const cardsEl = [];

//store card data
// const cardsData = getCardsData();
const cardsData=[{
    question:'Find the inverse Laplace transform of  3s+4/s^2 + 16',
    answer:'3cos(4t)+sin (4t)'
},
{
    question:'Find the inverse Laplace transform of  4s+12/s^2+8s+12',
    answer:'e^{-2t}+3e^{-6t}'
},
{
    question:'Find the inverse Laplace transform of  (S^2+2s+3)/[(S^2+2s+5 )( S^2+2s+2)]',
    answer:'\frac{e^{-t}\sin(2t)}{3}+\frac{1}{3}e^{-t}\sin(t)'
},
{
    question:'Find the inverse Laplace transform of  (S+2)^2/[(S+2)^2+2^2]',
    answer:'(t)-2e^{-2t}\sin (2t)'
},
{
    question:'e^Find the inverse Laplace transform for  X(s) = ln(s+a/s+b).',
    answer:'e^{-2t}+3e^{-6t}'
},
{
    question:'Find the inverse Laplace transform for  s/[(s+2)^2+1]',
    answer:'e^{-2t}+3e^{-6t}'
},
{
    question:'Find the inverse Laplace transform of X(s) =  s/[s^2a^2+b^2]',
    answer:'e^{-2t}+3e^{-6t}'
},
{
    question:' The inverse Laplace transform of the function f(S) = 1/S (1 + S) is_________________?',
    answer:'(t)-e^{-t}'
},
{
    question:' Find the convolution of f (t) = e −t and g(t) =  sin(t).',
    answer:'e^{-2t}+3e^{-6t}'
},
{
    question:'  Solve the IVP y 00 − 5y 0 + 6y = g(t), y(0) = 0, y 0 (0) = 0.',
    answer:'e^{-2t}+3e^{-6t}'
}
]

//create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}
//create sigle card
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (index === 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
        <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
        <p>${data.answer}</p>
    </div>
</div>
    `;
  card.addEventListener("click", () => card.classList.toggle("show-answer"));
  //add to dom cards
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}
createCards();
//show number of card
function updateCurrentText() {
  currentEl.innerHTML = `${currentActiveCard + 1}/${cardsEl.length}`;
}
//get cards from localstorage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}
//add card to local storage
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}

//event
nextBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card left";
  currentActiveCard = currentActiveCard + 1;
  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});
prevBtn.addEventListener("click", () => {
  cardsEl[currentActiveCard].className = "card right";
  currentActiveCard = currentActiveCard - 1;
  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentText();
});
//show add container
showBtn.addEventListener("click", () => addContainer.classList.add("show"));
//hide add container
hideBtn.addEventListener("click", () => addContainer.classList.remove("show"));

//add new card
// addCardBtn.addEventListener("click", () => {
//   const question = questionEl.value;
//   const answer = answerEl.value;
//   if (question.trim() && answer.trim()) {
//     const newCard = { question, answer };
//     createCards(newCard);
//     questionEl.value = "";
//     answerEl.value = "";
//     addContainer.classList.remove("show");
//     cardsData.push(newCard);
//     setCardsData(cardsData);
//   }
// });
//clear btn
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
  window.location.reload();
});


