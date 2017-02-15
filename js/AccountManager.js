var AccountManager = (function() {
    var app_id = localStorage.getItem("app_id");
    var os = localStorage.getItem("os");
    var c_ver = localStorage.getItem("c_ver");
    var country = localStorage.getItem("country");
    var language = localStorage.getItem("language");
    var time_zone = localStorage.getItem("time_zone");

    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var signup_path = localStorage.getItem("signup_path");
    var client_uid = localStorage.getItem("client_uid");
    var access_token = localStorage.getItem("access_token");

    function ResetClientUid() {
        localStorage.setItem("client_uid",
            function() {
                function s4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }
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

    function GetClientUid() {
        if (!client_uid) {
            ResetClientUid();
        }
        client_uid = localStorage.getItem("client_uid");
        return client_uid;
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
        email: GetEMail,
        password: GetPassWord,
        signup_path: GetSignupPath,
        client_uid: GetClientUid,
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
        GetEMail: GetEMail,
        GetPassWord: GetPassWord,
        GetSignupPath: GetSignupPath,
        GetClientUid: GetClientUid,
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
        SetEMail: function(_email) {
            localStorage.setItem("email", _email);
            email = localStorage.getItem("email");
        },
        SetPassWord: function(_pw) {
            localStorage.setItem("password", _pw);
            password = localStorage.getItem("password");
        },
        SetSignupPath: function(_SignupPath) {
            localStorage.setItem("signup_path", _SignupPath);
            signup_path = localStorage.getItem("signup_path");
        },
        ResetClientUid: ResetClientUid,
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

            email = localStorage.getItem("email");
            password = localStorage.getItem("password");
            signup_path = localStorage.getItem("signup_path");
            client_uid = localStorage.getItem("client_uid");
            access_token = localStorage.getItem("access_token");
        }
    };
})();