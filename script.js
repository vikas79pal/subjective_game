const cardsContainer = document.getElementById(&quot;cards-container&quot;);
const prevBtn = document.getElementById(&quot;prev&quot;);
const nextBtn = document.getElementById(&quot;next&quot;);
const currentEl = document.getElementById(&quot;current&quot;);
const showBtn = document.getElementById(&quot;show&quot;);
const hideBtn = document.getElementById(&quot;hide&quot;);
const questionEl = document.getElementById(&quot;question&quot;);
const answerEl = document.getElementById(&quot;answer&quot;);
const addCardBtn = document.getElementById(&quot;add-card&quot;);
const clearBtn = document.getElementById(&quot;clear&quot;);
const addContainer = document.getElementById(&quot;add-container&quot;);
let currentActiveCard = 0;
//store dom cards
const cardsEl = [];
//store card data
// const cardsData = getCardsData();
const cardsData=[{
    question:&#39;Find the inverse Laplace transform of  3s+4/s^2 + 16&#39;,
    answer:&#39;A letter , $ _&#39;
},
{
    question:&#39;Find the inverse Laplace transform of  4s+12/s^2+8s+12&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39;Find the inverse Laplace transform of  (S^2+2s+3)/[(S^2+2s+5 )( S^2
+2s+2)]&#39;,
    answer:&#39;thisIsAVariable&#39;
},
{
    question:&#39;Find the inverse Laplace transform of  (S+2)^2/[(S+2)^2+2^2]&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39;e^Find the inverse Laplace transform for  X(s) = ln(s+a/s+b).&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39;Find the inverse Laplace transform for  s/[(s+2)^2+1]&#39;,
    answer:&#39;container for a piece of data&#39;
},
{

    question:&#39;Find the inverse Laplace transform of X(s) =  s/[s^2a^2+b^2]&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39; The inverse Laplace transform of the function f(S) = 1/S (1 + S) i
s_________________?&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39; Find the convolution of f (t) = e −t and g(t) =  sin(t).&#39;,
    answer:&#39;container for a piece of data&#39;
},
{
    question:&#39;  Solve the IVP y 00 − 5y 0 + 6y = g(t), y(0) = 0, y 0 (0) = 0.&#39;,
    answer:&#39;container for a piece of data&#39;
}
]
//create all cards
function createCards() {
  cardsData.forEach((data, index) =&gt; createCard(data, index));
}
//create sigle card
function createCard(data, index) {
  const card = document.createElement(&quot;div&quot;);
  card.classList.add(&quot;card&quot;);
  if (index === 0) {
    card.classList.add(&quot;active&quot;);
  }
  card.innerHTML = `
    &lt;div class=&quot;inner-card&quot;&gt;
    &lt;div class=&quot;inner-card-front&quot;&gt;
        &lt;p&gt;${data.question}&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;inner-card-back&quot;&gt;
        &lt;p&gt;${data.answer}&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
    `;
  card.addEventListener(&quot;click&quot;, () =&gt; card.classList.toggle(&quot;show-answer&quot;));
  //add to dom cards
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}

createCards();
//show number of card
function updateCurrentText() {
  currentEl.innerHTML = `${currentActiveCard + 1}/${cardsEl.length}`;
}
//get cards from localstorage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem(&quot;cards&quot;));
  return cards === null ? [] : cards;
}
//add card to local storage
function setCardsData(cards) {
  localStorage.setItem(&quot;cards&quot;, JSON.stringify(cards));
  window.location.reload();
}

//event
nextBtn.addEventListener(&quot;click&quot;, () =&gt; {
  cardsEl[currentActiveCard].className = &quot;card left&quot;;
  currentActiveCard = currentActiveCard + 1;
  if (currentActiveCard &gt; cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }
  cardsEl[currentActiveCard].className = &quot;card active&quot;;
  updateCurrentText();
});
prevBtn.addEventListener(&quot;click&quot;, () =&gt; {
  cardsEl[currentActiveCard].className = &quot;card right&quot;;
  currentActiveCard = currentActiveCard - 1;
  if (currentActiveCard &lt; 0) {
    currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = &quot;card active&quot;;
  updateCurrentText();
});
//show add container
showBtn.addEventListener(&quot;click&quot;, () =&gt; addContainer.classList.add(&quot;show&quot;));
//hide add container
hideBtn.addEventListener(&quot;click&quot;, () =&gt; addContainer.classList.remove(&quot;show&quot;));
//add new card
// addCardBtn.addEventListener(&quot;click&quot;, () =&gt; {
//   const question = questionEl.value;
//   const answer = answerEl.value;

//   if (question.trim() &amp;&amp; answer.trim()) {
//     const newCard = { question, answer };
//     createCards(newCard);
//     questionEl.value = &quot;&quot;;
//     answerEl.value = &quot;&quot;;
//     addContainer.classList.remove(&quot;show&quot;);
//     cardsData.push(newCard);
//     setCardsData(cardsData);
//   }
// });
//clear btn
clearBtn.addEventListener(&quot;click&quot;, () =&gt; {
  localStorage.clear();
  cardsContainer.innerHTML = &quot;&quot;;
  window.location.reload();
});
