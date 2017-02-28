function FlowAccountInfoAPICallController() {
    var loginAccount = AccountManager.GetLoginAccount();

    // api list
    var apiAccountInfo = APIManager.AccountInfo;
    var apiMyPoint = APIManager.MyPoint;
    var apiBuyHistory = APIManager.buyHistory ;

    // ui objs
    var $accountInfo_Proc = $(AccountInfoObjs.accountinfo_proc);
    var accountInfo_Log = AccountInfoObjs.accountinfo_log ;

    var $myPoint_Proc = $(AccountInfoObjs.mypoint_proc);
    var myPoint_Log = AccountInfoObjs.mypoint_log ;

    var $buyHistory_Proc = $(AccountInfoObjs.buyHistory_Proc);
    var buyHistory_Log = AccountInfoObjs.buyHistory_Log ;

    // ui 초기화
    $accountInfo_Proc.css("background-color","");
    accountInfo_Log.innerText = "";

    $myPoint_Proc.css("background-color","");
    myPoint_Log.text = "";

    $buyHistory_Proc.css("background-color","");
    buyHistory_Log.text = "";

    (function StartFlowApi() {
          $accountInfo_Proc.css("background-color","#a5d6a7");
          apiAccountInfo.RequestAPI(ResultAccountInfo);
    })();

    // accountInfo api 결과
    function ResultAccountInfo() {
        if (JSON) {
          var jsonObj = apiAccountInfo.resultValue;
          accountInfo_Log.innerHTML = apiAccountInfo.resultHtml ;

          if ( apiAccountInfo.resultValue.res == '0') {
            $accountInfo_Proc.css("background-color","#2196f3");
            ProfileManager.SetProfileArry( jsonObj.pf_list );
            // refresh profile

            $myPoint_Proc.css("background-color","#a5d6a7");
            apiMyPoint.RequestAPI(ResultMyPoint);
            return;
          }
        }
        else {
          accountInfo_Log.innerText = apiAccountInfo.resultHtml ;
        }
        // error
      $accountInfo_Proc.css("background-color","#f44336");
      RefreshUIAccountData();
    }

    // my point api 결과
    function ResultMyPoint() {
        if (JSON) {
          var jsonObj = apiMyPoint.resultValue;
          myPoint_Log.innerHTML = apiMyPoint.resultHtml;

          if (jsonObj.res == '0') {
            // save point
            $myPoint_Proc.css("background-color","#2196f3");

            $buyHistory_Proc.css("background-color","#a5d6a7");
            apiBuyHistory.RequestAPI(ResultBuyHistory);
            return;
          }
        }
        else {
          myPoint_Log.innerText = apiMyPoint.resultHtml;
        }
        // error
      $myPoint_Proc.css("background-color","#f44336");
      RefreshUIAccountData();
    }

    // buy history api 결과
    function ResultBuyHistory(txt) {
        if (JSON) {
          var jsonObj = apiBuyHistory.resultValue;
          buyHistory_Log.innerHTML = apiBuyHistory.resultHtml;

          if (jsonObj.res == '0') {
            // save buy history

            $buyHistory_Proc.css("background-color","#2196f3");
            RefreshUIAccountData();
            return;
          }
        }
        else {
          buyHistory_Log.innerText = apiBuyHistory.resultHtml;
        }
        // error
      $buyHistory_Proc.css("background-color","#f44336");
      RefreshUIAccountData();
    }
}
