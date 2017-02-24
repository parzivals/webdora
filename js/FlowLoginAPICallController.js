function FlowLoginAPICallController() {
    var apiSignupPath = APIManager.SignupPath;
    var apiSignup = APIManager.SignUp;
    var apiLogin = APIManager.Login;

    var loginAccount = AccountManager.GetLoginAccount();

    var apiStartTime ;
    var apiEndTime ;

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
    apiStartTime = new Date();
    apiSignupPath.RequestAPI(ResultSignUpPath);

    // signup_path api 결과
    function ResultSignUpPath(txt) {
      apiEndTime = new Date();
      var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiSignupPath.resultValue = txt;
        LoginObjs.signuppath_log.innerText = TimeGap + "ms\r\n"+ txt;

        if (JSON) {
          var jsonObj = JSON.parse( txt );

          if (jsonObj.res == '0') {
            $(LoginObjs.signuppath_proc).css("background-color","#2196f3");

            AccountManager.SetSignupPath(jsonObj.signup_path);

            apiStartTime = new Date();
            if ( !jsonObj.signup_path ) {
              // signup
              $(LoginObjs.signup_proc).css("background-color","#a5d6a7");
              apiSignup.RequestAPI(ResultSignUp);
            }
            else {
              // login
              $(LoginObjs.login_proc).css("background-color","#a5d6a7");
              apiLogin.RequestAPI(ResultLogin);
            }
            return;
          }
        }
        // error
        $(LoginObjs.signuppath_proc).css("background-color","#f44336");
    }

    // signup api 결과
    function ResultSignUp( txt) {
      apiEndTime = new Date();
      var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiSignup.resultValue = txt;
        LoginObjs.signup_log.innerText = TimeGap + "ms\r\n"+ txt;

        if (JSON) {
          var jsonObj = JSON.parse( txt );

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
        // error
        $(LoginObjs.signup_proc).css("background-color","#f44336");
    }

    // login(signin) api 결과
    function ResultLogin(txt) {
      apiEndTime = new Date();
      var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();

        apiLogin.resultValue = txt;
        LoginObjs.login_log.innerText = TimeGap + "ms\r\n"+ txt;

        (function(){
          $('.collapsible').collapsible();
        })();

        if (JSON) {
          var jsonObj = JSON.parse( txt );

          if (jsonObj.res == '0') {
            $(LoginObjs.login_proc).css("background-color","#2196f3");

            AccountManager.SetAccessToken(jsonObj.access_token);
            AccountManager.SaveAccount( loginAccount );

            RefreshUIAccountData();
            return;
          }
        }
        // error
        $(LoginObjs.signin_proc).css("background-color","#f44336");
    }


}
