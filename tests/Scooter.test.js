const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

describe("Scooter", ()=>{

  let scoot;

  beforeEach(()=>{
    scoot = new Scooter("central");
    scooter = new Scooter("central");
  });

  test("is initialized properly", ()=>{
    expect(scoot.station).toBe("central");
    expect(scoot.user).toBe(null);
    expect(scoot.serial).toBe(2);
    expect(scooter.serial).toBe(3);
    expect(Scooter.nextSerial).toBe(4);
    expect(scoot.charge).toBe(100);
    expect(scoot.isBroken).toBe(false);
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  let scoot;

  beforeEach(()=>{
    scoot = new Scooter("central");
    bustedScoot = new Scooter("central");
    bustedScoot.charge = 0; 
    bustedScoot.isBroken = true;
  });

  describe('rent', ()=>{
    test("accepts a user and undocks scooter", ()=>{
      let user = new User("Milo", "meow", 2);
      scoot.rent(user);
      expect(scoot.user).toBe(user);
      expect(scoot.station).toBe(null);
    });

    test("throws an error when scooter is not charged or broken", ()=>{
      expect(()=>{
        bustedScoot.rent(user).toThrow("scooter needs to charge or scooter needs repair");
      })
    })
  });

  describe('dock', ()=>{
    test("sets user to null", ()=>{
      scoot.dock("central");
      expect(scoot.user).toBe(null);
      expect(scoot.station).toBe("central");
    })
  });

  describe("requestRepair", () => {
    test("after a 5 second interval, is repaired", async ()=>{
      await bustedScoot.requestRepair();
      expect(bustedScoot.isBroken).toBe(false);
    })
  })
  
  describe("recharge", ()=>{
    test("incrementally updates Scooter's charge to 100", ()=>{
    })
  })

})
