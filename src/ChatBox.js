import React from 'react'

export default function ChatBox() {
  return (
    <div id="chat-bot">
                <div id="chat-icon">
                <img src="img/chat_employee.png" alt="Chat Icon"/>
                </div>
                <div id="chat-window">
                    <div className="message received">
                        <p>Hello! How may I help you?</p>
                    </div>
                    <div id="chat-messages"></div>
                    <div id="chat-input-container">
                        <input type="text" id="chat-input" placeholder="Ask a question..."/>
                        <button id="chat-send-button">Send</button>
                    </div>
                </div>
            </div>
  )
}
