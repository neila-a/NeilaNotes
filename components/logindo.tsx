import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    ButtonGroup,
    Button
} from "@mui/material";
import {
    VisibilityOff,
    Visibility,
    Login
} from "@mui/icons-material";
import Router from "next/router";
import * as React from "react";
import * as LoginUtil from "../functions/leancloud";
const PassWordEdit = (propsInThisControl) => {
    const [passWord, setPassWord] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
        /*if (event.target.value == "hh0123") {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("logined", "true");
                
            }
        }*/
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const login = () => {
        LoginUtil.loginUser(userName, passWord, () => {
            Router.push({
                pathname: propsInThisControl.go,
                query: {}
            });
        });
    }
    const reg = () => {
        LoginUtil.regUser(userName, passWord, login);
    };
    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">密码</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={passWord}
                    onChange={handlePassWordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="在此输入密码"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">用户名</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                    label="在此输入用户名"
                />
            </FormControl>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={reg}>注册并登录</Button>
                <Button onClick={login}>登录</Button>
            </ButtonGroup>
        </>
    );
};
export default PassWordEdit;