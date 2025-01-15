document.getElementById('calculate-btn').addEventListener('click', function () {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');
    const ageSpan = document.getElementById('age');
  
    if (!birthdate) {
      alert('Please select your date of birth');
      return;
    }
  
    const birthDateObj = new Date(birthdate);
    const today = new Date();
  
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    ageSpan.textContent = age;
    resultDiv.classList.remove('hidden');
  });
  