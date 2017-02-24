var BaeApi = function DoraApi(_Url, _Params, resultCallBack) {

    var httpRequest;
    var url = _Url;
    var params = _Params;
    var ApiCall = function RequestAPI() {

        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        httpRequest.open("POST", url, true);
        // httpRequest.setRequestHeader("Content-Type", "text/html;charset=utf-8");
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        httpRequest.onreadystatechange = callBack;

        httpRequest.send( params);
    };

    var callBack = function callbackFunction() {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var txt = httpRequest.responseText;
                console.log(txt);
                //         //txt를 사용해서 알맞은 작업 수행
                if ( typeof resultCallBack === 'function' ) {
                    resultCallBack(txt);
                }

            } else {

            }
        } else {

        }

    };

    return ApiCall;

};
