// Question No. 1: Value Detective

function describeValue(value) {
  let type = typeof value;
  let status = value ? "truthy" : "falsy";
  return type + "  |  " + status;
}

console.log(describeValue("hello"));
console.log(describeValue(0));         // "number  |  falsy"
console.log(describeValue(null));      // "object  |  falsy"


// Question No. 2: Bangladesh Weekend Machine

function getDayType(dayName) {
  let day = dayName.toLowerCase();
  
  switch (day) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}



// Question No. 3: Username Gatekeeper

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  
  let lowerName = username.toLowerCase();
  if (lowerName.includes("admin")) {
    return "Reserved Word";
  }
  
  return "Available";
}

// Question No. 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50; 
  
  if (distance > 2) {
    let extraKm = distance - 2;
    fare = fare + (extraKm * 15);
  }
  
  fare = fare + (waitingMinutes * 2);
  
  if (isNight) {
    fare = fare + (fare * 0.20);
  }
  
  return fare;
}

// Question No. 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  
  if (runsNeeded <= 0) {
    return "Won";
  }
  
  if (ballsLeft <= 0) {
    return "Lost";
  }
  
  let requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict;
  
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  
  return `Need ${runsNeeded} runs in ${ballsLeft} balls  |  ${verdict}`;
};