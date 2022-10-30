import {
    Container,
    Typography
} from "@mui/material";
import PassWordEdit from "../components/PassWordEdit";
import * as React from "react";
import Head from "next/head";
const loginPage = () => {
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
            <PassWordEdit go="/main" />
        </Container>
    );
};
export default loginPage;