const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {"central": [], "north":[], "south":[]};//{"central station": [1, 2, 3, 4]}
    this.registeredUsers = {};//{"Milo": user_object, "Shami": user_object};
  }

  registerUser(username, password, age){
    if (!this.registeredUsers[username] && age >= 18){
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;

      console.log(`Registered ${username}`, JSON.stringify(this.registeredUsers));
      return user;
    }else{
      if(this.registeredUsers[username]){
        throw new Error("already registered");
      }else{
        throw new Error("too young to register");
      }
    }
  };

  loginUser(username, password){
      let user = this.registeredUsers[username];
      if(user.username !== username || user.password !== password){
        throw new Error("Username or password is incorrect");
      }else{
        user.login(password);
        console.log("user has been logged in");
      }
    };

  logoutUser(username){
    if(!this.registeredUsers[username]){
      throw new Error ("no such user is logged in")
    }else{
      let user = this.registeredUsers[username];
      user.logout();
      console.log("user is logged out");
    }
   
  };

  createScooter(station){ 
    if(Object.keys(this.stations).includes(station)){
      const scoot = new Scooter(station);
      this.stations[station].push(scoot);
      console.log("created new scooter", JSON.stringify(this.stations));
      return scoot;
    }else{
      throw new Error("no such station error");
    }
  };

  dockScooter(scooter, station){
    if(Object.keys(this.stations).includes(station)){
      scooter.dock(station);
      this.stations[station].push(scooter);
      console.log("scooter is docked");
    }else{
      throw new Error("no such station error");
    }
  };

  rentScooter(scooter, user){
    if(scooter.station !== null){
      let station = scooter.station//pull station from scooter
      let scooterArray = this.stations[station]//find the scooter array of associated station
      let index = scooterArray.indexOf(scooter);//get index of scooter in the array
      scooterArray.splice(index, 1);//remove it;
      scooter.rent(user);//Rent it to user;
    }else{
      throw new Error("scooter already rented")
    }
  };

  print(){
    console.log(this.registeredUsers);
    console.log(this.stations);
  }



}

module.exports = ScooterApp
