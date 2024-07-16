const userName = prompt('What is your name?');

if (userName === null) {
    alert("Please, enter your name!");
} else if (!userName.trim() || !isNaN(userName)) {
    alert("The name is not entered!");
} else {
    alert(`Hello, ${userName}! How are you?`);
}