import {
    useEffect,
    useState
} from "react";
import * as React from "react";
import { Alert, AlertTitle } from "@mui/material";
export default function Check(props): JSX.Element {
    var check: boolean;
    var [passWord, setPassWord] = useState<string>();
    useEffect(() => setPassWord(window.localStorage.getItem("passWord")), [setPassWord]);
    switch (passWord) {
        case process.env.NEXT_PUBLIC_passWord:
            check = true;
            break;
        default:
            check = false;
            break;
    };
    return (
        <>
            {check ? props.children :
                <Alert severity="error">
                    <AlertTitle>账户错误</AlertTitle>
                    您似乎以<strong>不正确</strong>的方法进入了本页，请返回登录页！
                </Alert>
            }
        </>
    );
};