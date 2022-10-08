// When using prompts, use setInterval(function() {CODE HERE}, 1); to do it.
// prompt("PROMPT HERE");
// setInterval(function() {
//   var promptValue = localStorage.getItem("promptValue");
//   CODE HERE
// }, 1);
function submitPlan() {
  var plan = document.getElementById("plan").value;
  if (plan == "none") {
    alert("Please choose a plan!");
    // alert(a);
  } else {
    document.getElementById("planConfirmation").innerHTML = plan;
  }
}
function password() {
  var password = document.getElementById("password").value;
  localStorage.setItem("password", password);
  alert("Done!");
}
// Custom Alerts and Prompts
function alert(alertName) {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("background").style.display = "block";
  document.getElementById("alertTitle").innerHTML = alertName;
  document.getElementById("alertOK").onclick = function() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("background").style.display = "none";
  };
  // setTimeout(function() {
  //   document.getElementById("customAlert").style.display = "none";
  // }, 1000);
}
function none() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("background").style.display = "none";
}
setInterval(function() {
  var customAlert = document.getElementById("alertTitle").innerHTML;
  if (customAlert == "") {
    document.getElementById("customAlert").style.display = "none";
  }
}, 1);
function cprompt(promptValue) {
  document.getElementById("background").style.display = "block";
  setTimeout(function() {
    prompt(promptValue);
    document.getElementById("background").style.display = "none";
  }, 5);
}
// NO PROMPTS FOR NOW
// function prompt(promptName, prompt) {
//   document.getElementById("customPrompt").style.display = "block";
//   document.getElementById("promptTitle").innerHTML = promptName;

//   document.getElementById("promptOK").onclick = function() {
//     var promptValue = document.getElementById("prompt").value;
//     document.getElementById("customPrompt").style.display = "none";
//     document.getElementById("prompt").value = "";
//     localStorage.setItem("promptValue", promptValue);
//   };

//   document.getElementById("promptCancel").onclick = function() {
//     document.getElementById("prompt").value = "";
//     var promptValue = "Canceled";
//     document.getElementById("customPrompt").style.display = "none";
//     localStorage.setItem("promptValue", promptValue);
//   };
// }

// END CUSTOM ALERT AND PROMPT
// Make the DIV element draggable:
