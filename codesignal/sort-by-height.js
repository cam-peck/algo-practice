function solution(a) {
  const people = a.filter(el => el !== -1);
  const sortedPeople = people.sort((a, b) => a - b);
  console.log(sortedPeople);
  let i = -1;
  return a.map(value => {
    if (value === -1) {
      return -1;
    }
    i++;
    return a = sortedPeople[i];
  });
}

// arrange people by height from shortest to tallest
// if a[i] is -1 then the ith position is a tree (and cannot be moved)

// store indexes of all trees
// remove all trees
// sort the array
// put all the trees back in at those indexes
// return the sorted array with trees
