document.addEventListener('DOMContentLoaded', () => {
  const range = document.getElementById('range');
  const valueDisplay = document.getElementById('value');

  const updateValue = () => {
    valueDisplay.textContent = range.value;
  };

  range.addEventListener('input', updateValue);

  updateValue(); 
});
