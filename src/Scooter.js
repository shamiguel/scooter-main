const User = require('./User');

class Scooter{
  // scooter code here

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = this.constructor.nextSerial;
    this.charge = 100;
    this.isBroken = false; 
    this.constructor.nextSerial += 1;
  }

  static nextSerial = 1;

  rent(user){
      this.user = user;
      this.station = null;
  }

  dock(station){
    this.user = null;
    this.station = station;
  }
  
  async requestRepair(){
    console.log("Request submitted");
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.isBroken = false;
    console.log("Request completed.")
  }

  async recharge(){

  }
}


module.exports = Scooter
