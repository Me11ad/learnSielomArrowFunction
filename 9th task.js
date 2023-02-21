const getGlucoseSpikes = (checks) => {
  return checks.filter(num => {
    return num >= 7.5;
  })
};

console.log(getGlucoseSpikes([1.1, 5.2, 7.2, 8.1, 9.6]));
