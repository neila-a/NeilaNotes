import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import {
    VisibilityOff,
    Visibility
} from "@mui/icons-material";
import Router from "next/router";
import * as React from "react";
import * as NoteUtil from "../functions/leancloud";
const PassWordEdit = (propsInThisControl: {
    go: string;
}) => {
    const [passWord, setPassWord] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const handlePassWordChange = (event) => {
        setPassWord(event.target.value);
        if (event.target.value == process.env.passWord && typeof window !== "undefined") {
            window.localStorage.setItem("passWord", event.target.value);
            Router.push(propsInThisControl.go);
        }   
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
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
    );
};
export default PassWordEdit;