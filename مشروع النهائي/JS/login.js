let loginerror = document.getElementById("login-error-msg");
loginerror.style.opacity = 0;
let userName = document.getElementsByTagName("input")[0];

let email = document.getElementsByTagName("input")[1];

let pass = document.getElementById("Password");
let loginButt = document.getElementById("login1");

// let regex = /^(?=.*[a-z]){8,}$/;

loginButt.addEventListener("click", function (e) {
  e.preventDefault();
  let regex = /^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[@#$%\^&+=]).{8,}$/
  let passValue = pass.value;
  let result = regex.test(passValue);
  console.log(userName.value);
  console.log(email.value);
  console.log(pass.value);
  console.log(result);
  if (!result) {
    loginerror.style.opacity = 1;
    
  } else {
   
    window.location.href = "../HTML/mainpage.html";
  }
});

