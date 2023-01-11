function solution(yL, yR, fL, fR) {
  if (yL === yR) {
    if (yL === fL && yR === fR) {
      return true;
    } else return false;
  }

  let yourStrongest;
  let yourWeakest;
  let friendsStrongest;
  let friendsWeakest;
  if (yL > yR) {
    yourStrongest = yL;
    yourWeakest = yR;
  } else {
    yourStrongest = yR;
    yourWeakest = yL;
  }

  if (fL > fR) {
    friendsStrongest = fL;
    friendsWeakest = fR;
  } else {
    friendsStrongest = fR;
    friendsWeakest = fL;
  }

  if (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) return true;
  else return false;
}

// input: four integers
// output: bool t / f

// figure out if an arm is stronger or if both arms are equally strong
// if both arms are equal, check that value against both of friends arms
// if one arm is stronger, check both of your friend's arms
// compare your strongest arm against your friend's strongest arm
// compare your weakest arm against your friend's weakest arm
// return true or false appropriately
