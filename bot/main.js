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
    window.location.href = 'https://kunal-debug-png.github.io/';
  }
  if (commandInput == 7) {
    window.location.href = 'https://kunal-debug-png.github.io/#contact';
  }
  if (commandInput == 5) {
    window.location.href = 'https://kunal-debug-png.github.io/#work';
  }
  //if (commandInput == 4) {
    //window.location.href = 'https://kunal-debug-png.github.io/#progress';
  //}
  let output = document.getElementById('output');

  // Embedded data to avoid CORS issues when opening file directly
  const data = {
    "1": "I am a 20-year-old Intern at a Fintech Startup & Computer Science student currently pursuing a Bachelor's in Engineering, specializing in Artificial Intelligence and Data Science. Proficient in C and Java, I demonstrate a strong command of data structures and algorithm implementation. My enthusiasm lies in exploring cutting-edge technologies, fostering a commitment to problem-solving, and a dedicated pursuit of advancement in software development. I have successfully executed projects encompassing web development, data analysis, Java, and Python.",
    "2": "Diploma - Vivekanand Education Society Polytechnic : Computer Engineering (2019 - 2022) Grade - 86%. \\n B.E. - Thadomal Shahani Engineeing College : Artificial Intelligence & Data Science (2022 - 2025)  Grade - 9.01/10",
    "3": "Java, C, C++, Python, DBMS, Software Engineering, Project Management, SoftSkills",
    "4": "I am currently working at a Startup in Mumbai as a part of core backend team. ;; Past: worked in a Startup to build a ERP system",
    "6": "You can reach me on LinkedIn : kunal-chhablani-786519194/, Twitter : chhablani_kunal, Instagram : kunal_chhablani._ "
  };

  const result = data[commandInput];
  if (result) {
    output.innerHTML += `<br><br>&gt; Result: ${result}`;
  } else {
    output.innerHTML += '<br>&gt; No matching result found.';
  }

  inputDiv.textContent = ''; // Clear the contenteditable div
}
