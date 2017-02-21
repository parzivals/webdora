function FlowAPICallController() {
  console.log( "FlowAPICallController" );

    var apiSignupPath = APIManager.SignupPath;
    var apiSignup = APIManager.SignUp;
    var apiLogin = APIManager.Login;

    var loginType = AccountManager.GetLoginType();
    var email;

    if (loginType === LoginType.DIC.Guest) { // 게스트 로그인 선택.
      console.log( "guest" );
      email = AccountManager.GetGuestID();
      if (!email) { // guest id 없음. 신규 생성
        console.log( "new guest" );
            email = AccountManager.GetClientUid() + "@guest.com";
      }
      AccountManager.SetEMail(email);
      AccountManager.SetPassWord(123456);
      // check signup path
      apiSignupPath.RequestAPI(ResultSignUpPath);
    }
    else { // 계정 로그인 선택
      console.log( "account" );
      email = AccountManager.GetEMail();
      if (email) { // 계정 id 있음.
        console.log( "id" );
          // login
          apiLogin.RequestAPI(ResultLogin);
      } else { // 계정 id 없음.
        console.log( "new guest" );
          email = AccountManager.GetClientUid() + "@guest.com";
          AccountManager.SetEMail(email);
          AccountManager.SetPassWord(123456);
          // check signup path
          apiSignupPath.RequestAPI(ResultSignUpPath);
      }
    }

    function ResultSignUpPath(txt) {
      console.log( "ResultSignUpPath" );
        apiSignupPath.resultValue = txt;

        if (JSON) {
          var jsonObj = JSON.parse( txt );

          console.log(jsonObj.res);
          if (jsonObj.res == '0') {
            console.log(jsonObj.secession);
            console.log(jsonObj.signup_path);
            var txt = LoginObjs.signuppath_proc.getAttribute("class")
            LoginObjs.signuppath_proc.setAttribute("class", txt +" red" )

                    console.log( LoginObjs.signuppath_proc );
                        console.log( LoginObjs.signuppath_proc.getAttribute("class") );

            AccountManager.SetSignupPath(jsonObj.signup_path);
            // signup
            // apiSignup.RequestAPI(ResultSignUp);
          }
        }
        else {
          console.log( txt );
        }
    }

    function ResultSignUp( txt) {
      console.log( "ResultSignUp" );
        apiSignup.resultValue = txt;

              if (JSON) {
                var jsonObj = JSON.parse( txt );

                console.log(jsonObj.res);
                if (jsonObj.res == '0') {
                  console.log(jsonObj.account_id);
                  AccountManager.SetAccountId(jsonObj.account_id);

                  // login
                  apiLogin.RequestAPI(ResultLogin);
                }
              }
              else {
                console.log( txt );
              }
    }


    function ResultLogin(txt) {
      console.log( "ResultLogin" );
        apiLogin.resultValue = txt;

              if (JSON) {
                var jsonObj = JSON.parse( txt );

                console.log(jsonObj.res);
                if (jsonObj.res == '0') {
                  console.log(jsonObj.account_id);
                  console.log(jsonObj.access_token);
                  console.log(jsonObj.is_allow_app);
                  AccountManager.SetAccessToken(jsonObj.access_token);
                }
              }
              else {
                console.log( txt );
              }
      // login
    }


}
