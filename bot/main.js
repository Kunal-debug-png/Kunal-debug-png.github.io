function handleKeyPress(event) {
  if (event.key === 'Enter') {
    executeCommand();
  }
}

function executeCommand() {
  let inputDiv = document.querySelector('.input-container');
  let commandInput = inputDiv.textContent.trim();// Get text content without leading/trailing spaces
  // Assuming userInput is the string received as input '>1', '>2', '>4', etc.

  let intValue;

  if (commandInput.startsWith('>')) {
    let numericPart = commandInput.slice(1); // Remove the '>'
    intValue = parseInt(numericPart, 10); // Convert the numeric part to an integer
  } else {
    intValue = parseInt(commandInput, 10); // If there's no '>', directly parse the input to integer
  }

  commandInput = intValue;

  if (commandInput == 8) {
    window.location.href = 'https://majesticinfatuatedsymbol.kunalchhablani.repl.co/';
  }
  if (commandInput == 7) {
    window.location.href = 'https://majesticinfatuatedsymbol.kunalchhablani.repl.co/#contact';
  }
  let output = document.getElementById('output');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const result = data[commandInput];
      if (result) {
        output.innerHTML += `<br><br>&gt; Result: ${result}`;
      } else {
        output.innerHTML += '<br>&gt; No matching result found.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      output.innerHTML += error;
    });

  inputDiv.textContent = ''; // Clear the contenteditable div
}
