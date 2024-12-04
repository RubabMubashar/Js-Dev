// data for cards
const data = [
    { title: "Card 1", description: "Description for Card 1", image: "assets/1.png" },
    { title: "Card 2", description: "Description for Card 2", image: "assets/2.png" },
    { title: "Card 3", description: "Description for Card 3", image: "assets/3.png" },
    { title: "Card 4", description: "Description for Card 4", image: "assets/4.png" },
    { title: "Card 5", description: "Description for Card 5", image: "assets/5.png" },
    { title: "Card 6", description: "Description for Card 6", image: "assets/6.png" },
    { title: "Card 7", description: "Description for Card 7", image: "assets/7.png" },
    { title: "Card 8", description: "Description for Card 8", image: "assets/8.png" },
    { title: "Card 9", description: "Description for Card 9", image: "assets/9.png" },

  ];
  
  let cardsPerPage = 3; // (desktop view)
  let currentPage = 1;
  
  const cardContainer = document.getElementById("card-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const pageInfo = document.getElementById("page-info");
  
  // Adjust cards per page based on screen size
  function adjustCardsPerPage() {
    if (window.innerWidth >= 1024) {
      cardsPerPage = 3; // Desktop
    } else if (window.innerWidth >= 768) {
      cardsPerPage = 2; // Tablet
    } else {
      cardsPerPage = 1; // Mobile
    }
    renderCards(); 
  }
  

  function renderCards() {
    cardContainer.innerHTML = ""; 
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const cards = data.slice(start, end);
  
    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <h2>${card.title}</h2>
        <p>${card.description}</p>
      `;
      cardContainer.appendChild(cardElement);
    });
  
    updatePagination();
  }
  

  function updatePagination() {
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(data.length / cardsPerPage)}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(data.length / cardsPerPage);
  }
  

  prevBtn.addEventListener("click", () => {
    currentPage--;
    renderCards();
  });
  
  nextBtn.addEventListener("click", () => {
    currentPage++;
    renderCards();
  });
  
  
  window.addEventListener("resize", adjustCardsPerPage);
  
  adjustCardsPerPage();

  // Dont Forget To Subscribe My Youtube Channel @thedesigningdev
  