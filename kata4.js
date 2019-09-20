const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let longestObj = "";
  for (let i in instructors) {
    let instructorsName = instructors[i].name;
    if (instructorsName.length > longestName.length) {
      longestName = instructorsName;
      longestObj = instructors[i];
    }
  }
  return longestObj;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" },
  { name: "asdfkajslkdjfa;sdjf;alsdkjf;ladsf", cource: "web"}
]));