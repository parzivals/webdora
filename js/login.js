
(function () {
      var login_link = document.getElementById("login_link");
      var loginHtmlFile = login_link.import.getElementById('login_page');
      var login_tab = document.getElementById("login_tab");
      login_tab.appendChild(loginHtmlFile.cloneNode(true) );
})();

var LoginObjs = function() {
  var loginBtn = document.getElementById("login_btn");
  var signuppath_proc = document.getElementById("signuppath_proc");
  var signup_proc = document.getElementById("signup_proc");
  var signin_proc = document.getElementById("signin_proc");

  var signuppath_log = document.getElementById("signuppath_log");
  var signup_log = document.getElementById("signup_log");
  var signin_log = document.getElementById("signin_log");


  return {
      loginBtn: loginBtn,
      signuppath_proc:signuppath_proc,
      signup_proc:signup_proc,
      signin_proc:signin_proc,

      signuppath_log:signuppath_log,
      signup_log:signup_log,
      signin_log:signin_log
  };
};
