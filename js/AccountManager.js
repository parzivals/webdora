var AccountManager = (function() {
    var app_id = localStorage.getItem("app_id");
    var os = localStorage.getItem("os");
    var c_ver = localStorage.getItem("c_ver");
    var country = localStorage.getItem("country");
    var language = localStorage.getItem("language");
    var time_zone = localStorage.getItem("time_zone");
    var login_type = localStorage.getItem("login_type");

    var client_uid = localStorage.getItem("client_uid");
    var guestid = localStorage.getItem("guestid");
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var signup_path = localStorage.getItem("signup_path");
    var account_id = localStorage.getItem("account_id");
    var access_token = localStorage.getItem("access_token");

    function ResetClientUid() {
        localStorage.setItem("client_uid",
            (function() {
                function s4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            })()
        );
        client_uid = localStorage.getItem("client_uid");
    }

    function GetAppID() {
        app_id = localStorage.getItem("app_id");
        return app_id;
    }

    function GetOS() {
        os = localStorage.getItem("os");
        return os;
    }

    function GetVer() {
        c_ver = localStorage.getItem("c_ver");
        return c_ver;
    }

    function GetCountry() {
        country = localStorage.getItem("country");
        return country;
    }

    function GetLanguage() {
        language = localStorage.getItem("language");
        return language;
    }

    function GetTimeZone() {
        time_zone = localStorage.getItem("time_zone");
        return time_zone;
    }

    function GetLoginType() {
        login_type = localStorage.getItem("login_type");
        return login_type;
    }

    function GetClientUid() {
        if (!client_uid) {
            var reset = new ResetClientUid();
        }
        client_uid = localStorage.getItem("client_uid");
        return client_uid;
    }

    function GetGuestID() {
        guestid = localStorage.getItem("guestid");
        return guestid;
    }

    function GetEMail() {
        email = localStorage.getItem("email");
        return email;
    }

    function GetPassWord() {
        password = localStorage.getItem("password");
        return password;
    }

    function GetSignupPath() {
        signup_path = localStorage.getItem("signup_path");
        return signup_path;
    }

    function GetAccountId() {
        account_id = localStorage.getItem("account_id");
        return account_id;
    }

    function GetAccessToken() {
        access_token = localStorage.getItem("access_token");
        return access_token;
    }

    var dicObj = {
        app_id: GetAppID,
        os: GetOS,
        c_ver: GetVer,
        country: GetCountry,
        language: GetLanguage,
        time_zone: GetTimeZone,
        login_type: login_type,

        client_uid: GetClientUid,
        guestid: GetGuestID,
        email: GetEMail,
        password: GetPassWord,
        signup_path: GetSignupPath,
        account_id: GetAccountId,
        access_token: GetAccessToken
    };

    return {
        GetAPIDIC: function() {
            return dicObj;
        },

        GetAppID: GetAppID,
        GetOS: GetOS,
        GetVer: GetVer,
        GetCountry: GetCountry,
        GetLanguage: GetLanguage,
        GetTimeZone: GetTimeZone,

        GetClientUid: GetClientUid,
        GetEMail: GetEMail,
        GetPassWord: GetPassWord,
        GetSignupPath: GetSignupPath,
        GetAccountId:GetAccountId,
        GetAccessToken: GetAccessToken,

        SetAppID: function(_AppID) {
            localStorage.setItem("app_id", _AppID);
            app_id = localStorage.getItem("app_id");
        },
        SetOS: function(_OS) {
            localStorage.setItem("os", _OS);
            os = localStorage.getItem("os");
        },
        SetVer: function(_Ver) {
            localStorage.setItem("c_ver", _Ver);
            c_ver = localStorage.getItem("c_ver");
        },
        SetCountry: function(_Country) {
            localStorage.setItem("country", _Country);
            country = localStorage.getItem("country");
        },
        SetLanguage: function(_Language) {
            localStorage.setItem("language", _Language);
            language = localStorage.getItem("language");
        },
        SetTimeZone: function(_TimeZone) {
            localStorage.setItem("time_zone", _TimeZone);
            time_zone = localStorage.getItem("time_zone");
        },
        SetLoginType: function(_LoginType) {
            localStorage.setItem("login_type", _LoginType);
            login_type = localStorage.getItem("login_type");
        },

        ResetClientUid: ResetClientUid,
        SetGuestID: function(_Guestid) {
            localStorage.setItem("guestid", _Guestid);
            guestid = localStorage.getItem("guestid");
        },
        SetEMail: function(_email) {
            localStorage.setItem("email", _email);
            email = localStorage.getItem("email");
        },
        SetPassWord: function(_pw) {
            localStorage.setItem("password", _pw);
            password = localStorage.getItem("password");
        },
        SetSignupPath: function(_SignupPath) {
            if ( _SignupPath === ''  ) {
              _SignupPath = SignupPath.SLP;
            }
            localStorage.setItem("signup_path", _SignupPath);
            signup_path = localStorage.getItem("signup_path");
        },
        SetAccountId: function( _Account_id) {
            localStorage.setItem("account_id", _Account_id);
            account_id = localStorage.getItem("account_id");
        },
        SetAccessToken: function(_AccessToken) {
            localStorage.setItem("access_token", _AccessToken);
            access_token = localStorage.getItem("access_token");
        },


        ClearData: function() {
            localStorage.clear();

            app_id = localStorage.getItem("app_id");
            os = localStorage.getItem("os");
            c_ver = localStorage.getItem("c_ver");
            country = localStorage.getItem("country");
            language = localStorage.getItem("language");
            time_zone = localStorage.getItem("time_zone");
            login_type = localStorage.getItem("login_type");

            client_uid = localStorage.getItem("client_uid");
            guestid = localStorage.getItem("guestid");
            email = localStorage.getItem("email");
            password = localStorage.getItem("password");
            signup_path = localStorage.getItem("signup_path");
            account_id = localStorage.getItem("account_id");
            access_token = localStorage.getItem("access_token");
        }
    };
})();
