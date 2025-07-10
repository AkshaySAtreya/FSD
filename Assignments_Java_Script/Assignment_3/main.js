// main.js
import User, { validateEmail } from './user.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  const user = new User(name);
  console.log(user.getInfo());
  rl.question('Enter your email for validation: ', (email) => {
    const isValid = validateEmail(email);
    console.log(`Is '${email}' a valid email?`, isValid);
    rl.close();
  });
});
