console.log("Hello ");

// Problem statement - array of messages

const messages = [
  { sender: "Alex", time: "7:00PM", message: "Hi How are you?" },
  { sender: "Jane", time: "7:05PM", message: "I am great? wbu?" },
  { sender: "Alex", time: "7:10PM", message: "I am sick :(" },
  { sender: "Jane", time: "7:11PM", message: "Get well soon..." },
];

messages.map((message) => {
  document.getElementById("my-chats").innerHTML += `
    <div class="new-card">
        <img
            height="70"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
        />
        <div style="width:100%">
            <div class="info">
                <strong>${message.sender}</strong>
                <p>Today at ${message.time}</p>
            </div>
            <p>${message.message}</p>
        </div>
    </div>
`;
});
