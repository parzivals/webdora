

var ProfileManager = (function() {
  var profileArry = sessionStorage.getItem("profiles") || [];

  var currentProfile = new ProfileData();

  var SetProfileArry = function ( _ProfilesJson ) {

      var ary = [];
      for (var i = 0; i < _ProfilesJson.length; i++) {
          var js =  _ProfilesJson[i];

          if ( js.hidden == "0" ) {
            ary.push(js);
          }
        }

        sessionStorage.setItem("profiles", JSON.stringify( ary ) );
        profileArry = JSON.parse( sessionStorage.getItem("profiles"));

        currentProfile = profileArry[0];
  };

var GetCurrentProfile = function () {
  return currentProfile;
};

  var GetProfileById = function ( _ProfileId ) {
    var findChild ;
    for (var child in profileArry){
      if(child.pf_id == _ProfileId ){
        findChild = child;
      }
    }

    return findChild;
  };

  var SaveProfile = function ( _ProfileData ) {
    var child = GetProfileById( _ProfileData.pf_id ) ;
    if (child) {
      child = _ProfileData ;
    }
    else {
      profileArry.push( _ProfileData );
    }

    sessionStorage.setItem("profiles", JSON.stringify(profileArry) );
    profileArry = JSON.parse( sessionStorage.getItem("profiles"));

    currentProfile = GetAccountById( currentProfile.account_id );
  };

return{
  profileArry:profileArry,
  GetCurrentProfile:GetCurrentProfile,

  SetProfileArry:SetProfileArry,
};

})();
