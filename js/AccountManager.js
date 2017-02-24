var AccountManager = (function() {
    var app_id = sessionStorage.getItem("app_id");
    var os = sessionStorage.getItem("os");
    var c_ver = sessionStorage.getItem("c_ver");
    var country = sessionStorage.getItem("country");
    var language = sessionStorage.getItem("language");
    var time_zone = sessionStorage.getItem("time_zone");

    var account_id ;
    var client_uid ;
    var signup_path ;
    var email ;
    var password ;
    var access_token ;

    var loginAccount = new AccountData();//= sessionStorage.getItem("login_account");

    var accountArray = JSON.parse( localStorage.getItem("accounts") ) || [];

    function ResetClientUid() {
        var clientUid = (function() {
                function s4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            })();

        return clientUid;
    }

    function GetAppID() {
        app_id = sessionStorage.getItem("app_id");
        return app_id;
    }

    function GetOS() {
        os = sessionStorage.getItem("os");
        return os;
    }

    function GetVer() {
        c_ver = sessionStorage.getItem("c_ver");
        return c_ver;
    }

    function GetCountry() {
        country = sessionStorage.getItem("country");
        return country;
    }

    function GetLanguage() {
        language = sessionStorage.getItem("language");
        return language;
    }

    function GetTimeZone() {
        time_zone = sessionStorage.getItem("time_zone");
        return time_zone;
    }

    function GetAccountId() {
      account_id = loginAccount.account_id;
        return account_id;
    }

    function GetClientUid() {
      client_uid = loginAccount.client_uid;
        // if ( loginAccount.account_id == AccountType.DIC.NewGuest ) {
        //     client_uid = ResetClientUid();
        //     loginAccount.client_uid = client_uid ;
        // }
        return client_uid;
    }

    function GetEMail() {
        email = loginAccount.email;
          if ( loginAccount.account_id == AccountType.DIC.NewGuest ) {
              email = ResetClientUid() + "@guest.com";
              loginAccount.email = email ;
          }
        return email;
    }

    function GetPassWord() {
        password = loginAccount.password;

          if ( loginAccount.account_id == AccountType.DIC.NewGuest ) {
              password = 123456;
              loginAccount.password = password ;
          }

        return password;
    }

    function GetSignupPath() {
        signup_path = loginAccount.signup_path;

          // if ( !loginAccount.account_id || loginAccount.account_id === AccountType.DIC.NewGuest ) {
          //     signup_path = SignupPath.SLP ;
          //     loginAccount.signup_path = signup_path ;
          // }
        return signup_path;
    }

    function GetAccessToken() {
        access_token = loginAccount.access_token;
        return access_token;
    }

    function GetLoginAccount() {
        return loginAccount;
    }

    function GetAccounts() {
      return accountArray;
    }

    function GetAccountById( _AccountId ) {
      var accountObj ;
      if ( Array.isArray(accountArray) && accountArray.length > 0) {
        var tmp ;
        for (var i = 0; i < accountArray.length; i++) {
            tmp = accountArray[i] ;
            if ( tmp.account_id == _AccountId ) {
              accountObj = tmp;
              break;
            }
        }
      }
      return accountObj ;
    }

    var dicObj = {
        app_id: GetAppID,
        os: GetOS,
        c_ver: GetVer,
        country: GetCountry,
        language: GetLanguage,
        time_zone: GetTimeZone,

        account_id: GetAccountId,
        client_uid: GetClientUid,
        email: GetEMail,
        password: GetPassWord,
        signup_path: GetSignupPath,
        access_token: GetAccessToken,
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
        GetLoginAccount:GetLoginAccount,

        GetClientUid: GetClientUid,
        GetEMail: GetEMail,
        GetPassWord: GetPassWord,
        GetSignupPath: GetSignupPath,
        GetAccountId:GetAccountId,
        GetAccessToken: GetAccessToken,

        SetAppID: function(_AppID) {
            sessionStorage.setItem("app_id", _AppID);
            app_id = sessionStorage.getItem("app_id");
        },
        SetOS: function(_OS) {
            sessionStorage.setItem("os", _OS);
            os = sessionStorage.getItem("os");
        },
        SetVer: function(_Ver) {
            sessionStorage.setItem("c_ver", _Ver);
            c_ver = sessionStorage.getItem("c_ver");
        },
        SetCountry: function(_Country) {
            sessionStorage.setItem("country", _Country);
            country = sessionStorage.getItem("country");
        },
        SetLanguage: function(_Language) {
            sessionStorage.setItem("language", _Language);
            language = sessionStorage.getItem("language");
        },
        SetTimeZone: function(_TimeZone) {
            sessionStorage.setItem("time_zone", _TimeZone);
            time_zone = sessionStorage.getItem("time_zone");
        },

        SetLoginAccount: function( _AccountId ) {
          loginAccount = GetAccountById(_AccountId);
          
          if ( !loginAccount ) {
            loginAccount = new AccountData();
            loginAccount.account_id = _AccountId;
          }
        },


        GetAccounts:GetAccounts,
        GetAccountById:GetAccountById,
        GetAccountByIndex: function ( _Index ) {
          return accountArray[_Index];
        },
        SaveAccount: function ( _AccountDataObj ) {
          var acct = GetAccountById( _AccountDataObj.account_id ) ;
          if (acct) {
            acct = _AccountDataObj ;
          }
          else {
            accountArray.push( _AccountDataObj );
          }

          localStorage.setItem("accounts", JSON.stringify(accountArray) );
          accountArray = JSON.parse( localStorage.getItem("accounts"));

          if ( loginAccount.account_id != AccountType.DIC.NewGuest ) {
            loginAccount = GetAccountById( loginAccount.account_id );
          }
        },
        RemoveAccountById: function ( _AccountId ) {
          var index ;
          for (var i = 0; i < accountArray.length; i++) {
              if ( accountArray[i].account_id === _AccountId ) {
                index = i;
                break;
              }
          }
          if (index) {
            accountArray.splice( index, 1);
            localStorage.setItem("accounts", JSON.stringify(accountArray) );
            accountArray = JSON.parse( localStorage.getItem("accounts"));
          }
          else {
            console.log( "remove Fail" );
          }
        },

        ResetClientUid: ResetClientUid,

        SetEMail: function(_email) {
            email = _email;
            loginAccount.email = email;
        },
        SetPassWord: function(_pw) {
            password = _pw ;
            loginAccount.password = password;
        },
        SetSignupPath: function(_SignupPath) {
            if ( !_SignupPath  ) {
              _SignupPath = SignupPath.SLP;
            }
            signup_path = _SignupPath;
            loginAccount.signup_path = signup_path ;
        },
        SetAccountId: function( _Account_id) {
            account_id = _Account_id;
            loginAccount.account_id = account_id;
        },
        SetAccessToken: function(_AccessToken) {
            access_token = _AccessToken;
            loginAccount.access_token = access_token;
        },


        ClearData: function() {
            sessionStorage.clear();
            app_id = sessionStorage.getItem("app_id");
            os = sessionStorage.getItem("os");
            c_ver = sessionStorage.getItem("c_ver");
            country = sessionStorage.getItem("country");
            language = sessionStorage.getItem("language");
            time_zone = sessionStorage.getItem("time_zone");

            // loginAccount = sessionStorage.getItem("login_account");


            localStorage.clear();
            accountArray = JSON.parse( localStorage.getItem("accounts") ) || [];
            // client_uid = localStorage.getItem("client_uid");
            // guestid = localStorage.getItem("guestid");
            // email = localStorage.getItem("email");
            // password = localStorage.getItem("password");
            // signup_path = localStorage.getItem("signup_path");
            // account_id = localStorage.getItem("account_id");
            // access_token = localStorage.getItem("access_token");
        }
    };
})();
