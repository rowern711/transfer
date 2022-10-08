function passwordSSC() {
  var testV = 1;
  var pass1 = prompt("Please Enter The Password", " ");
  while (testV < 3) {
    if (!pass1) history.go(-1);
    //Change password here
    if (pass1.toLowerCase() == "entrance101password") {
      //Change destination here
      window.open("https://secure-rooms.glitch.me/");
            window.close();
      break;
    }
    testV += 1;
    var pass1 = prompt("Error! Incorrect_Password. Please try again");
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}
function passwordSCAD() {
  var testV = 1;
  var pass1 = prompt("Please Enter The Password", " ");
  while (testV < 3) {
    if (!pass1) history.go(-1);
    //Change password here
    if (pass1.toLowerCase() == "secure102password") {
      //Change destination here
      window.open("CAD.html");
            window.close();
      break;
    }
    testV += 1;
    var pass1 = prompt("Error! Incorrect_Password. Please try again");
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}
