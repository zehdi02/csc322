import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  // count for warning system
  const [count, setCount] = useState(1);

  const taboolist = ["fuck", "bitch", "shit", "motherfucker", "fucker", "asshole", "cunt", "faggot", "bastard", "nigga", "fuc", "stfu", "gtfo"]; 

    //filter for users i.e.. replaces bad words with stars and sends
  function filterBadWords(text) {
    const regex = new RegExp(taboolist.join("|"), "gi");
    const cleanText = text.replace(regex, "*****"); 
    return cleanText;
  }

    //filter for visitors i.e.. cannot send bad words at all
    function Visitorfilter(text) {
      const regex = new RegExp(taboolist.join("|"), "gi");
      const vfiltered = text.replace(regex, ""); 
      return vfiltered;
    }

  // get login status
  const loginstat = localStorage.getItem("LoginStatus");

  const handleUserInput = (event) => {
    const usermessage = event.target.value;
    setUserInput(usermessage);
  };

  const handleSendMessage = () => {
    //if statement to prevent users from sending empty messages
    if (userInput !== ''){
    setMessages([...messages, { sender: 'You', message: userInput }]);
    setUserInput('');

    // if (user is logged in == user is registered) {send bad word in ***s}
    if (loginstat)
    {
      setMessages([...messages, { sender: 'You', message: filterBadWords(userInput) }]);
      setUserInput('');
    }
    
    // else if(user is not logged in == user is not registered) {delete bad word message}
    else
    {
      // if visitor filter goes thru, it means visitor used bad word, so display "cannot send"
      if (Visitorfilter(userInput) === "")
      {
        setMessages([...messages, { sender: <em>System</em>, message: <em>You cannot send that message</em>}])
      }
      // if no bad word, send
      else 
      {
      setMessages([...messages, { sender: 'You', message: Visitorfilter(userInput) }]);
      setUserInput('');
    }}}

    // if user filter detects bad word, output has stars, count++ for warning
    if (filterBadWords(userInput).includes("*****"))
    {
      setCount((prevCount) => prevCount + 1);
      console.log(count);

      //send warning msg
      if (count <= 3)
      {
        setMessages([...messages, { sender: 'You', message: filterBadWords(userInput)}, { sender: <em>System</em>, message: <em>Warning Issued</em>}]);
        setUserInput('');
      }

      //get kicked if warning >3
      if (count > 3)
      {
       navigate('/kicked'); 
      }
    }

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
