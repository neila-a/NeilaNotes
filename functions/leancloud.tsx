import AV from "leancloud-storage";
type status = boolean;
export function loginUser(userName: string, passWord: string): AV.User | status {
    var _return: AV.User | status;
    AV.User.logIn(userName, passWord).then((user) => {
        _return = user;
    }).catch((reason) => {
        console.error(`Bad: ${reason}`);
        _return = false;
    });
    return _return;
};
export function regUser(userName: string, passWord: string): AV.User | status {
    var user = new AV.User();
    user.setUsername(userName);
    user.setPassword(passWord);
    var _return: AV.User | status;
    user.signUp().then((okUser) => {
        _return = okUser;
    }).catch((reason) => {
        console.error(`Bad: ${reason}`);
        _return = false;
    });
    return _return;
};