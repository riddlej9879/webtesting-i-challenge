const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  beforeAll(() => {
    item1 = {
      name: "Sword of Slashing",
      durability: 50,
      enhancement: 0,
    };
    item2 = {
      name: "Dagger of stabbing",
      durability: 50,
      enhancement: 20,
    };
    item3 = {
      name: "Dagger of stabbing",
      durability: 50,
      enhancement: 4,
    };
    item4 = {
      name: "Dagger of stabbing",
      durability: 50,
      enhancement: 15,
    };
  });

  it("Should return durability 100", () => {
    expect(enhancer.repair(item1).durability).toEqual(100);
  });

  it("Should return successful enhancment", () => {
    expect(enhancer.success(item1).enhancement).toBe(1);
  });

  it("Should return max enhancement level", () => {
    expect(enhancer.success(item2).enhancement).toBe(20);
  });

  it("Should return failed enhancement -1 enhancement level", () => {
    expect(enhancer.fail(item2).enhancement).toBe(19);
  });

  it("Should return failed enhancement -5 loss to durablity", () => {
    expect(enhancer.fail(item3).durability).toBe(45);
  });

  it("Should return failed enhancement -15 loss to durablity", () => {
    expect(enhancer.fail(item4).durability).toBe(35);
  });
});
