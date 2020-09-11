module.exports = {
  success,
  fail,
  repair,
  get,
};

// Takes an item and adds and enhancment level on success
function success(item) {
  const maxEnhancement = 20;
  let enhancement = item.enhancement;
  if (item.enhancement === maxEnhancement) {
    return { ...item };
  }
  if (item.enhancement < maxEnhancement && item.enhancement >= 0) {
    enhancement = item.enhancement + 1;
  } else {
    enhancement = 0;
  }

  return { ...item, enhancement };
}

// Takes an item and modifies the durability or enhancement level on failure
// Enhancement less than 15 reduces durability by 5
// Enhancement greater than 15 reduces durability by 10
// Enhancement greater than 16 reduces the enhancement level by 1 in addition to the durability loss
function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    if (durability < 5) {
      durability = 0;
    } else {
      durability -= 5;
    }
  }
  if (item.enhancement >= 15) {
    if (durability < 10) {
      durability = 0;
    } else {
      durability -= 10;
    }
  }
  if (item.enhancement > 16) {
    enhancement -= 1;
  }

  return { ...item, enhancement, durability };
}

// Takes and item and increases the durability to 100
function repair(item) {
  return { ...item, durability: 100 };
}

// Stretch goal
function get(item) {
  return { ...item };
}
