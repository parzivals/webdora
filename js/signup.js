
var SignupObjs = function() {
  var eMailIDInput = document.getElementById("new_email");
  var passwordInput = document.getElementById("new_password");

  var signup_btn = document.getElementById("signup_btn");

  var transition_proc = document.getElementById("transition_proc");
  var transition_log = document.getElementById("transition_log");

  var signin_proc = document.getElementById("signin_proc");
  var signin_log = document.getElementById("signin_log");

  return {
      eMailIDInput: eMailIDInput,
      passwordInput:passwordInput,

      signup_btn:signup_btn,

      transition_proc:transition_proc,
      transition_log:transition_log,

      signin_proc:signin_proc,
      signin_log:signin_log
  };
};
