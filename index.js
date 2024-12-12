// callback function to generate a greeting
function generateGreeting(name, callback) {
    const message = `Hello ${name}! welcome to our app`
    callback(message)
}

// Event Listeners for the button
document.getElementById("greetButton").addEventListener("click", ()=> {
    const name = document.getElementById("nameInput").value;
    const greetingMessageElement = document.getElementById("greetingMessage");

    if (name.trim() === "") {
        greetingMessageElement.textContent = "Please enter a name";
        return;
    }

    // use the callback to display the greeting
    generateGreeting(name, (message) => {
        greetingMessageElement.textContent = message;
    })
})