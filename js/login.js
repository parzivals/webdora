

var LoginObjs = function() {
  var loginObjMain = document.getElementById("login_page");
  var startBtn = document.getElementById("start_btn");

  var signuppath_proc = document.getElementById("signuppath_proc");
  var signuppath_log = document.getElementById("signuppath_log");

  var signup_proc = document.getElementById("guest_signup_proc");
  var signup_log = document.getElementById("guest_signup_log");

  var login_proc = document.getElementById("login_proc");
  var login_log = document.getElementById("login_log");

  return {
    loginObjMain:loginObjMain,
      startBtn: startBtn,
      signuppath_proc:signuppath_proc,
      signuppath_log:signuppath_log,

      signup_proc:signup_proc,
      signup_log:signup_log,

      login_proc:login_proc,
      login_log:login_log
  };
};
