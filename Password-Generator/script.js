const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

function generatePassword() {
  let characters = lowerCaseLetters;
  if (uppercaseCheckbox.checked) characters += upperCaseLetters;
  if (numbersCheckbox.checked) characters += numbers;
  if (symbolsCheckbox.checked) characters += symbols;

  const passwordLength = lengthInput.value;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordField.value = password;
}

function copyToClipboard() {
  if (passwordField.value === "") {
    alert("Generate a password first!");
    return;
  }
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
