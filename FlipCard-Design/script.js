const cardContainer = document.getElementById('cardContainer');

const cardData = [
  { img: 'assets/1.jpg', backText: 'Goldie' },
  { img: 'assets/2.jpg', backText: 'Pirat' },
  { img: 'assets/3.jpg', backText: 'Meow' },
  { img: 'assets/4.jpg', backText: 'Pokiyo' },
  { img: 'assets/5.jpg', backText: 'Whisper' }
];

cardData.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  const img = document.createElement('img');
  img.src = data.img;
  img.alt = 'Card Front';
  cardFront.appendChild(img);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  cardBack.textContent = data.backText;

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  cardContainer.appendChild(card);
});
