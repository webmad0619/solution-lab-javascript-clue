function randomSelector(stack) {
   let randElement = "";
   randElement = stack[Math.floor(Math.random() * stack.length)];
   return randElement
}

function pickMistery() {
   misteryEnvelope = [];
   misteryEnvelope.push(randomSelector(charactersArray));
   misteryEnvelope.push(randomSelector(weaponsArray));
   misteryEnvelope.push(randomSelector(roomsArray));
   return misteryEnvelope;
}

function revealMistery(envelope) {
   let mistery = "";
   mistery = envelope[0].first_name + " " + envelope[0].last_name + " killed Mr.Boddy using the " + envelope[1].name + " in the " + envelope[2].name + "!!!!";
   return mistery;
}
