class User {
  // User code here
  constructor(username, password, age, loggedIn=false){
    this.username = username;
    this.password = password;
    this.age = age;
  }

  login(password){
    if(this.password === password){
      this.loggedIn = true;
    }else{
      throw new Error("Password is Incorrect");
    }
  }
}

module.exports = User
