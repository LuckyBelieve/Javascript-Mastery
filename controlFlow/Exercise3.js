// checking speed
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  let points = 0;
  if (speed < speedLimit + kmPerPoint) return "Ok";
  if (speed > speedLimit) {
    points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12) return "lisence suspended";
    return "points:" + points;
  }
}

let checkspeed = checkSpeed(130);
console.log(checkspeed);
