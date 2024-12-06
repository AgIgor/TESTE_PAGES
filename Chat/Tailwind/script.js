document.addEventListener("DOMContentLoaded", () => {
    // Dados simulados de contatos e mensagens
    const contactsData = {
      1: {
        name: "Contato 1",
        messages: [
          { text: "Oi, tudo bem?", type: "received" },
          { text: "Sim, e você?", type: "sent" }
        ]
      },
      2: {
        name: "Contato 2",
        messages: [
          { text: "Olá! Como vão as coisas?", type: "received" },
          { text: "Tudo ótimo, e contigo?", type: "sent" }
        ]
      }
    };
  
    const messageInput = document.getElementById("message-input");
    const messagesContainer = document.getElementById("message-container");
    const chatContactName = document.getElementById("chat-contact-name");
    let activeContactId = null;
  
    // Função para exibir as mensagens de um contato
    function loadMessages(contactId) {
      messagesContainer.innerHTML = "";  // Limpar mensagens anteriores
      const contact = contactsData[contactId];
  
      chatContactName.innerText = contact.name;
  
      contact.messages.forEach((msg) => {
        addMessage(msg.text, msg.type);
      });
    }
  
    // Função para adicionar mensagem ao chat
    function addMessage(text, type = "sent") {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", "mb-3", "p-2", "rounded-lg", "max-w-xs");
      if (type === "sent") {
        messageDiv.classList.add("bg-blue-500", "text-white", "ml-auto");
      } else {
        messageDiv.classList.add("bg-gray-200");
      }
      messageDiv.innerText = text;
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    // Enviar mensagem ao clicar no botão
    document.getElementById("send-button").addEventListener("click", () => {
      const text = messageInput.value.trim();
      if (text && activeContactId) {
        addMessage(text, "sent");
        contactsData[activeContactId].messages.push({ text, type: "sent" });
        messageInput.value = "";
      }
    });
  
    // Enviar mensagem ao pressionar "Enter"
    messageInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && activeContactId) {
        const text = messageInput.value.trim();
        if (text) {
          addMessage(text, "sent");
          contactsData[activeContactId].messages.push({ text, type: "sent" });
          messageInput.value = "";
        }
      }
    });
  
    // Configurar evento de clique em cada contato da lista
    document.querySelectorAll(".chat").forEach((chatElement) => {
      chatElement.addEventListener("click", () => {
        activeContactId = chatElement.getAttribute("data-contact-id");
        loadMessages(activeContactId);
      });
    });
  });
  