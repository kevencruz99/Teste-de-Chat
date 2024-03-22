const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    displayMessage('user', userMessage);
    userInput.value = '';

    // Simulação de resposta do chatbot
    setTimeout(() => {
        const botMessage = 'Olá! Como posso ajudar?'; // Resposta simplificada
        displayMessage('bot', botMessage);
    }, 1000); // Simulando atraso de resposta
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
