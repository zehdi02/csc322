// Chat icon click event handler
document.getElementById('chat-icon').addEventListener('click', function(event) {
  var chatWindow = document.getElementById('chat-window');
  if (chatWindow.style.display === 'block') {
      chatWindow.style.display = 'none';
  } else {
      chatWindow.style.display = 'block';
  }
  event.stopPropagation(); // Prevent click events from propagating to parent elements
});

// Chat window click event handler
document.getElementById('chat-window').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent click events from propagating to parent elements
});

// Document click event handler
document.addEventListener('click', function() {
  document.getElementById('chat-window').style.display = 'none';
});

// Get chat input element and send button element
const chatInput = document.getElementById('chat-input');
const chatSendButton = document.getElementById('chat-send-button');

// Add click event listener to send button
chatSendButton.addEventListener('click', function() {
    // Get user input from chat input box
    const userInput = chatInput.value;

    // Display user input in chat window
    displayMessage('You', userInput);

    // Clear chat input box
    chatInput.value = '';
});
// Add keydown event listener to chat input
// When user presses "Enter" on their keyboard, message is sent
chatInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Check if Enter key was pressed
      // Get user input from chat input box
      const userInput = chatInput.value;

      // Display user input in chat window
      displayMessage('You', userInput);

      // Clear chat input box
      chatInput.value = '';
  }
});

// Function to display messages in the chat window
function displayMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.textContent = `${sender}: ${message}`;

    // Append the message element to the chat window
    chatMessages.appendChild(messageElement);
}


