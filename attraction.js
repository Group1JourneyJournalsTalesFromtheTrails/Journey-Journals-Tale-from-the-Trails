document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
  
    function moveToSlide(index) {
      const offset = -index * cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    prevButton.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      moveToSlide(currentIndex);
    });
  
    nextButton.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % cards.length;
      moveToSlide(currentIndex);
    });
  });
  