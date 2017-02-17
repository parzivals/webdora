function ApiInfo() {
    var apiUrl = "";
    var requestParamsAry = [];
    var resultParamsAry = [];
    var requestValue = "";
    var resultValue = "";

    var resultCallBack;

    function GetAPIUrl() {
      return APIManager.GetServerUrl() + this.apiUrl ;
    }

    function GetRequestValue() {
      this.requestValue = "";

      // var data = new FormData();

      for (var i = 0; i < this.requestParamsAry.length; i++) {
        var key = this.requestParamsAry[i];
        var value = AccountManager.GetAPIDIC()[key]();
        this.requestValue += "&" + key + "=" + value ;

        // data.append( key, value );
      }

      return this.requestValue ;
      // return data ;
    }

    function GetResultValue() {
      return this.resultValue ;
    }

    // API 호출.
    function RequestAPI( fCallBack ){

      this.resultCallBack = null;
      if ( typeof fCallBack === 'function' ) {
          this.resultCallBack = fCallBack;
      }

      var baeApi = new BaeApi( this.GetAPIUrl() , this.GetRequestValue(), APIResultCallBack );
      baeApi();
    }

    // API 결과
    function APIResultCallBack( txt ) {
      var apiInfo = MainObjs.apiInfo ;
      apiInfo.resultValue = txt;
        if ( typeof apiInfo.resultCallBack === 'function' ) {
             apiInfo.resultCallBack( apiInfo.resultValue );
        }
    }

    return{
      apiUrl:apiUrl,
      requestParamsAry:requestParamsAry,
      resultParamsAry:resultParamsAry,
      requestValue:requestValue,
      resultValue:resultValue,

      GetAPIUrl:GetAPIUrl,
      GetRequestValue:GetRequestValue,
      GetResultValue:GetResultValue,

      RequestAPI:RequestAPI,

      resultCallBack:resultCallBack
    };
}

// var APICheckAppVer = function ApiInfo() {
//     this.apiUrl = "sen/app/ver";
//     this.requestParams = ["app_id", "os", "c_ver", "client_uid", "language", "time_zone"];
//     this.resultParams = ["res", "ver", "summit", "force_update", "update_url", "cs_email", "info", "local_date"];
//     this.requestValue = "";
//     this.resultValue = "";
// };
//
// var APISignupPath = function ApiInfo() {
//     this.apiUrl = "slp.user.account.chk.signup.path";
//     this.requestParams = ["app_id", "os", "client_uid", "email", "language", "time_zone"];
//     this.resultParams = ["res", "signup_path", "secession"];
//     this.requestValue = "";
//     this.resultValue = "";
// };
//
// var APISignup = function ApiInfo() {
//     this.apiUrl = "slp.user.account.create";
//     this.requestParams = ["app_id", "os", "email", "password", "country", "signup_path", "language", "time_zone"];
//     this.resultParams = ["res", "account_id"];
//     this.requestValue = "";
//     this.resultValue = "";
// };
//
// var APILogin = function ApiInfo() {
//     this.apiUrl = "slp.user.account.login";
//     this.requestParams = ["app_id", "os", "client_uid", "email", "password", "signup_path", "language", "time_zone"];
//     this.resultParams = ["res", "account_id", "access_token", "is_allow_app"];
//     this.requestValue = "";
//     this.resultValue = "";
// };
