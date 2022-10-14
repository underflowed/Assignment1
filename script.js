function validate(){
  const TAKENUSERNAMES = new Array("Harry","Elizabeth","Shana");
  let enteredUsername = document.getElementById("username").value;
  let pw = document.getElementById("password").value;
  let pwConfirm = document.getElementById("confirmPassword").value;
  if(pw != pwConfirm) {
    alert("The passwords do not match!");
    return false;
  }
  if(TAKENUSERNAMES.includes(enteredUsername)){
    alert("That username is taken!");
    return false;
  }
}