// step-1: add click event handler with the submit
document.getElementById("login-btn").addEventListener("click", function () {
  // step-2: get the email address inside the email input field
  //always remember to use .value to get text from an input field
  const emailInput = document.getElementById("user-email");
  const email = emailInput.value;
  //step-3: get password
  //3.a: set id on the html element
  //3.b: get the element
  //3.c: get the value from the element
  const passwordInput = document.getElementById("user-password");
  const password = passwordInput.value;

  // do not verify email password on the client side
  // step-4: email and password verify and check wether valid or not
  if (email === "qudraty@gmail.com" && password === "MahmudQ") {
    window.location.href = "bank.html";
  } else {
    alert("Your Not My Child!!!!! Get Out From This Bank🙄");
  }
});
