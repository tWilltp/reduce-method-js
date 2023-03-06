  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        'accumulator:', acc,
        'current value:', curr,
        'total:', acc + curr
    );
    return acc + curr;
}, 0); // }>, 0<); << explicitly specified value should be put in (but with 0 it is not necessary, just good practice)
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // initial value specified >> , 0
console.log(totalExp);


// Grouping by a property, and totaling it too

let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(expByProf);
