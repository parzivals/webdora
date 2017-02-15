window.onload = Init;

var MainObjs = function() {
    var serverSelector = document.getElementById("serverurl");
    var appSelector = document.getElementById("app_id");
    var osSelector = document.getElementById("os");
    var verSelector = document.getElementById("c_ver");
    var countrySelector = document.getElementById("country");
    var languageSelector = document.getElementById("language");
    var timezoneSelector = document.getElementById("time_zone");
    var apiSelector = document.getElementById("apiurl");

    var paramsArea = document.getElementById('paramsarea');

    var sendAPI = document.getElementById('btn_apisend');

    var logArea = document.getElementById('logarea');

    var apiInfo;

    return {
        serverSelector: serverSelector,
        appSelector: appSelector,
        osSelector: osSelector,
        verSelector: verSelector,
        countrySelector: countrySelector,
        languageSelector: languageSelector,
        timezoneSelector: timezoneSelector,
        apiSelector: apiSelector,

        sendAPI: sendAPI,

        paramsArea: paramsArea,
        logArea: logArea,

        apiInfo:apiInfo
    };
};

function Init() {
    MainObjs = new MainObjs();

    var main = new Main();
}

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

    MainObjs.apiSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.apiSelector, APIManager.GetAPIDIC());

    MainObjs.logArea.innerText = '';

    MainObjs.serverSelector.onchange = RefreshAPIInfo;
    MainObjs.appSelector.onchange = RefreshAPIInfo;
    MainObjs.osSelector.onchange = RefreshAPIInfo;
    MainObjs.verSelector.onchange = RefreshAPIInfo;
    MainObjs.countrySelector.onchange = RefreshAPIInfo;
    MainObjs.languageSelector.onchange = RefreshAPIInfo;
    MainObjs.timezoneSelector.onchange = RefreshAPIInfo;
    MainObjs.apiSelector.onchange = RefreshAPIInfo;

    MainObjs.sendAPI.onclick = RequestAPI;

    RefreshAPIInfo();

    function AddSelectorOptions(parentObj, dicObj) {
        var op;
        var opText;

        if (!Array.isArray(dicObj)) {
            for (var key in dicObj) {
                //  console.log("key : " + key +", value : " + dicObj[key]);
                op = document.createElement("option");
                opText = document.createTextNode(key);
                op.setAttribute("value", key);
                op.appendChild(opText);
                parentObj.appendChild(op);
            }
        } else {
            for (var i = 0; i < dicObj.length; i++) {
                //  console.log("key : " + key +", value : " + dicObj[key]);
                op = document.createElement("option");
                opText = document.createTextNode(dicObj[i]);
                op.setAttribute("value", dicObj[i]);
                op.appendChild(opText);
                parentObj.appendChild(op);
            }
        }
        // console.log(parentObj);
    }
}

function RefreshAPIInfo() {

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

    MainObjs.apiInfo = APIManager.GetAPIDIC()[MainObjs.apiSelector.value];
    var apiInfo = MainObjs.apiInfo ;
    var ary = apiInfo.requestParams;
    var paramsText = "";
    paramsText += "APIURL : " + APIManager.GetServerUrl() + apiInfo.apiUrl + "\r\n";

    for (var i = 0; i < ary.length; i++) {
        var key = ary[i];
        paramsText += key + " : " + AccountManager.GetAPIDIC()[key]() + "\r\n";
        apiInfo.postParams += "&" + key + "=" + AccountManager.GetAPIDIC()[key]() ;
    }

    console.log( apiInfo.postParams );
    MainObjs.paramsArea.innerText = paramsText;

    if (event.stopPropagation) event.stopPropagation(); //MOZILLA
    else event.cancelBubble = true;
}

function RequestAPI(){
  var apiInfo = MainObjs.apiInfo ;
  // var resultCallBack = new ResultCallBack();
  var baeApi = new BaeApi( ( APIManager.GetServerUrl() + apiInfo.apiUrl ), apiInfo.postParams, ResultCallBack );
  baeApi();
}

function ResultCallBack( txt ) {

  var textNode = document.createTextNode( txt + "\r\n" );
  MainObjs.logArea.appendChild(textNode) ;

}
