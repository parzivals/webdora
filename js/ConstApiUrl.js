const constLIVE_URL = "https://api.doralab.co.kr/";
const constDEV_URL = "http://apiDEV.doralab.co.kr/";
var constAPI_URL = "http://apiDEV.doralab.co.kr/";


var Platform = (function(){
  const constACCOUNT_CREATE = constAPI_URL + "slp.user.account.create";
  const constCHECK_SIGNUP_PATH = constAPI_URL + "slp.user.account.chk.signup.path";
  const constACCOUNT_LOGIN = constAPI_URL + "slp.user.account.login";
  const constACCOUNT_FORGOT_PASSWORD = constAPI_URL + "slp.user.account.forgot.password";
  const constACCOUNT_INFO = constAPI_URL + "slp.user.account.get.info";
  const constPROFILE_ADD = constAPI_URL + "slp.user.account.profile.add";
  const constPROFILE_DELETE = constAPI_URL + "slp.user.account.profile.delete";
  const constPROFILE_EDIT = constAPI_URL + "slp.user.account.profile.edit";
  const constACCOUNT_SECESSION = constAPI_URL + "slp.user.account.secession";
  const constLOGIN_PASSWORD_CHANGE = constAPI_URL + "slp.user.login.account.password.change";
  const constPROFILE_IMGUPLOAD = constAPI_URL + "slp.user.account.profile.img.upload";
  const constCHECK_POINT = constAPI_URL + "slp.user.get.my.point";
  const constJOIN_GUEST_MEMBER = constAPI_URL + "slp.user.account.new.email.pwd";
  const constPURCHASE_HISTORY = constAPI_URL + "sdla/buy/buyHistory";

  const constCOUPON_CREATE = constAPI_URL + "slp.coupon.create";
  const constCOUPON_LIST = constAPI_URL + "slp.coupon.list";
  const constCOUPON_USE = constAPI_URL + "slp.coupon.use";
  const constCOUPON_MYCOUPONREGISTER = constAPI_URL + "slp.coupon.myCouponRegi";
  const constCOUPON_MYCOUPONLIST = constAPI_URL + "slp.coupon.myCouponList";
  const constCOUPON_USEHISTORY = constAPI_URL + "slp.coupon.myCouponUseHistory";

  return{
    constACCOUNT_CREATE : constACCOUNT_CREATE,
    constCHECK_SIGNUP_PATH : constCHECK_SIGNUP_PATH,
    constACCOUNT_LOGIN : constACCOUNT_LOGIN,
    constACCOUNT_FORGOT_PASSWORD : constACCOUNT_FORGOT_PASSWORD,
    constACCOUNT_INFO : constACCOUNT_INFO,
  };
})();

var DLA = (function(){
  const constAPP_VERSION_CHECK = constAPI_URL + "sdla/app/ver";
  const constPRODUCT_LIST = constAPI_URL + "slp.dlaProductList";
  const constACTION_LOG = constAPI_URL + "sdla/action/log";
  const constPLAY_HISTORY = constAPI_URL + "sdla/episode/episodePlayHistory";
  const constROTATION_PLAY_LIST = constAPI_URL + "sdla/episode/categoryRotationList";
  const constROTATION_REWORD_REQUEST = constAPI_URL + "sdla/episode/categoryRotationRewardRequest";
  const constROTATION_REWORD_HISTORY = constAPI_URL + "sdla/episode/categoryRotationRewardHistory";
  const constTOP_RANK_EPISODE_PLAY = constAPI_URL + "sdla/episode/getTopRankEpisodePlay";
  const constEPISODE_PERM_LIST = constAPI_URL + "sdla/episode/permlist";
  const constBUY_PRODUCT = constAPI_URL + "sdla/buy/buyProduct";
  const constQUEST_LIST = constAPI_URL + "sdla/quest/questRequestList";
  const constQUEST_REQUEST = API_URL + "sdla/quest/questRequest";

  return{
    abc: abc
  };
})();
