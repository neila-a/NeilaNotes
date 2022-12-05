import {
    Container,
    Button,
    Typography,
    ButtonGroup
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import * as React from "react";
const indexPage = function () {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_titleCn}</title>
            </Head>
            <Container maxWidth="sm" style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%"
            }}>
                <Typography variant="h2">{process.env.NEXT_PUBLIC_titleCn}</Typography>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Link href="/login">
                        <Button variant="contained" size="large">登录</Button>
                    </Link>{/* Deleted Code
                    <Button size="large" variant="outlined" onClick={() => {
                        alert('根本没有注册——太懒了懒得写，所以只有neila这一个账号。');
                    }}>注册</Button>*/}
                </ButtonGroup>
            </Container>
        </>
    );
};
export default indexPage;