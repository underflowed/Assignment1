function validate() { // Function used for input validation on page 3
  const TAKENUSERNAMES = new Array("Harry", "Elizabeth", "Shana");
  let enteredUsername = document.getElementById("username").value; //Accesses entered username in DOM
  let enteredPw = document.getElementById("password").value;
  let enteredpwConfirm = document.getElementById("confirmPassword").value;
  if (enteredPww != enteredpwConfirm) {
    alert("The passwords do not match!");
    return false; // returning false here so form does not submit
  }
  if (TAKENUSERNAMES.includes(enteredUsername)) {
    alert("That username is taken!");
    return false;
  }
}

let canvas = document.getElementById("mycanvas");

if (canvas.getContext) {
  let ctx = canvas.getContext('2d');
  ctx.font = "20px Helvitica";
  ctx.textBaseline = 'top';
  ctx.textAlign = "start";
  ctx.fillText("Top o' the mornin to ya!", 50, 50);
  ctx.strokeText("Top o' the mornin to ya!", 50, 50);
} else {
  alert("Canvas not supported on this browser");
}