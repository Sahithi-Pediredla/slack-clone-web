//channel code..............

const channelsData = ['#  Team-Design', '#  help-analytics'];

// Function to generate channel list
function generateChannelList() {
    const channelList = document.getElementById('channelsList');

    channelsData.forEach(channel => {
        const li = document.createElement('li');
        li.textContent = channel;
        channelList.appendChild(li);
    });
}

// Function to regenerate the channel list
function regenerateChannelList() {
    const channelList = document.getElementById('channelsList');
    // Clear the current list
    channelList.innerHTML = '';
    // Generate the updated list
    generateChannelList();
}

function handleCreateChannel() {
    const addChannelButton = document.getElementById('AddChannelButton');

    addChannelButton.addEventListener('click', function() {
        // Handle create channel
        const newChannelNameInput = document.getElementById('newChannelName');
        const newChannelName = newChannelNameInput.value.trim(); // Trim to remove leading/trailing spaces

        if (newChannelName) {
            // Add the new channel to the list
            channelsData.push(newChannelName);
            // Regenerate the channel list
            regenerateChannelList();

            // Clear the input field after creating the channel
            newChannelNameInput.value = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Call the functions to set up the initial state
    generateChannelList();
    handleCreateChannel();
});



//funtion to display input messages
//signup script code....
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;

    localStorage.setItem('username', name);

    // Redirect to the next page or perform additional actions
}

//login code...
function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    localStorage.setItem('username', name);

    // Redirect to the next page or perform additional actions
}



function sendMessage() {

    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');

    const message = messageInput.value;
    const sender = localStorage.getItem('username');
    // In a real app, get the sender from the backend or user input
    const timestamp = new Date().toLocaleTimeString();

    const newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.innerHTML = `<strong>${sender}</strong> (${timestamp}): ${message}`;
    messageList.appendChild(newMessage);

    // Clear the input field
    messageInput.value = '';
}