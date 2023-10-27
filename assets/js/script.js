document.getElementById('chatbox-icon').addEventListener('click', function () {
    var chatbox = document.getElementById('chatbox-container');
    if (chatbox.style.display === 'block') {
        chatbox.style.display = 'none';
    } else {
        chatbox.style.display = 'block';
    }
});
