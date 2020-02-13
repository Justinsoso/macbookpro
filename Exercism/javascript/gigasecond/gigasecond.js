//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// This old way only pass the first four tests but not the last one
// export const gigasecond = i => {
//   if (i>0){
//     i.setSeconds(1000000000)//regular calculation
//     return i;
//   } else {
//     i.setSeconds(999996400)//minus an hour to fit the before UNIX (test3)
//     return i;
//   }
// };

// This one can solves all tests
export const gigasecond = input => new Date(Number(input) + 10e11);