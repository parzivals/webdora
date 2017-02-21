window.onload = Init;

// dom 노드 가져와서 변수에 저장.
var MainObjs = function() {
    var serverSelector = document.getElementById("serverurl");
    var appSelector = document.getElementById("app_id");
    var osSelector = document.getElementById("os");
    var verSelector = document.getElementById("c_ver");
    var countrySelector = document.getElementById("country");
    var languageSelector = document.getElementById("language");
    var timezoneSelector = document.getElementById("time_zone");

    var loginTypeSelector = document.getElementById("login_type");

    var loginInput = document.getElementById("login_input");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    return {
        serverSelector: serverSelector,
        appSelector: appSelector,
        osSelector: osSelector,
        verSelector: verSelector,
        countrySelector: countrySelector,
        languageSelector: languageSelector,
        timezoneSelector: timezoneSelector,
        loginTypeSelector:loginTypeSelector,

        loginInput:loginInput,
        emailInput:emailInput,
        passwordInput:passwordInput,

    };
};

// 페이지 로드후 실행.
function Init() {
  // AccountManager.ClearData();

    MainObjs = new MainObjs();
    LoginObjs = new LoginObjs();
    SignupObjs = new SignupObjs();

    var main = new Main();
}

// dom 노드 재구성 및 이벤트 연결.
function Main() {
    MainObjs.serverSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.serverSelector, Server.DIC);

    MainObjs.appSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.appSelector, AppID.DIC);

    MainObjs.osSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.osSelector, AppOS.DIC);

    MainObjs.verSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.verSelector, AppVer.ARRY);

    MainObjs.countrySelector.innerHTML = '';
    AddSelectorOptions(MainObjs.countrySelector, Locale.DIC);

    MainObjs.languageSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.languageSelector, Locale.DIC);

    MainObjs.timezoneSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.timezoneSelector, TimeZone.ARRY);

    MainObjs.loginTypeSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.loginTypeSelector, LoginType.DIC);

    // 이벤트 연결.
    MainObjs.serverSelector.onchange = RefreshAPIInfo;
    MainObjs.appSelector.onchange = RefreshAPIInfo;
    MainObjs.osSelector.onchange = RefreshAPIInfo;
    MainObjs.verSelector.onchange = RefreshAPIInfo;
    MainObjs.countrySelector.onchange = RefreshAPIInfo;
    MainObjs.languageSelector.onchange = RefreshAPIInfo;
    MainObjs.timezoneSelector.onchange = RefreshAPIInfo;
    MainObjs.loginTypeSelector.onchange = RefreshAPIInfo;

    MainObjs.emailInput.onchange = RefreshAPIInfo;
    MainObjs.passwordInput.onchange = RefreshAPIInfo;

    LoginObjs.loginBtn.onclick = RequestAPI;

    // dom 노드 리프레시
    RefreshAPIInfo();

    // select 구성.
    function AddSelectorOptions(parentObj, dicObj) {
        var op;
        var opText;

        if (!Array.isArray(dicObj)) {
            for (var key in dicObj) {
                op = document.createElement("option");
                opText = document.createTextNode(key);
                op.setAttribute("value", key);
                op.appendChild(opText);
                parentObj.appendChild(op);
            }
        } else {
            for (var i = 0; i < dicObj.length; i++) {
                op = document.createElement("option");
                opText = document.createTextNode(dicObj[i]);
                op.setAttribute("value", dicObj[i]);
                op.appendChild(opText);
                parentObj.appendChild(op);
            }
        }
    }
}

// dom 노드 리프레시
function RefreshAPIInfo() {

      if (event.stopPropagation) event.stopPropagation(); //MOZILLA
      else event.cancelBubble = true;

    // 현재 api 상태 저장.
    var serverValue = MainObjs.serverSelector.value;
    APIManager.SetServerURL(Server.DIC[serverValue]);

    var appValue = MainObjs.appSelector.value;
    AccountManager.SetAppID(AppID.DIC[appValue]);

    var osValue = MainObjs.osSelector.value;
    AccountManager.SetOS(AppOS.DIC[osValue]);

    var verValue = MainObjs.verSelector.value;
    AccountManager.SetVer(verValue);

    var countryValue = MainObjs.countrySelector.value;
    AccountManager.SetCountry(Locale.DIC[countryValue]);

    var langValue = MainObjs.languageSelector.value;
    AccountManager.SetLanguage(Locale.DIC[langValue]);

    var timeZoneValue = MainObjs.timezoneSelector.value;
    AccountManager.SetTimeZone(timeZoneValue);

    var loginTypeValue = MainObjs.loginTypeSelector.value;
    AccountManager.SetLoginType(loginTypeValue);

    if ( loginTypeValue === LoginType.DIC.Guest) {
      $(MainObjs.loginInput).hide();
    }
    else {
      // AccountManager.SetEMail(eMailIdValue);
      $(MainObjs.loginInput).show();
      MainObjs.emailInput.value = AccountManager.GetEMail();
      MainObjs.passwordInput.value = AccountManager.GetPassWord();
    }

    // url, 파라미터 출력.
    // MainObjs.apiInfo = APIManager.GetAPIDIC()[MainObjs.apiSelector.value];
    // var apiInfo = MainObjs.apiInfo ;
    // var ary = apiInfo.requestParamsAry;
    // var paramsText = "";
    // paramsText += "APIURL : " + APIManager.GetServerUrl() + apiInfo.apiUrl + "\r\n";
    //
    // for (var i = 0; i < ary.length; i++) {
    //     var key = ary[i];
    //     paramsText += key + " : " + AccountManager.GetAPIDIC()[key]() + "\r\n";
    // }
    //
    // MainObjs.paramsArea.innerText = paramsText;

}

// API 호출.
function RequestAPI(){
  // MainObjs.apiInfo.RequestAPI( ResultCallBack );
  
  var flow = new FlowAPICallController();
  // FlowAPICallController();
}
