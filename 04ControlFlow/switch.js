/*
switch (key) {
    case value:

    break;

    default:
        break;
}
*/

/*
1.5 Switch Statement
Used when multiple conditions depend on a single value.
*/

let day = "sunday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is coming!");
    break;
  default:
    console.log("A regular day.");
}
