const colorCodeElement = document.getElementById('color-code');
const generateBtn = document.getElementById('generate-btn');

// Function to generate random color
function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.body.style.background = randomColor; // Change background color
  colorCodeElement.textContent = randomColor; // Update the color code
  colorCodeElement.style.color = randomColor; // Change text color for visibility
}

// Event listener for button click
generateBtn.addEventListener('click', generateRandomColor);

// Generate a random color on page load
generateRandomColor();
