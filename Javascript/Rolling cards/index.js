const container = document.getElementById("container");

const CARD_HEIGHT = 60;
const CARD_GAP = 10;
const SCROLL_SPEED = 1;
const TOTAL_CARDS = 15;

const cards = [];

for (let i = 0; i < TOTAL_CARDS; i++) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.textContent = getRandomNumber();
  container.appendChild(cardElement);

  cards.push({ el: cardElement, y: i * (CARD_HEIGHT + CARD_GAP) });
}

function animate() {
  for (let card of cards) {
    card.y += SCROLL_SPEED;
    card.el.style.transform = `translateY(${card.y}px)`;
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (card.y > container.clientHeight) {
      const topMostCard = cards.reduce((a, b) => (a.y < b.y ? a : b));
      card.y = topMostCard.y - CARD_HEIGHT - CARD_GAP;
      card.el.textContent = getRandomNumber();
    }
  }

  requestAnimationFrame(animate);
}

function getRandomNumber() {
  return Math.round(Math.random() * 101);
}

animate();
