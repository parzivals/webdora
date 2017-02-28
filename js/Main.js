$(document).ready(function() {
    $("#login_tab").load("login.html #login_page", function() {
        LoginObjs = new LoginObjs();
        LoginObjs.startBtn.onclick = function() {
            var flowLogin = new FlowLoginAPICallController();
        };
    });

    $("#signup_tab").load("signup.html #signup_page", function() {
        SignupObjs = new SignupObjs();
        SignupObjs.signup_btn.onclick = function() {
            var flowSignup = new FlowSignupAPICallController();
        };
    });

    $("#accountinfo_tab").load("accountinfo.html #accountinfo_page", function() {
        AccountInfoObjs = new AccountInfoObjs();
        AccountInfoObjs.accountInfoBtn.onclick = function() {
            var flowAccountInfo = new FlowAccountInfoAPICallController();
        };
    });

    $("#ui_profile").load("profile.html", function() {
        ProfileObjs = new ProfileObjs();
        // ProfileObjs.accountInfoBtn.onclick = function() {
        //     var flowAccountInfo = new FlowAccountInfoAPICallController();
        // };
        // var cards = $("#ui_profile #first > .card-content");
        //   console.log( cards.html() );
    });

    // select 태그 초기화.
    $('select').material_select();
});

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

    var loginAccountIDSelector = document.getElementById("login_AccountID");

    var loginInput = document.getElementById("login_input");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var resetBtn = document.getElementById("reset_Btn");

    return {
        serverSelector: serverSelector,
        appSelector: appSelector,
        osSelector: osSelector,
        verSelector: verSelector,
        countrySelector: countrySelector,
        languageSelector: languageSelector,
        timezoneSelector: timezoneSelector,

        loginAccountIDSelector: loginAccountIDSelector,

        loginInput: loginInput,
        emailInput: emailInput,
        passwordInput: passwordInput,

        resetBtn: resetBtn
    };
};

// 페이지 로드후 실행.
function Init() {
    // AccountManager.ClearData();

    MainObjs = new MainObjs();
    // LoginObjs = new LoginObjs();
    // SignupObjs = new SignupObjs();
    // AccountInfoObjs = new AccountInfoObjs();

    var main = new Main();
    SetEvent();
}

function SetEvent() {
    // 이벤트 연결.
    MainObjs.serverSelector.onchange = RefreshAPIInfo;
    MainObjs.appSelector.onchange = RefreshAPIInfo;
    MainObjs.osSelector.onchange = RefreshAPIInfo;
    MainObjs.verSelector.onchange = RefreshAPIInfo;
    MainObjs.countrySelector.onchange = RefreshAPIInfo;
    MainObjs.languageSelector.onchange = RefreshAPIInfo;
    MainObjs.timezoneSelector.onchange = RefreshAPIInfo;
    MainObjs.loginAccountIDSelector.onchange = RefreshAPIInfo;

    MainObjs.emailInput.onchange = RefreshAPIInfo;
    MainObjs.passwordInput.onchange = RefreshAPIInfo;

    MainObjs.resetBtn.onclick = function() {
        AccountManager.ClearData();
        Main();
    };
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

    MainObjs.loginAccountIDSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.loginAccountIDSelector, AccountType.DIC);

    var ary = AccountManager.GetAccounts();
    if (ary && Array.isArray(ary)) {
        for (var i = 0; i < ary.length; i++) {
            var op = document.createElement("option");
            var opText = document.createTextNode(ary[i].account_id);
            op.setAttribute("value", ary[i].account_id);
            op.appendChild(opText);
            MainObjs.loginAccountIDSelector.appendChild(op);
        }
    }

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

    var loginAccountIDValue = MainObjs.loginAccountIDSelector.value;
    AccountManager.SetLoginAccount(loginAccountIDValue);

    if (loginAccountIDValue === AccountType.DIC.NewGuest) {
        $(MainObjs.loginInput).hide();
    } else {
        $(MainObjs.loginInput).show();
        MainObjs.emailInput.value = AccountManager.GetEMail();
        MainObjs.passwordInput.value = AccountManager.GetPassWord();
    }

    $('.collapsible').collapsible(); // collapsible 초기화
    $('select').material_select();
}

function RefreshUIAccountData() {

    MainObjs.loginAccountIDSelector.innerHTML = '';
    AddSelectorOptions(MainObjs.loginAccountIDSelector, AccountType.DIC);

    var ary = AccountManager.GetAccounts();
    for (var i = 0; i < ary.length; i++) {
        var op = document.createElement("option");
        var opText = document.createTextNode(ary[i].account_id);
        op.setAttribute("value", ary[i].account_id);
        op.appendChild(opText);
        MainObjs.loginAccountIDSelector.appendChild(op);
    }

    MainObjs.loginAccountIDSelector.value = AccountManager.GetLoginAccount().account_id;
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
