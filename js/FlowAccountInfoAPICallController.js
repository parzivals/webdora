function FlowAccountInfoAPICallController() {
    var loginAccount = AccountManager.GetLoginAccount();

    var apiStartTime ;
    var apiEndTime ;

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
          apiStartTime = new Date();

          apiAccountInfo.RequestAPI(ResultAccountInfo);
    })();

    // accountInfo api 결과
    function ResultAccountInfo(txt) {
        apiEndTime = new Date();
        var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiAccountInfo.resultValue = txt;
        accountInfo_Log.innerText = TimeGap + "ms\r\n"+ txt ;

        if (JSON) {
          var jsonObj = JSON.parse( txt );
          if (jsonObj.res == '0') {
            $accountInfo_Proc.css("background-color","#2196f3");

            ProfileManager.SetProfileArry( jsonObj.pf_list );

            console.log( ProfileManager.GetCurrentProfile() );

            apiMyPoint.RequestAPI(ResultMyPoint);
            return;
          }
        }
        // error
      $accountInfo_Proc.css("background-color","#f44336");
    }

    // my point api 결과
    function ResultMyPoint(txt) {
        apiEndTime = new Date();
        var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiMyPoint.resultValue = txt;

        myPoint_Log.innerText = TimeGap + "ms\r\n"+ txt ;

        if (JSON) {
          var jsonObj = JSON.parse( txt );
          if (jsonObj.res == '0') {
            $myPoint_Proc.css("background-color","#2196f3");

            apiBuyHistory.RequestAPI(ResultBuyHistory);
            return;
          }
        }
        // error
      $myPoint_Proc.css("background-color","#f44336");
    }

    // buy history api 결과
    function ResultBuyHistory(txt) {
        apiEndTime = new Date();
        var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        apiBuyHistory.resultValue = txt;

        buyHistory_Log.innerText = TimeGap + "ms\r\n"+ txt ;

        if (JSON) {
          var jsonObj = JSON.parse( txt );
          if (jsonObj.res == '0') {
            $buyHistory_Proc.css("background-color","#2196f3");
            return;
          }
        }
        // error
      $buyHistory_Proc.css("background-color","#f44336");
    }
}
