import React, { useState, useEffect } from 'react';
import './commentSection.css';

const CommentSection = () => {
  const [commenterName, setCommenterName] = useState('guest');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Save comments to localStorage
  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  // Load comments from localStorage
  const loadCommentsFromLocalStorage = () => {
    const storedComments = localStorage.getItem('comments');
    return storedComments ? JSON.parse(storedComments) : [];
  };

  useEffect(() => {
    // Load comments from localStorage
    const storedComments = loadCommentsFromLocalStorage();
    setComments(storedComments);
  }, []);

  const handleNameChange = (e) => {
    setCommenterName(e.target.value);
    const name = e.target.value.slice(0, 30);
    setCommenterName(name);
  };
  
  // count for warning system
  const [count, setCount] = useState(1);
  const taboolist = ["fuck", "bitch", "shit", "motherfucker", "fucker", "asshole", "cunt", "faggot", "bastard", "nigga", "fuc", "stfu", "gtfo"]; 
  
  //filter for users i.e.. replaces bad words with stars and sends
  function filterBadWords(text) {
    const regex = new RegExp(taboolist.join("|"), "gi");
    const cleanText = text.replace(regex, "*****"); 
    return cleanText;
  }
  
  // get login status
  const loginstat = localStorage.getItem("LoginStatus");

  const handleCommentChange = (e) => {
    const comment = e.target.value;
    if (comment.length <= 500) {
      setNewComment(comment);
    } else {
      setNewComment(comment.slice(0, 500));
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    let errorMessage = '';

    if (newComment !== ''){
      setComments([...comments, { name: commenterName, comment: newComment }]);
      setNewComment('');

    if (loginstat) {
      setComments([...comments, { name: commenterName, comment: filterBadWords(newComment) }]);
      setNewComment('');
    }
    else { 
      errorMessage = 'You must log in to leave comments';
      const emptycomment = [...comments, { name: '', comment: '' }];
      setComments(emptycomment);
      setNewComment('');
    }

    if (newComment.length > 500) {
      errorMessage = 'Comment cannot be more than 500 characters.';
    }
    if (newComment.trim() === '') {
      errorMessage = 'Comment cannot be blank.';
    }}

/*    if (commenterName.length < 3) {
      errorMessage = 'Name must be at least 3 characters long.';
    } else if (newComment.trim() === '') {
      errorMessage = 'Comment cannot be blank.';
    } else if (newComment.length > 500) {
      errorMessage = 'Comment cannot be more than 500 characters.';
    } else if (loginstat) {
      errorMessage = 'You must log in to leave comments';
    } else {
      const updatedComments = [...comments, { name: commenterName, comment: newComment }];
      setComments(updatedComments);
      setNewComment('');

      // Save comments to localStorage
      saveCommentsToLocalStorage(updatedComments);
    }*/

    setErrorMessage(errorMessage);
  };

  return (
    <div>
      <h2 className='heading'>Comments</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleCommentSubmit}>
        <label className="input-label">
          Name:
          <input
            className="name-box"
            type="text"
            value={commenterName}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label className="input-label">
          Comment:
          <textarea
            className="comment-box"
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="500 characters max"

          />
        </label>
        <br />
        <button className= 'sumit-button' type="submit">Add Comment</button>
      </form>
      <div className="comment-section-container">
        <ul className="comment-list">
            {comments.map((comment, index) => (
            <li key={index} className="comment-item">
                <strong>{comment.name}</strong>: {comment.comment}
            </li>
            ))}
        </ul>
       </div>
    </div>
  );
};

export default CommentSection;
