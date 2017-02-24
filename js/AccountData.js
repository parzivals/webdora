function AccountData() {
    var isGuest;
    var account_id;
    var client_uid;
    var signup_path;
    var email;
    var password;
    var access_token;

    return {
        isGuest: isGuest,
        account_id: account_id,
        client_uid: client_uid,
        signup_path: signup_path,
        email: email,
        password: password,
        access_token: access_token,

        SetData:     function (_DataJson) {
              // console.log( _DataJson );
                for (var key in _DataJson) {
                    // dicObj[key] = _DataJson[key];
                    switch (key) {
                        case "isGuest":
                            this.isGuest = _DataJson[key];
                            break;
                        case "account_id":
                            this.account_id = _DataJson[key];
                            break;
                        case "client_uid":
                            this.client_uid = _DataJson[key];
                            break;
                        case "signup_path":
                            this.signup_path = _DataJson[key];
                            break;
                        case "email":
                            this.email = _DataJson[key];
                            break;
                        case "password":
                            this.password = _DataJson[key];
                            break;
                        case "access_token":
                            this.access_token = _DataJson[key];
                            break;
                        default:
                        // console.log( key );
                    }
                }
            }
    };
}
