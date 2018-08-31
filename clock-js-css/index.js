const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate(secondHand, minHand, hourHand) {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = ((mins / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;

  if (secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = 'none');
  } else {
    allHands.forEach(hand => hand.style.transition = '');
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(() => setDate(secondHand, minHand, hourHand), 1000);
