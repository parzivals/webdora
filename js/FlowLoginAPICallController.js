function FlowLoginAPICallController() {
    var apiSignupPath = APIManager.SignupPath;
    var apiSignup = APIManager.SignUp;
    var apiLogin = APIManager.Login;

    var loginAccount = AccountManager.GetLoginAccount();

    $(LoginObjs.signuppath_proc).css("background-color","");
    $(LoginObjs.signup_proc).css("background-color","");
    $(LoginObjs.login_proc).css("background-color","");

    LoginObjs.login_log.innerText = "";
    LoginObjs.signup_log.innerText = "";
    LoginObjs.signuppath_log.innerText = "";

    if ( loginAccount.account_id === AccountType.DIC.NewGuest) { // 신규 게스트 로그인 선택.
      loginAccount.isGuest = true;
      loginAccount.client_uid = AccountManager.ResetClientUid();
    }

    $(LoginObjs.signuppath_proc).css("background-color","#a5d6a7");
    apiSignupPath.RequestAPI(ResultSignUpPath);

    // signup_path api 결과
    function ResultSignUpPath() {
        if (JSON) {
          var jsonObj = apiSignupPath.resultValue;
          LoginObjs.signuppath_log.innerHTML = apiSignupPath.resultHtml ;

          // for (var key in jsonObj){
          //   LoginObjs.signuppath_log.innerText += key + " : " + jsonObj[key] + "\r\n" ;
          // }

          if (jsonObj.res == '0') {
            $(LoginObjs.signuppath_proc).css("background-color","#2196f3");

            AccountManager.SetSignupPath(jsonObj.signup_path);

            if ( !jsonObj.signup_path ) {
              // signup
              $(LoginObjs.signup_proc).css("background-color","#a5d6a7");
              apiSignup.RequestAPI(ResultSignUp);
            }
            else {
              // login
              $(LoginObjs.signup_proc).css("background-color","#5e5e5e");
              $(LoginObjs.login_proc).css("background-color","#a5d6a7");
              apiLogin.RequestAPI(ResultLogin);
            }

            return;
          }
        }
        else {
          LoginObjs.signuppath_log.innerText = apiSignupPath.resultHtml ;
        }

        // error
        $(LoginObjs.signuppath_proc).css("background-color","#f44336");
        RefreshUIAccountData();
    }

    // signup api 결과
    function ResultSignUp() {
        if (JSON) {
          var jsonObj = apiSignup.resultValue;
            LoginObjs.signup_log.innerHTML = apiSignup.resultHtml;

          if (jsonObj.res == '0') { // 회원가입 성공.
            $(LoginObjs.signup_proc).css("background-color","#2196f3");

            AccountManager.SetAccountId(jsonObj.account_id);
            AccountManager.SaveAccount( loginAccount );

            // login
            $(LoginObjs.login_proc).css("background-color","#a5d6a7");
            apiLogin.RequestAPI(ResultLogin);
            return;
          }
        }
        else {
          LoginObjs.signup_log.innerText = apiSignup.resultHtml;
        }

        // error
        $(LoginObjs.signup_proc).css("background-color","#f44336");
        RefreshUIAccountData();
    }

    // login(signin) api 결과
    function ResultLogin() {
        if (JSON) {
          var jsonObj = apiLogin.resultValue;
          LoginObjs.login_log.innerHTML = apiLogin.resultHtml;

          if (jsonObj.res == '0') {
            $(LoginObjs.login_proc).css("background-color","#2196f3");

            AccountManager.SetAccessToken(jsonObj.access_token);
            AccountManager.SaveAccount( loginAccount );

            RefreshUIAccountData();
            return;
          }
        }
        else {
            LoginObjs.login_log.innerText = apiLogin.resultHtml;
        }

        // error
        $(LoginObjs.signin_proc).css("background-color","#f44336");
        RefreshUIAccountData();
    }


}
