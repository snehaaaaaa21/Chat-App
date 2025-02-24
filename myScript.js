function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;
    
    const chatBox = document.getElementById("chatBox");
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.innerText = "Echo: " + message;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}