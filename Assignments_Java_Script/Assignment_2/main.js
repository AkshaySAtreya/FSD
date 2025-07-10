// main.js
// This script prompts the user for a word, then dynamically imports stringUtils.js to capitalize it.

async function getAndCapitalizeWord() {
  const word = prompt('Enter a word to capitalize:');
  if (word) {
    const module = await import('./stringUtils.js');
    const capitalized = module.capitalize(word);
    alert('Capitalized word: ' + capitalized);
  } else {
    alert('No word entered.');
  }
}

getAndCapitalizeWord();
