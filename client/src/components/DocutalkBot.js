import React, { useEffect } from 'react';

const ChatbotComponent = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/docutalk/embed@latest/index.js';
      script.setAttribute('data-bot-id', 'clhqa8gw800wzgggqah7ejie0');
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="chatbot-container"></div>;
  };
  
  export default ChatbotComponent;
  