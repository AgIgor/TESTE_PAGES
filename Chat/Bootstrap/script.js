document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.querySelector("input[placeholder='Digite uma mensagem']");
    const messagesContainer = document.querySelector(".messages");
  
    // Função para adicionar mensagem
    function addMessage(text, type = "sent") {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", type, "p-2", "mb-2", "rounded-3");
      messageDiv.innerText = text;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Enviar mensagem ao clicar no botão
    document.querySelector("button").addEventListener("click", () => {
      const text = messageInput.value.trim();
      if (text) {
        addMessage(text, "sent");
        messageInput.value = "";
      }
    });
  
    // Enviar mensagem ao pressionar "Enter"
    messageInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const text = messageInput.value.trim();
        if (text) {
          addMessage(text, "sent");
          messageInput.value = "";
        }
      }
    });
  });
  