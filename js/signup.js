
(function () {
    var signup_link = document.getElementById("signup_link");
    var signupHtmlFile = signup_link.import.getElementById('signup_page');
    var signup_tab = document.getElementById("signup_tab");
    signup_tab.appendChild(signupHtmlFile.cloneNode(true) );
})();


var SignupObjs = function() {
  var eMainIDInput = document.getElementById("new_email");
  var passwordInput = document.getElementById("new_password");
  var logout = document.getElementById("logout");

  var logout_proc = document.getElementById("logout_proc");
  var logout_log = document.getElementById("logout_log");

  var signup_log = document.getElementById("signup_log");
  var signin_log = document.getElementById("signin_log");

  return {
      eMainIDInput: eMainIDInput,
      passwordInput:passwordInput,
      logout:logout,

      logout_proc:logout_proc,
      logout_log:logout_log,

      signup_log:signup_log,
      signin_log:signin_log
  };
};
