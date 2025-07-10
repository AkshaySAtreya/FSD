// user.js
class User {
  constructor(name) {
    this.name = name;
  }
  getInfo() {
    return `User: ${this.name}`;
  }
}

function validateEmail(email) {
  // Simple email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default User;
export { validateEmail };
