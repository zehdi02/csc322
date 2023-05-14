import React, { useState } from 'react';

import './ChatBox.css'

function ChatBox() {
  const [chatWindowDisplay, setChatWindowDisplay] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Bot', message: 'Hello! How may I help you?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChatWindowDisplay = () => {
    setChatWindowDisplay(!chatWindowDisplay);
  };

  function filterBadWords(text) {
    const taboolist = ["fuck", "bitch", "shit", "motherfucker", "fucker", "asshole", "cunt","bitch", "nigga"]; 
    const regex = new RegExp(taboolist.join("|"), "gi");
    const cleanText = text.replace(regex, "*****"); 
    return cleanText;
  }
  

  const handleUserInput = (event) => {
    const usermessage = event.target.value;
    const filteredMessage = filterBadWords(usermessage);
  //  if (filteredMessage === "") {return;}
    setUserInput(filteredMessage);
  };

  const handleSendMessage = () => {
    setMessages([...messages, { sender: 'You', message: userInput }]);
    setUserInput('');
  };

  const handleKeyDown = (event) => {
    // Send message if Enter key is pressed
    if (event.keyCode === 13) {
      handleSendMessage();
    }
  };


  return (
    <div id="chat-bot">
      <div id="chat-icon" onClick={toggleChatWindowDisplay}>
        <img src={require('../img/chat_employee.png')} alt="Chat Icon" />
      </div>
      <div id="chat-window" style={{ display: chatWindowDisplay ? 'block' : 'none' }}>
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.sender}: {message.message}</p>
          </div>
        ))}
        <div id="chat-input-container">
          <input type="text" id="chat-input" placeholder="Ask a question..." value={userInput} onChange={handleUserInput} onKeyDown={handleKeyDown} />
          <button id="chat-send-button" onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
