const age=19;
const isFemale=true;
const driverStatus="bob";
const firstName="Sarah";
const totalAmount="26"

//If-Else
if (age>=18) {
    console.log("Je bent 18 jaar of ouder en mag naar binnen");
}
else {
  console.log("Je bent jonger dan 18 jaar en mag niet naar binnen");
}

if (age>=18 && age<26) {
  console.log("Je krijg 50% korting!");
}
else {
  console.log("Veel plezier!");
}

if (isFemale) {
  console.log("Je bent een vrouw");
}
else {
  console.log("Je bent een man");
}
//Let op; als je het 'is gelijk aan' teken wil gebruiken, kies dan voor == ipv =
if (driverStatus=="bob") {
  console.log("Je mag rijden");
}
else {
  console.log("Je mag helaas niet meer rijden");
}//Let op: dubbel ==!
if (firstName == "Sara" || "Sarah" || "Bram"|| "Abraham") {
  console.log("Je ontvangt een gratis biertje!");
} else {
  console.log("Welkom");
}
if (totalAmount>25 && totalAmount<50) {
  console.log("Gratis (vega)bitterballen!")
}
if (totalAmount>=50 && totalAmount <100) {
  console.log("Gratis portie nachos!")
}
if (totalAmount>=100) {
  console.log("Gratis flesje champagne!")  
}