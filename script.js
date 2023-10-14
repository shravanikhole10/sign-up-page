// JavaScript functionality for creating new chat and displaying messages
const newChatButton = document.querySelector('.new-chat-button');
const chatList = document.querySelector('.chat-list');
const messageDisplay = document.querySelector('.message-display');
const messageInput = document.getElementById('message-input');
const sendButton = document.querySelector('.send-button');

newChatButton.addEventListener('click', () => {
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.textContent = 'New Chat';
    chatList.appendChild(chatItem);
});

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageText;
        messageDisplay.appendChild(message);
        messageInput.value = '';
    }
});





