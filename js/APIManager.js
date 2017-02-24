var APIManager = (function() {
    var server_URL = "http://apiDEV.doralab.co.kr/";

    var checkAppVer = new ApiData();
    checkAppVer.apiUrl = "sen/app/ver";
    checkAppVer.requestParamsAry = ["app_id", "os", "c_ver", "client_uid", "country", "language", "time_zone"];
    checkAppVer.resultParamsAry = ["res", "ver", "summit", "force_update", "update_url", "cs_email", "info", "local_date"];

    var signup_path = new ApiData();
    signup_path.apiUrl = "slp.user.account.chk.signup.path";
    signup_path.requestParamsAry = ["app_id", "os", "client_uid", "email", "language", "time_zone"];
    signup_path.resultParamsAry = ["res", "signup_path", "secession"];

    var signup = new ApiData();
    signup.apiUrl = "slp.user.account.create";
    signup.requestParamsAry = ["app_id", "os", "email", "password", "country", "signup_path", "language", "time_zone"];
    signup.resultParamsAry = ["res", "account_id"];

    var login = new ApiData();
    login.apiUrl = "slp.user.account.login";
    login.requestParamsAry = ["app_id", "os", "client_uid", "email", "password", "signup_path", "language", "time_zone"];
    login.resultParamsAry = ["res", "account_id", "access_token", "is_allow_app"];

    var accountTransition = new ApiData();
    accountTransition.apiUrl = "slp.user.account.new.email.pwd";
    accountTransition.requestParamsAry = ["app_id", "account_id", "email", "password", "signup_path", "country", "language", "time_zone"];
    accountTransition.resultParamsAry = ["res", "account_id" ];

    var accountInfo = new ApiData();
    accountInfo.apiUrl = "slp.user.account.get.info";
    accountInfo.requestParamsAry = ["app_id", "os", "client_uid", "account_id", "access_token", "language", "time_zone"];
    accountInfo.resultParamsAry = ["res", "email", "account_id", "access_token", "is_allow_app", "country", "cur_pf_id", "star", "login_type", "pf_list{pf_id,name,birthday,gender,img_url,img_th_url,hidden,limit_time}" ];

    var myPoint = new ApiData();
    myPoint.apiUrl = "slp.user.get.my.point";
    myPoint.requestParamsAry = ["app_id", "os", "client_uid", "account_id", "access_token", "c_ver", "country", "language", "time_zone"];
    myPoint.resultParamsAry = ["res", "account_id", "MSG", "POINT" ];

    var buyHistory = new ApiData();
    buyHistory.apiUrl = "slp.get.buy.history";
    buyHistory.requestParamsAry = ["app_id", "os", "client_uid", "account_id", "access_token", "c_ver", "country", "language", "time_zone"];
    buyHistory.resultParamsAry = ["res", "buy_list" ];

    var dicObj = {
        CheckAppVer: checkAppVer,
        SignupPath: signup_path,
        SignUp: signup,
        Login: login,
        AccountTransition:accountTransition,
        AccountInfo:accountInfo,
        MyPoint:myPoint,
        buyHistory:buyHistory,
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
        },

        CheckAppVer: checkAppVer,
        SignupPath: signup_path,
        SignUp: signup,
        Login: login,
        AccountTransition:accountTransition,
        AccountInfo:accountInfo,
        MyPoint:myPoint,
        buyHistory:buyHistory,
    };
})();
