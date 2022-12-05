import {
    Container,
    Typography
} from "@mui/material";
import Login from "../components/logindo";
import * as React from "react";
import Head from "next/head";
const LoginPage = () => {
    return (
        <Container maxWidth="sm" style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%"
        }}>
            <Head>
                <title>登录</title>
            </Head>
            <Typography variant="h1">登录</Typography>
            <Login go="/main" />
        </Container>
    );
};
export default LoginPage;