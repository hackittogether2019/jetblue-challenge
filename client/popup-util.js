export const popupUtil = choice => {
  if (choice === "Seeing live music and bar-hopping") {
    return "PREGAME ON THE FLIGHT WITH JETBLUES DRINK OPTIONS, GET 50% OFF WITH JETBLUE CARD!!!!!";
  } else if (choice === "Watch cartoons") {
    return " THERE ARE FREE MOVIES";
  } else if (choice === "Drink Heavily") {
    return "PREGAME ON THE FLIGHT WITH JETBLUES DRINK OPTIONS, GET 50% OFF WITH JETBLUE CARD!!!!!";
  } else if (choice === "Research native wildlife from your destination") {
    return "FREE WIFI SO YOU CAN ACTUALLY SURF DA WEB";
  } else if (
    choice === "Snacking" ||
    choice === "I need constant snacks" ||
    choice === "Snack on everything in sight" ||
    choice === "I need to have snacks ready at all times"
  ) {
    return "FREE SNACKS";
  } else if (
    choice ===
    "As long as I don’t forget my chargers for my devices, who cares!"
  ) {
    return "JETBLUE HAS CHARGERS ON THE PLANE";
  } else {
    return null;
  }
};
