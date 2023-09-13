// Write your code here

class User {
  #username;
  #password;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }

  getUsername() {
    return this.#username;
  }

  getPassword() {
    return this.#password;
  }
}


const user1 = new User('user1', '123456', 30);
console.log(user1.username);
console.log(user1.password);
console.log(user1.getUsername());
console.log(user1.getPassword());
console.log(user1.age);
