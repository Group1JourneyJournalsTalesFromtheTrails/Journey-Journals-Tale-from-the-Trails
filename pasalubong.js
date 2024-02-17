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
  // Function to add a new comment
  function addComment() {
    var commentInput = document.getElementById('comment-input').value;
    if (commentInput.trim() !== '') {
      var commentList = document.getElementById('comments-list');
      var newCommentBox = document.createElement('div');
      newCommentBox.classList.add('comment-box');
  
      var reviewBox = document.createElement('div');
      reviewBox.classList.add('review-box');
      var anonymousText = document.createElement('p');
      anonymousText.textContent = 'Anonymous Review';
      reviewBox.appendChild(anonymousText);
      
      var commentText = document.createElement('p');
      commentText.textContent = commentInput;
  
      var thumbsUp = document.createElement('button');
      thumbsUp.textContent = '👍';
      thumbsUp.classList.add('reaction');
      thumbsUp.addEventListener('click', function() {
        reactToComment(newCommentBox, 'thumbs-up');
      });
  
      var thumbsDown = document.createElement('button');
      thumbsDown.textContent = '👎';
      thumbsDown.classList.add('reaction');
      thumbsDown.addEventListener('click', function() {
        reactToComment(newCommentBox, 'thumbs-down');
      });
  
      var reactions = document.createElement('div');
      reactions.classList.add('reactions');
      reactions.appendChild(thumbsUp);
      reactions.appendChild(thumbsDown);
  
      var reactionCount = document.createElement('span');
      reactionCount.textContent = 'Reactions: 0';
      reactions.appendChild(reactionCount);
  
      newCommentBox.appendChild(reviewBox);
      newCommentBox.appendChild(commentText);
      newCommentBox.appendChild(reactions);
  
      commentList.appendChild(newCommentBox);
      document.getElementById('comment-input').value = '';
    } else {
      alert('Please enter a comment!');
    }
  }
  function reactToComment(commentBox, reactionType) {
    // Check if the comment box has already been reacted to
    if (commentBox.dataset.reacted === 'true') {
        // If already reacted, return without performing any action
        return;
    }

    var reactionCount = commentBox.querySelector('.reactions span');
    var currentCount = parseInt(reactionCount.textContent.split(':')[1].trim(), 10);
  
    if (reactionType === 'thumbs-up') {
        currentCount++;
    } else if (reactionType === 'thumbs-down') {
        currentCount--;
    }
  
    reactionCount.textContent = 'Reactions: ' + currentCount;

    // Set the reacted attribute to true to prevent further reactions
    commentBox.dataset.reacted = 'true';

    // Remove event listeners from reaction buttons
    var reactionButtons = commentBox.querySelectorAll('.reaction');
    reactionButtons.forEach(function(button) {
        button.removeEventListener('click', handleReaction);
    });
}
