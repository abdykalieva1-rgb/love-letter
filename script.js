const revealBtn = document.getElementById('revealBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

revealBtn.addEventListener('click', function() {
    hiddenMessage.classList.toggle('show');
    
    // Change button text based on state
    if (hiddenMessage.classList.contains('show')) {
        revealBtn.textContent = 'Спрятать 💌';
    } else {
        revealBtn.textContent = 'Нажми сюда 💌';
    }
});