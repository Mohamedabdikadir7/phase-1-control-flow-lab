// function scuberGreetingForFeet(distance){
//   // Write your code here!
//   if (distance <= 400){
//     console.log('this on me')
//   }else if (distance > 2500){
//     console.log("I will gladly take your thirty bucks")
//   }else {
//     return "No can do.";
//   }
// }
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// (Optional) Example usage
// let greeting = scuberGreetingForFeet(300); // This one is on me!
// console.log(greeting);


function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go." ;
}


  // Write your code here
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
       return 'Thank you so much.';
        break;
case 'not as generous':
  return 'Thank you.'
      default:
        return "Bye.";
    }
  }
  