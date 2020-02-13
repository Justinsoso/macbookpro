//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = () => {
  throw new Error("Remove this statement and implement this function");
};

export const value = input => input.map(i => COLORS.indexOf(i)).join('').slice(0,2) | 0;