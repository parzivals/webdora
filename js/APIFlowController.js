function FlowAPICallController() {

    var apiSignupPath = APIManager.SignupPath;
    var apiSignup = APIManager.SignUp;
    var apiLogin = APIManager.Login;

    var email = AccountManager.GetEMail();
    if (email) {
        // login
        apiLogin.RequestAPI(ResultLogin);
    } else {
        email = AccountManager.GetClientUid() + "@guest.com";
        AccountManager.SetEMail(email);
        AccountManager.SetPassWord(123456);
        // check signup path
        apiSignupPath.RequestAPI(ResultSignUpPath);
    }


    // AccountManager.SetEMail('');

    function ResultSignUpPath(txt) {
        apiSignupPath.resultValue = txt;

        if (JSON) {
          var jsonObj = JSON.parse( txt );

          console.log(jsonObj.res);
          if (jsonObj.res == '0') {
            console.log(jsonObj.secession);
            console.log(jsonObj.signup_path);
            AccountManager.SetSignupPath(jsonObj.signup_path);
          }
        }
        else {
          console.log( txt );
        }
        // signup
        apiSignup.RequestAPI(ResultSignUp);
    }

    function ResultSignUp( txt) {
        apiSignup.resultValue = txt;

              if (JSON) {
                var jsonObj = JSON.parse( txt );

                console.log(jsonObj.res);
                if (jsonObj.res == '0') {
                  console.log(jsonObj.account_id);
                  AccountManager.SetAccountId(jsonObj.account_id);
                }
              }
              else {
                console.log( txt );
              }
              // login
              apiLogin.RequestAPI(ResultLogin);
    }


    function ResultLogin(txt) {
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
