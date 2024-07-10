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

inputNick.style =
  inputMessage.style = `width:95%;background-color:aliceblue;color:blue; border:1px solid lightblue`;

inputNick.onmouseover = () => {
  inputNick.style.backgroundColor = `lightcyan`;
};
inputNick.onmouseout = () => {
  inputNick.style.backgroundColor = `aliceblue`;
};

inputMessage.onmouseover = () => {
  inputMessage.style.backgroundColor = `lightcyan`;
};
inputMessage.onmouseout = () => {
  inputMessage.style.backgroundColor = `aliceblue`;
};
const br2 = document.createElement("br");
divSendMessage.append(br2);

const sendButton = document.createElement("button");
sendButton.innerText = "Send";
sendButton.style = `width:96%;background-color:lightgrey;color:blue;border:1px lightblue solid;border-radius:15px`;

sendButton.addEventListener("mouseover", () => {
  sendButton.style.backgroundColor = `lightblue`;
});
sendButton.addEventListener("mouseout", () => {
  sendButton.style.backgroundColor = `lightgrey`;
});

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
  nextMessageId = messages.nextMessageId;
  for (const message of messages.data) {
    const divMessage = document.createElement("div");
    divMessage.innerText = ` ${message.nick} :${
      message.message
    }      ${new Date(message.timestamp).getHours()} : ${new Date(
      message.timestamp
    ).getMinutes()}`;
    divChat.prepend(divMessage);
  }
}

async function sendAndCheck() {
  const nick = inputNick.value;
  const message = inputMessage.value;
  await sendMessage(nick, message);
  await getMessages();
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
