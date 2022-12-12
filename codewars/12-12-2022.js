// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// Solution //

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0: {
      return 'no one likes this';
    }
    case 1: {
      return names[0] + ' likes this';
    }
    case 2: {
      return names[0] + ' and ' + names[1] + ' like this';
    }
    case 3: {
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    }
    default: {
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
}

// Consider an array / list of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//   [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, current) => {
    if (current === true) {
      return acc + 1;
    } else return acc;
  }, 0);
}
