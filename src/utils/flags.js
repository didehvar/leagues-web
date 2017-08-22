const flags = {};

const loadFlag = countryCode => {
  flags[countryCode] = require(`./flag-images/${countryCode}.png`);
  return flags[countryCode];
};

export const getFlag = countryCode =>
  flags[countryCode] || loadFlag(countryCode);
