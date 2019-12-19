class MessageProto {
    constructor() {
        this.allMessages = "";
    }
    messageInput() {
        //создадим окно чата
        document.querySelector('.chat-box').innerHTML = `
            <div class="chat_header-container">
                <div class="chat-closeOpen">&#10799;</div>
                <div class="chat_header">
                    <div class="chat_img_container">
                        <div class="chat_header__img"></div>
                    </div>
                    <div class="chat_header__container">
                        <div class="chat_header__title">Тэглайн</div>
                        <div class="chat_header__subtitle">Консультант</div>
                    </div>
                </div>
            </div>
            <div class="message-history">

            </div>
            <div class="new-message-container">
                <!-- <submit class="send-message" onclick="sendMessage()">Send</submit> -->
            </div>`;

        
        //создаем <textarea>
        let messageBox = `<textarea class="new-message-input" value="" placeholder="Введите сообщение и нажмите Enter"></textarea>`;
        document.querySelector('.new-message-container').innerHTML = messageBox;

        //добавить тригерры на обьекты close/open и <textarea>
        document.querySelector('.chat-closeOpen').onclick = this.chatOpenClose;
        document.querySelector('.new-message-input').onkeypress = this.sendMessage;
    }

    //создадим шаблон сообщения и получим все сообщения в одной переменной
    sendMessage(e) {
        let newMessage = "";
        if (e.keyCode === 13) {
            e.preventDefault();
            newMessage = document.querySelector('.new-message-input').value;
            //this.allMessages.push(newMessage); //не работает - почему???

            if (newMessage && newMessage != "clear") {
                newMessage = (newMessage.replace(/\s/g, '').length != 0) ? newMessage : "empty message";
                this.allMessages += `<p class="message-p">${newMessage}</p>`;
                
            } else if (newMessage == "clear") {
                this.allMessages = "";
            } 

            //очистим поле ввода
            document.querySelector('.new-message-input').value = "";

            //выведем сообщения
            let messageHistory = document.querySelector('.message-history');
            messageHistory.innerHTML = this.allMessages;
            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    }
    
    /* Close and Open Chat-box */
    chatOpenClose() { 
        document.querySelector('.message-history').classList.toggle("chat-active");
        document.querySelector('.new-message-container').classList.toggle("new-message-active");
        document.querySelector('.chat-closeOpen').classList.toggle("chat-closeOpen-active");
    }
}

let chat = new MessageProto();
chat.messageInput();
