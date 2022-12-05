function scuberGreetingForFeet(distance){
let result
if (distance <= 400 ){
  result = 'This one is on me!'
}else if(distance > 2000 && distance < 2500){
result ='I will gladly take your thirty bucks.'
}
else if(distance >2500){
  result = 'No can do.'
}
 return result
}
scuberGreetingForFeet(300)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2600)


function ternaryCheckCity(city){
let result
result =  city ==="NYC" ? "Ok, sounds good." : "No go.";
 return(result)
}
ternaryCheckCity("NYC")
ternaryCheckCity("MOMBASA")


function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch(tip){
    case 'the tip is generous':
 console.log('Thank you so much.')
    break;
    case 'the tip is not as generous':
    console.log('Thank you.')
    break;
    default:
      console.log('Bye.')
      break;
  }
 return(tip)
}
switchOnCharmFromTip("the tip is generous")
switchOnCharmFromTip("'the tip is not as generous")
switchOnCharmFromTip("is generousity")
