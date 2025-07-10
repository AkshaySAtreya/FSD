import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word to capitalize: ', async (word) => {
  if (word) {
    const module = await import('./stringUtils.js');
    const capitalized = module.capitalize(word);
    console.log('Capitalized word:', capitalized);
  } else {
    console.log('No word entered.');
  }
  rl.close();
});