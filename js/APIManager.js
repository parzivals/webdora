var APIManager = (function() {
    var server_URL = "http://apiDEV.doralab.co.kr/";

    var checkAppVer = new ApiInfo();
    checkAppVer.apiUrl = "sen/app/ver";
    checkAppVer.postParams = "";
    checkAppVer.requestParams = ["app_id", "os", "c_ver", "client_uid", "language", "time_zone" ];
    checkAppVer.resultParams = ["res", "ver", "summit", "force_update", "update_url", "cs_email", "info", "local_date" ];

    var signup_path = new ApiInfo();
    signup_path.apiUrl = "slp.user.account.chk.signup.path";
    signup_path.postParams = "";
    signup_path.requestParams = ["app_id", "os", "client_uid", "email", "language", "time_zone" ];
    signup_path.resultParams = ["res", "signup_path", "secession"];

    var signup = new ApiInfo();
    signup.apiUrl = "slp.user.account.create";
    signup.postParams = "";
    signup.requestParams = ["app_id", "os", "email", "password", "country", "signup_path", "language", "time_zone" ];
    signup.resultParams = ["res", "account_id"];

    var login = new ApiInfo();
    login.apiUrl = "slp.user.account.login";
    login.postParams = "";
    login.requestParams = ["app_id", "os", "client_uid", "email", "password", "signup_path", "language", "time_zone" ];
    login.resultParams = ["res", "account_id", "access_token", "is_allow_app"];

    var apiParams = "";

var dicObj = {
    CheckAppVer:checkAppVer,
    SignupPath:signup_path,
    SignUp:signup,
    login:login
};

    return {
        GetAPIDIC:function(){
          return dicObj;
        },

        GetServerUrl: function() {
            return server_URL;
        },
        GetAPIUrl: function() {
            return api_URL;
        },
        GetApiSignup: function() {
            return signup;
        },
        GetApiLogin: function() {
            return login;
        },
        GetApiSignupPath: function() {
            return signup_path;
        },


        SetServerURL: function(_ServerUrl) {
            server_URL = _ServerUrl;
        }
    };
})();
