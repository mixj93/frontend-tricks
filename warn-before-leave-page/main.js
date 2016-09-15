// window beforeunload event

window.addEventListener("beforeunload", function (e) {
  console.log("leaving");

  var confirmationMessage = "lalala"; // cannot change default prompt message

  (e || window.event).returnValue = confirmationMessage;     // Gecko and Trident
  return confirmationMessage;                                // Gecko and WebKit

});
