const cards = [...document.querySelectorAll(".question-card")];
let current = 0;

function highlightCard(index) {
  cards.forEach((card, cardIndex) => {
    card.classList.toggle("active-card", cardIndex === index);
  });
  current = index;
}

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => highlightCard(index));
  card.addEventListener("focusin", () => highlightCard(index));
});

setInterval(() => highlightCard((current + 1) % cards.length), 4500);
