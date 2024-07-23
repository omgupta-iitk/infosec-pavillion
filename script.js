document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const challenge = document.getElementById('challenge').value;
    
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Thank you, ${name}. Your interest in ${challenge} has been noted.`;
    confirmationMessage.style.display = 'block';
    

    this.reset();
});
