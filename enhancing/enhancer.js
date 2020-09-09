module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const maxEnhancement = 20;
  if (item.enhancement === maxEnhancement) {
    return { ...item };
  } else if (item.enhancement < maxEnhancement) {
    item.enhancement++;
  } else {
    item.enhancement = 0;
  }

  return { ...item };
}

function fail(item) {
  if (item.enhancement < 5) {
    item.durability = item.durability - 5;
  } else if (item.enhancement < 16) {
    item.durability = item.durability - 15;
  } else if (item.enhancement > 16) {
    item.enhancement--;
  }

  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

// Stretch goal
function get(item) {
  return { ...item };
}
