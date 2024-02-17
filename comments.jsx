function addComment() {
  var commentInput = document.getElementById('comment-input').value;
  if (commentInput.trim() !== '') {
    var commentList = document.getElementById('comments-list');
    var newComment = document.createElement('div');
    newComment.textContent = commentInput;
    commentList.appendChild(newComment);
    document.getElementById('comment-input').value = '';
  } else {
    alert('Please enter a comment!');
  }
}