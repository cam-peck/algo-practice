// eslint-disable-next-line no-unused-vars
function solution(votes, k) {
  const currentMaxVotes = Math.max(...votes);
  const minVotesToTie = currentMaxVotes - k;
  let possibleWinners = 0;
  let maxesFound = 0;
  votes.forEach(candidateVoteCount => {
    if (candidateVoteCount === currentMaxVotes) {
      possibleWinners++;
      maxesFound++;
    } else if (candidateVoteCount > minVotesToTie) possibleWinners++;
  });
  if (k === 0 && maxesFound > 1) return 0; // currently tied and no votes remain
  return possibleWinners;
}

// input: array of numbers of votes given to each candidate (votes) & votes not yet cast (k)
// output: integer --> number of candidates who *could* still win the election

// to win --> must secure more votes than any other candidate
// ties --> no winner

// find the current max number of votes
// subtract k from max and store value as minVotesToTie
// any numbers in array greater than minVotestoTie increment counter
// return counter
