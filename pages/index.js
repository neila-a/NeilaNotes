import {
    Container,
    Button,
    Typography,
    ButtonGroup
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import config from "../neilanotes.config";
const indexPage = function () {
    return (
        <>
            <Head>
                <title>{config.title.cn}</title>
            </Head>
            <Container maxWidth="sm" style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%"
            }}>
                <Typography variant="h2">{config.title.cn}</Typography>
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