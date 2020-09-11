const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js repair function test", () => {
  // Descriptive And Meaningful Phrases
  const sword = {
    name: "Sword of slashing",
    durability: 50,
    enhancement: 0,
  };
  it("Tests repair function should return an item with 100 durability", () => {
    expect(enhancer.repair(sword).durability).toEqual(100);
  });
});

describe("enhancer.js success function test", () => {
  const dagger = {
    name: "Dagger of stabbing",
    durability: 50,
    enhancement: 5,
  };
  const club = {
    name: "Club of Beating",
    durability: 50,
    enhancement: -11,
  };
  it("Tests success function should return an item with enhancement increased by one", () => {
    expect(enhancer.success(dagger).enhancement).toBe(6);
    // Verifies items below level 0 are set to 0
    expect(enhancer.success(club).enhancement).toBe(0);
  });

  it("Tests success function will not raise an item above the maxEnhament level of 20", () => {
    const stick = {
      name: "Stick of poking",
      durability: 100,
      enhancement: 20,
    };
    expect(enhancer.success(stick).enhancement).toBe(20);
  });
});

describe("enhancer.js fail function test", () => {
  const cloak = {
    name: "Cloak of Covering",
    durability: 50,
    enhancement: 14,
  };
  const rope = {
    name: "Rope of Tying",
    durability: 50,
    enhancement: 15,
  };
  const rock = {
    name: "Rock of throwing",
    durability: 100,
    enhancement: 17,
  };
  const shield = {
    name: "Shield of blocking",
    durability: 4,
    enhancement: 10,
  };

  it("Failure function should return -5 durability on items with enhancement level less than 15", () => {
    expect(enhancer.fail(cloak).durability).toBe(45);
    // Verifies enhancement remains unchanged
    expect(enhancer.fail(cloak).enhancement).toBe(14);
    // Verifies durablity will not drop below 0
    expect(enhancer.fail(shield).durability).toBe(0);
  });

  it("Failure function should return -10 durability on items with enhancement level higher than 15", () => {
    expect(enhancer.fail(rope).durability).toBe(40);
    // Verifies enhancement remains unchanged
    expect(enhancer.fail(rope).enhancement).toBe(15);
  });

  it("Failure function should return -10 durability and -1 to enhancement on items higher than enhancement 16", () => {
    expect(enhancer.fail(rock).durability).toBe(90);
    expect(enhancer.fail(rock).enhancement).toBe(16);
  });
});
