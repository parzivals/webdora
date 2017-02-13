
window.onload = init;

function init(){
  var btn1 = document.getElementById('btn_apisend');
  btn1.onclick = button1_click;
}



function button1_click() {
  // ApiCall();


// var p = new ConstDoraURL() ;

// var plat = new Platform();
// plat.constACCOUNT_SECESSION;

// alert( ConstDoraURL.Account );

alert( ConstDoraURL.abc );
ConstDoraURL.abc = abc ;
alert( ConstDoraURL.abc );
// ConstDoraURL.GetAccount() = abc ;
// alert( ConstDoraURL.GetAccount() );
  // localStorage.setItem( 'btn1', '버튼1');
	// // alert("버튼1을 저장했습니다.");
  //   var noti = document.getElementById('text1');
  //   noti.innerHTML = "버튼1을 저장했습니다." ;
}


function button2_click() {
  var strBtn = localStorage.getItem( 'btn1' );
	// alert( strBtn + "을 가져왔습니다.");

    var noti = document.getElementById('text1');
    noti.innerHTML = strBtn + "을 가져왔습니다." ;
}

function button3_click() {
    var url = "http://apiDEV.doralab.co.kr/slp.auth.app";
    var params = "&app_id=1000000003&os=android&client_uid=165bae977e1d63d89865d55b253fee6e70d62032";
    // var dora = new DoraApi(url, params);
    // dora();
    // var bea = new BaeApi( url, params );
    // bea();

    BaeApi(url, params)();
}
