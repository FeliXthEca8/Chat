const socket = io();

document.getElementById('send').addEventListener('click', function() {
    const message = document.getElementById('input').value;
    socket.emit('chat message', message);
    document.getElementById('input').value = '';
});

socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
});
