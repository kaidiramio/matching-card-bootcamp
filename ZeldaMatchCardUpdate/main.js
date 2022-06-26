const container = document.querySelector('.container')
const cards = document.querySelectorAll('.card')


let prevFlippedCard = null

function generateRandomCards() {

  let zeldaCards = ['princess', 'sheik', 'navi', 'ganondorf', 'link']
  return zeldaCards[Math.floor(Math.random() * zeldaCards.length)]
}

function assignCard() {
  const assigned = {}
  for (let i = 0; i < cards.length; i++) {
    let cardImg = generateRandomCards()
    while (assigned[cardImg] >= 2) cardImg = generateRandomCards()
    assigned[cardImg] = assigned[cardImg] ? assigned[cardImg] + 1 : 1
    cards[i].classList.add(cardImg)
  }
}


function flipCard(event) {
  if (event.target.classList.contains('hidden')) {
    event.target.classList.toggle('hidden')
    prevFlippedCard
      ? checkMatch(prevFlippedCard, event.target)
      : prevFlippedCard = event.target
  }
}

function checkMatch(firstCard, secondCard) {
    if (firstCard.className !== secondCard.className) {
    setTimeout(()=>{
       firstCard.classList.toggle('hidden')
      secondCard.classList.toggle('hidden') 
    },800)  
              
  }

  prevFlippedCard = null
}

assignCard() 

container.addEventListener('click', flipCard)