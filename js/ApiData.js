function ApiData() {
    var apiUrl = "";
    var requestParamsAry = [];
    var resultParamsAry = [];
    var requestValue = "";
    var resultValue = "";
    var resultHtml = "";

    var state = ApiState.Ready;

    var apiStartTime;
    var apiEndTime;

    var ResultCallBack;

    function GetAPIUrl() {
        return APIManager.GetServerUrl() + this.apiUrl;
    }

    function GetRequestValue() {
        this.requestValue = "";

        for (var i = 0; i < this.requestParamsAry.length; i++) {
            var key = this.requestParamsAry[i];
            var value = AccountManager.GetAPIDIC()[key]();
            this.requestValue += "&" + key + "=" + value;
        }

        return this.requestValue;
    }

    function GetResultValue() {
        return this.resultValue;
    }

    // API 결과 콜백
    function APIResultCallBack(txt) {
        apiEndTime = new Date();

        this.resultHtml = "<div class='row'>";
        this.resultHtml += "<div class='col s3'>API URL</div><div class='col s9'>" + this.GetAPIUrl() + "</div>";
        var TimeGap = apiEndTime.getMilliseconds() - apiStartTime.getMilliseconds();
        // this.resultHtml += "<div class='row'>";
        this.resultHtml += "<div class='col s3'>응답시간</div><div class='col s9'>" + TimeGap + "ms</div></div></div>";

        // send params
        this.resultHtml += "Send Parameter<br/><table><thead><tr><th class='col s3' data-field='key'>Params</th><th class='col s9' data-field='value'>Value</th></tr></thead><tbody>";
        for (var i = 0; i < this.requestParamsAry.length; i++) {
            var param = this.requestParamsAry[i];
            var value = AccountManager.GetAPIDIC()[param]();
            this.resultHtml += "<tr><td style='word-wrap:break-word' class='col s3'>" + param + "</td><td style='word-wrap:break-word' class='col s8'>" + value + "</td></tr>";
        }
        this.resultHtml += "</tbody></table><br/>";

        // result
        if (JSON) {
            var jsonObj = JSON.parse(txt);
            this.resultValue = jsonObj;

            this.resultHtml += "결과 값<br/>";

            this.resultHtml += "<div class='row' style='margin:0px'>";
            this.resultHtml += "<div class='col s3 left-align'><b>Key</b></div>";
            this.resultHtml += "<div class='col s9'><b>Value</b></div>";
            this.resultHtml += "</div>";
            this.resultHtml += "<div class='divider' style='border-with:0px 0px 0px 1px'></div>";

            this.resultHtml += "<div class='row' style='margin:1px'>";
            for (var key in jsonObj) {
                  this.resultHtml += traverse( key, jsonObj[key]);
            }

            this.resultHtml += "</div>";
        } else {
            this.resultValue = txt;
            this.resultHtml += txt;
        }

        if (typeof ResultCallBack === 'function') {
            ResultCallBack();
        }
    }

    function traverse( key, value ) {
      var addHtml = "";
      addHtml += "<div class='col s3'>" + key + "</div>";
      addHtml += "<div class='col s9'>" ;
            if ( (typeof value ) == "object" ) {
                // var _value = value[key] ;
                for (  i = 0; i < Object.keys(value).length; i++) {
                  addHtml += "<div class='divider' style='border:1px dashed'></div>";
                  for (var childkey in value[i]) {
                      addHtml += traverse( childkey, value[i][childkey] );
                  }
                }
            }
            else {
              if ( !value ) {
                value = "&nbsp";
              }
              addHtml += value ;
            }
            addHtml += "</div>";
      return addHtml;
    }


    // <div class="row">
    //     <div class="col s1">1</div>
    //     <div class="col s1">2</div>
    // </div>
    // <div class="divider"></div>
    // <div class="row">
    //     <div class="col s1">3</div>
    //     <div class="col s1">
    //
    //         <div class="row">
    //             <div class="col s1">5</div>
    //             <div class="col s1">6</div>
    //         </div>
    //
    //         <div class="row">
    //             <div class="col s1">7</div>
    //             <div class="col s1">8</div>
    //         </div>
    //
    //     </div>
    // </div>
    // <div class="row">
    //     <div class="col s1">9</div>
    //     <div class="col s1">10</div>
    // </div>


    // API 호출.
    function RequestAPI(fCallBack) {
        ResultCallBack = fCallBack;
        apiStartTime = new Date();
        var baeApi = new BaeApi(this);
        baeApi();
    }

    return {
        apiUrl: apiUrl,
        requestParamsAry: requestParamsAry,
        resultParamsAry: resultParamsAry,
        requestValue: requestValue,
        resultValue: resultValue,
        resultHtml: resultHtml,

        ApiState: state,

        GetAPIUrl: GetAPIUrl,
        GetRequestValue: GetRequestValue,
        GetResultValue: GetResultValue,

        RequestAPI: RequestAPI,

        APIResultCallBack: APIResultCallBack

    };
}
