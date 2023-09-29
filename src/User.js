class User {
  // User code here
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if(this.password === password){
      this.loggedIn = true;
    }else{
      throw new Error("Password is Incorrect");
    }
  };

  logout(){
    this.loggedIn = false;
  };
}

module.exports = User
