
var AccountInfoObjs = function() {
  var accountInfoBtn = document.getElementById("accountinfo_btn");

  var accountinfo_proc = document.getElementById("accountinfo_proc");
  var accountinfo_log = document.getElementById("accountinfo_log");

	var mypoint_proc = document.getElementById("mypoint_proc");
	var mypoint_log = document.getElementById("mypoint_log");

	var buyHistory_Proc = document.getElementById("buyHistory_Proc");
	var buyHistory_Log = document.getElementById("buyHistory_Log");

  return {
    accountInfoBtn:accountInfoBtn,

    accountinfo_proc: accountinfo_proc,
    accountinfo_log:accountinfo_log,

		mypoint_proc:mypoint_proc,
		mypoint_log:mypoint_log,

		buyHistory_Proc:buyHistory_Proc,
		buyHistory_Log:buyHistory_Log,
  };
};
