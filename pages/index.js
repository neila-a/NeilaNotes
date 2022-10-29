import {
    Container,
    Button,
    Typography,
    ButtonGroup
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import Head from "next/head";
const indexPage = function () {
    return (
        <>
            <Head>
                <title>{"neila的笔记系统"}</title>
            </Head>
            <Container maxWidth="sm" style={{
                alignItems:"center",
                justifyContent:"center",
                textAlign: "center",
                height: "100%"
            }}>
                    <Typography variant="h2">neila的笔记系统</Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Link href="/login">
                            <Button variant="contained" size="large">登录</Button>
                        </Link>
                        <Button size="large" variant="outlined" onClick={() => {
                            alert('根本没有注册——太懒了懒得写，所以只有neila这一个账号。');
                        }}>注册</Button>
                    </ButtonGroup>
            </Container>
        </>
    );
};
export default indexPage;