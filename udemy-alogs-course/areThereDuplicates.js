// eslint-disable-next-line no-unused-vars
function areThereDuplicates(...args) {
  const checked = {};
  for (let i = 0; i < args.length; i++) {
    if (!checked[args[i]]) {
      checked[args[i]] = true;
    } else return true;
  }
  return false;
}

// input: variable arguments
// output: bool t / f
