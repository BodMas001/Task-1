// script.js

async function fetchAdvice() {
    const adviceDisplay = document.getElementById('adviceDisplay');
    const adviceId = document.getElementById('adviceId');
    const diceButton = document.querySelector('.dice-button');
    diceButton.disabled = true;  // Disable button while loading
  
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      adviceDisplay.textContent = `“${data.slip.advice}”`;
      adviceId.textContent = `ADVICE #${data.slip.id}`;
    } catch (error) {
      adviceDisplay.textContent = 'Oops! Could not fetch advice. Try again.';
      adviceId.textContent = '';
    } finally {
      diceButton.disabled = false;
    }
  }