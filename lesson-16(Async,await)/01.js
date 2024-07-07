const divSendMessage = document.createElement("div");
document.body.append(divSendMessage);

const inputNick = document.createElement("input");
inputNick.placeholder = "Nick";
divSendMessage.append(inputNick);

const br1 = document.createElement("br");
divSendMessage.append(br1);

const inputMessage = document.createElement("input");
inputMessage.placeholder = "Message";
divSendMessage.append(inputMessage);

const br2 = document.createElement("br");
divSendMessage.append(br2);

const sendButton = document.createElement("button");
sendButton.innerText = "Send";
sendButton.onclick = () => {
  sendAndCheck();
};

divSendMessage.append(sendButton);

const divChat = document.createElement("div");
document.body.append(divChat);

const url = "http://students.a-level.com.ua:10012";
let nextMessageId = 0;
const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

async function sendMessage(nick, message) {
  await jsonPost(url, { func: "addMessage", nick, message });
}

async function getMessages() {
  const messages = await jsonPost(url, {
    func: "getMessages",
    nextMessageId,
  });
  for (const message of messages.data) {
    const divMessage = document.createElement("div");
    divMessage.innerText = ` ${message.nick} :${message.message}`;
    divChat.prepend(divMessage);
  }
  nextMessageId = messages.nextMessageId;
}

async function sendAndCheck() {
  const nick = inputNick.value;
  const message = inputMessage.value;
  await Promise.all([sendMessage(nick, message), getMessages()]);
}

async function checkLoop() {
  while (true) {
    await getMessages();
    await delay(4000);
  }
}
checkLoop();

function jsonPost(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())

    .catch((error) => console.log(error));
}
