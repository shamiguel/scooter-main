const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
    expect(user.username).toBe("Joe Bloggs");
  })

  test("password should be a string", () => {
    expect(typeof user.password).toBe("string");
      expect(user.password).toBe("test123");
  })

  test("age should be a number", ()=>{
    expect(typeof user.age).toBe("number");
    expect(user.age).toBe(21);
  })
});

describe("User Login", () => {
  let user1;
  beforeEach(()=>{
    user1 = new User("Milo", "meow", 2)
  })

  test("should toggle loggedIn if user successfully logs in", ()=>{
    let password = "meow";
    user1.login(password);
    expect(user1.loggedIn).toBe(true);
  });

  test("should throw an error is password is wrong", ()=>{
    let incorrect = "bark";
    expect(()=>{
      user1.loggedIn(incorrect).toThrow("Password is incorrect");
    })
  })

})

describe("User Logout", ()=>{
  let user1;
  beforeEach(()=>{
    user1 = new User("Milo", "meow", 2, true)
  })

  test("should toggle a user's loggedIn to false if they are logged In", ()=>{
    user1.logout();
    expect(user1.loggedIn).toBe(false);
  })
})
