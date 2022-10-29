import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Container,
    Typography
} from "@mui/material";
import {
    VisibilityOff,
    Visibility
} from "@mui/icons-material";
import * as React from "react";
import Router from "next/router";
const loginPage = () => {
    const [values, setValues] = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (event.target.value == "hh0123") {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("logined", "true");
                Router.push({
                    pathname: '/main',
                    query: {}
                });
                alert("正在跳转中……");
            }
        }
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Container maxWidth="sm" style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%"
            }}>
                <Typography variant="h1">登录</Typography>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">密码</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="在此输入密码"
                    />
                </FormControl>
            </Container>
        </>
    );
};
export default loginPage;