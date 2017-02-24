
var Server = (function(){
  var dicObj = {
    DEV_Server:"http://apiDEV.doralab.co.kr/",
    LIVE_Server:"https://api.doralab.co.kr/"
  };

  return{
    DIC:dicObj
  };
})();


var AppID = (function() {
  var dicObj ={
    DEA:"1000000001",
    DLAS1:"1000000003",
    DLAS2:"1000000004",
    DLAS3:"1000000005"
  };

    return {
      DIC:dicObj
    };
})();

var AppOS = (function() {
  var dicObj ={
      android:"android",
      ios:"ios"
  };

    return {
      DIC:dicObj
    };
})();

var AppVer = (function() {
  var aryObj = [
    "2.5.1"
  ];

    return {
      ARRY:aryObj
    };
})();

var Locale = (function() {
  var dicObj ={
    KR:"kr",
    EN:"en",
    TW:"tw",
    JP:"jp",
    HK:"hk",
    CN:"cn",
    IN:"in",
    ID:"id",
    VN:"vn",
    MY:"my",
    TH:"th",
    PH:"ph",
    SG:"sg",
  };
    var KR = "kr";
    var EN = "en";
    var TW = "tw";
    var JP = "jp";
    var HK = "hk";
    var CN = "cn";
    var IN = "in";
    var ID = "id";
    var VN = "vn";
    var MY = "my";
    var TH = "th";
    var PH = "ph";
    var SG = "sg";

    return {
      DIC:dicObj,
        KR: KR,
        EN: EN,
        TW: TW,
        JP: JP,
        HK: HK,
        CN: CN,
        IN: IN,
        ID: ID,
        VN: VN,
        MY: MY,
        TH: TH,
        PH: PH,
        SG: SG
    };
})();


var TimeZone = (function () {
  var aryObj = [
    "Asia/Seoul"
  ];

  return{
    ARRY:aryObj
  };
})();

var AccountType = (function() {
    var dicObj ={
      NewGuest:"NewGuest"
    };
    return {
      DIC:dicObj
    };
})();

var SignupPath = (function() {
    var slp = "slp";
    var google = "google";
    var facebook = "facebook";
    return {
        SLP: slp,
        GOOGLE: google,
        FACEBOOK: facebook
    };
})();

var ApiState = (function () {
  var Ready = "Ready";
  var Running = "Running";
  var Finish = "Finish";

  return{
    Ready:Ready,
    Running:Running,
    Finish:Finish
  };
})();

var PlatformAPIURL = (function() {
    var constCHECK_SIGNUP_PATH = "slp.user.account.chk.signup.path";

    var constACCOUNT_CREATE = "slp.user.account.create";
    var constACCOUNT_LOGIN = "slp.user.account.login";
    var constACCOUNT_FORGOT_PASSWORD = "slp.user.account.forgot.password";
    var constACCOUNT_INFO = "slp.user.account.get.info";
    var constPROFILE_ADD = "slp.user.account.profile.add";
    var constACCOUNT_SECESSION = "slp.user.account.secession";
    var constPROFILE_IMGUPLOAD = "slp.user.account.profile.img.upload";
    var constCHECK_POINT = "slp.user.get.my.point";
    var constJOIN_GUEST_MEMBER = "slp.user.account.new.email.pwd";
    var constPURCHASE_HISTORY = "sdla/buy/buyHistory";
    var constPROFILE_DELETE = "slp.user.account.profile.delete";
    var constPROFILE_EDIT = "slp.user.account.profile.edit";
    var constLOGIN_PASSWORD_CHANGE = "slp.user.login.account.password.change";
    var constCOUPON_CREATE = "slp.coupon.create";
    var constCOUPON_LIST = "slp.coupon.list";
    var constCOUPON_USE = "slp.coupon.use";
    var constCOUPON_MYCOUPONREGISTER = "slp.coupon.myCouponRegi";
    var constCOUPON_MYCOUPONLIST = "slp.coupon.myCouponList";
    var constCOUPON_USEHISTORY = "slp.coupon.myCouponUseHistory";

    return {
        constCHECK_SIGNUP_PATH: constCHECK_SIGNUP_PATH,

        constACCOUNT_LOGIN: constACCOUNT_LOGIN,
        constACCOUNT_CREATE: constACCOUNT_CREATE,
        constACCOUNT_FORGOT_PASSWORD: constACCOUNT_FORGOT_PASSWORD,
        constACCOUNT_INFO: constACCOUNT_INFO,
    };
})();

var DLAAPIURL = (function() {
    var constAPP_VERSION_CHECK = "sdla/app/ver";
    var constPRODUCT_LIST = "slp.dlaProductList";
    var constACTION_LOG = "sdla/action/log";
    var constPLAY_HISTORY = "sdla/episode/episodePlayHistory";
    var constROTATION_PLAY_LIST = "sdla/episode/categoryRotationList";
    var constROTATION_REWORD_REQUEST = "sdla/episode/categoryRotationRewardRequest";
    var constROTATION_REWORD_HISTORY = "sdla/episode/categoryRotationRewardHistory";
    var constTOP_RANK_EPISODE_PLAY = "sdla/episode/getTopRankEpisodePlay";
    var constEPISODE_PERM_LIST = "sdla/episode/permlist";
    var constBUY_PRODUCT = "sdla/buy/buyProduct";
    var constQUEST_LIST = "sdla/quest/questRequestList";
    var constQUEST_REQUEST = "sdla/quest/questRequest";

    return {
        constAPP_VERSION_CHECK: constAPP_VERSION_CHECK
    };
})();


var Regex = (function () {
  var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  function IsCheckPassword( pInputPassword ) {
    if(pInputPassword.Length > 20 ){
      return false;
    }
    else if(pInputPassword.Length < 6 ){
      return false;
    }
    else{
      return true;
    }
  }

  return{
    regexEmail:regexEmail,
    IsCheckPassword:IsCheckPassword
  };
})();
