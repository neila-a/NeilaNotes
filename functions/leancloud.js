import AV from "leancloud-storage";
import error from "./error";
import Router from "next/router";
const { Query, User } = AV;
AV.init({
    appId: "LfguhHqPbp8hn5J4KUNkKQ8u-MdYXbMMI",
    appKey: "nQkWznOWSYvE7N7TKrZ28iiv",
    serverURL: "https://lfguhhqp.api.lncldglobal.com"
});
const regUser = (username, password, then) => {
    var user = new User();
    user.setUsername(username);
    user.setPassword(password);
    user.signUp().then((user) => {
        // 注册成功
        window.registerStatus = [
            true,
            user
        ];
        then();
    }, (errInCall) => {
        window.registerStatus =  error(errInCall, "注册");
    })
};
const loginUser = (username, password, then) => {
    AV.User.logIn(username, password).then((user) => {
        // 登录成功
        window.loginStatus =  [
            true,
            user
        ];
        then();
    }, (errInCall) => {
        window.loginStatus = error(errInCall, "登录");
    })
};
const { logOut } = User;
const bottomNote = AV.Object.extend("Note");
class Note {
    constructor(title, content, user) {
        var noteInClass = new bottomNote();
        noteInClass.set("title", title);
        noteInClass.set("content", content);
        noteInClass.set("author", user);
        noteInClass.save();
    }
}
const findNote = (author) => {
    const query = new Query('Note');
    query.equalTo('author', author);
    query.find().then((notes) => {
        window.foundNotes = notes;
    });
};
export {
    regUser,
    regUser as registerUser,
    loginUser,
    logOut,
    bottomNote,
    Note,
    findNote
};