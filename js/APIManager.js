var APIManager = (function() {
    var server_URL = "http://apiDEV.doralab.co.kr/";

    var checkAppVer = new ApiInfo();
    checkAppVer.apiUrl = "sen/app/ver";
    checkAppVer.requestParamsAry = ["app_id", "os", "c_ver", "client_uid", "country", "language", "time_zone"];
    checkAppVer.resultParamsAry = ["res", "ver", "summit", "force_update", "update_url", "cs_email", "info", "local_date"];

    var signup_path = new ApiInfo();
    signup_path.apiUrl = "slp.user.account.chk.signup.path";
    signup_path.requestParamsAry = ["app_id", "os", "client_uid", "email", "language", "time_zone"];
    signup_path.resultParamsAry = ["res", "signup_path", "secession"];

    var signup = new ApiInfo();
    signup.apiUrl = "slp.user.account.create";
    signup.requestParamsAry = ["app_id", "os", "email", "password", "country", "signup_path", "language", "time_zone"];
    signup.resultParamsAry = ["res", "account_id"];

    var login = new ApiInfo();
    login.apiUrl = "slp.user.account.login";
    login.requestParamsAry = ["app_id", "os", "client_uid", "email", "password", "signup_path", "language", "time_zone"];
    login.resultParamsAry = ["res", "account_id", "access_token", "is_allow_app"];

    var apiParams = "";

    var dicObj = {
        CheckAppVer: checkAppVer,
        SignupPath: signup_path,
        SignUp: signup,
        Login: login
    };

    return {
        GetAPIDIC: function() {
            return dicObj;
        },

        GetServerUrl: function() {
            return server_URL;
        },

        SetServerURL: function(_ServerUrl) {
            server_URL = _ServerUrl;
        }
    };
})();
