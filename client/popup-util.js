/*eslint-disable */
export const popupUtil = choice => {
  if (
    choice === "Seeing live music and bar-hopping" ||
    choice === "Drink Heavily"
  ) {
    return "Did you know... You can pregame on the flight with JetBlue's drink options! Get 50%-off all drinks with our JetBlue card!!";
  } else if (choice === "Watch cartoons") {
    return "We've got Rom-Coms, Drama, Horror... and yes, Cartoons on our in-flight entertainment! Watch-on, channel surfer!";
  } else if (choice === "Research native wildlife from your destination") {
    return "Stay connected and enjoy JetBlue's FREE on-board wi-fi!";
  } else if (
    choice === "Snacking" ||
    choice === "I need constant snacks" ||
    choice === "Snack on everything in sight" ||
    choice === "I need to have snacks ready at all times"
  ) {
    return "We've got you covered on the munchies front. We've got snacks on snacks on snacks!";
  } else if (
    choice ===
    "As long as I don’t forget my chargers for my devices, who cares!"
  ) {
    return "Fill up on phone juice with a charger at every seat on all JetBlue flights!";
  } else {
    return null;
  }
};
