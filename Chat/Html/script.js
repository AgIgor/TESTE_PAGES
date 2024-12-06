document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.querySelector("footer input");
    const messagesContainer = document.querySelector(".messages");

    document.querySelector("div .sidebar").addEventListener("click", (e) => {
        console.log(e.target);
    });

    // Abrir janela de mensagem do contato selecionado
    document.querySelectorAll("div .chat").forEach(element => {
        element.addEventListener("click", (e) => {
            const contatoSelecionado = element.querySelector("h4").innerText;
            const janela = document.querySelector("div .chat-area");
            janela.classList.remove("hidden");
            janela.querySelector("div header h3").innerText = contatoSelecionado;
        });
    });

    


    // Função para adicionar mensagem
    function addMessage(text, type = "sent") {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", type);
      messageDiv.innerText = text;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Enviar mensagem ao clicar no botão
    document.querySelector("footer button").addEventListener("click", () => {
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

  
