// eslint-disable-next-line no-unused-vars
function solution(upSpeed, downSpeed, desiredHeight) {
  if (upSpeed > desiredHeight) {
    return 1;
  }
  const dailyDifference = upSpeed - downSpeed;
  const days = Math.ceil((desiredHeight - upSpeed) / dailyDifference);
  return days + 1;
}

// dailyDifference: 3
// desiredHeight: 7
// at the start of day 2: 5

// upSpeed: integer between 3-100
// downSpeed: integer between 2-upspeed
// all plants start at height 0

// upSpeed + (dailyDifference * x-days-passed) >= desiredHeight

// dailyDifference: 3
// desiredHeight: 7
// at the start of day 2: height = 8

// 100 + (90 * 10) = 1000

// 100 + (90 * x) = 910

// 90*x => 910 - 100

//  = days

// 100 + ()

// desiredHeight: 910
