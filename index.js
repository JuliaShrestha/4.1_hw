const userName = prompt('What is your name?');

if (!userName) {
    alert("The name is not entered!");
} else {
    alert(`Hello, ${userName}! How are you?`);
}