function FlowSignupAPICallController() {
    var apiAccountTransition = APIManager.AccountTransition;
    var apiLogin = APIManager.Login;

    var loginAccount = AccountManager.GetLoginAccount();
        console.log(loginAccount);

    var apiStartTime ;
    var apiEndTime ;

    $(SignupObjs.transition_proc).css("background-color","");
    $(SignupObjs.signin_proc).css("background-color","");

    SignupObjs.transition_log.innerText = "";
    SignupObjs.signin_log.innerText = "";

    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if ( !loginAccount.isGuest ) {
      alert("게스트만 회원등록을 할 수 있습니다.");
      return;
    }
    else if( !Regex.regexEmail.test( SignupObjs.eMailIDInput.value ) || !Regex.IsCheckPassword( SignupObjs.passwordInput.value )   ){
          alert("이메일/비밀번호가 올바르지 않습니다.");
      return;
    }
    else {
          $(SignupObjs.transition_proc).css("background-color","#a5d6a7");
          apiStartTime = new Date();

          AccountManager.SetEMail( SignupObjs.eMailIDInput.value );
          AccountManager.SetPassWord( SignupObjs.passwordInput.value );

          apiAccountTransition.RequestAPI(ResultAccountTransition);
    }

    // signup_path api 결과
    function ResultAccountTransition(txt) {
      apiEndTime = new Date();
      var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiAccountTransition.resultValue = txt;
        SignupObjs.transition_log.innerText = TimeGap + "ms\r\n"+ txt;

        if (JSON) {
          var jsonObj = JSON.parse( txt );
          if (jsonObj.res == '0') {

            loginAccount.isGuest = false;
            AccountManager.SetAccountId(jsonObj.account_id);
            AccountManager.SaveAccount( loginAccount );
            $(SignupObjs.transition_proc).css("background-color","#2196f3");

            // login
            $(SignupObjs.signin_proc).css("background-color","#a5d6a7");
            apiStartTime = new Date();
            apiLogin.RequestAPI(ResultSignIn);

            return;
          }
          else if (jsonObj.res == '-200001' ) {
            alert("중복된 이메일 입니다.");
          }
        }
        // error
        $(SignupObjs.transition_proc).css("background-color","#f44336");
    }

    // login(signin) api 결과
    function ResultSignIn(txt) {
      apiEndTime = new Date();
      var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();

        apiLogin.resultValue = txt;
        SignupObjs.signin_log.innerText = TimeGap + "ms\r\n"+ txt;

        (function(){
          $('.collapsible').collapsible();
        })();

        if (JSON) {
          var jsonObj = JSON.parse( txt );

          if (jsonObj.res == '0') {
            $(SignupObjs.signin_proc).css("background-color","#2196f3");

            AccountManager.SetAccessToken(jsonObj.access_token);
            AccountManager.SaveAccount( loginAccount );

            RefreshUIAccountData();
            return;
          }
        }
        // error
        $(SignupObjs.signin_proc).css("background-color","#f44336");
    }
}
