
window.onload = init;


function init(){
  var btn1 = document.getElementById('btn_apisend');
  btn1.onclick = button1_click;
}



var BaeApi = function DoraApi(url, params) {
    var httpRequest;
    this.url = url;
    this.params = params;
    var ApiCall = function RequestAPI() {
        // var url = "http://apiDEV.doralab.co.kr/slp.auth.app";
        // var params = "&app_id=1000000003&os=android&client_uid=165bae977e1d63d89865d55b253fee6e70d62032";

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
        httpRequest.onreadystatechange = callBack;
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //-----------------------------------------------------
        httpRequest.send(params);
    };

    var callBack = function callbackFunction() {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var txt = httpRequest.responseText;
                console.log(txt);
                //         //txt를 사용해서 알맞은 작업 수행
            } else {

            }
        } else {

        }

    };

return ApiCall;

};
