// make a connection
var socket = io.connect("https://helpful-starship-2fee83.netlify.app/");

var message = document.getElementById("message");
    (handle = document.getElementById("handle")),
    (btn = document.getElementById("send")),
    (output = document.getElementById("output"));
    (feedback = document.getElementById("feedback"));
    

//emmit events
btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function() {
    socket.emit("typing", handle.value);
});

//listen for events
socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle +':</strong>' + data.message + '</p>';
});

socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message... </em></p>';
});
