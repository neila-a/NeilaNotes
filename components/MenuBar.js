import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@mui/material";
import {
    AddCircleOutlineSharp,
    ArrowBack
} from "@mui/icons-material";
import Link from "next/link";
import config from "../neilanotes.config";
import Router from "next/router";
const MenuBar = (props) => {
    if (props.in == "main") {
        var IconBtn = () => {
            return (
                <Link href="/new">
                    <IconButton
                        size="large"
                        edge="end"
                        color="error"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        style={{
                            color: "white"
                        }}
                        onClick={() => {
                            if (window.localStorage.getItem("logined") != "true") {
                                window.alert("您还没有登录。");
                                Router.push({
                                    pathname: "/login",
                                    query: {}
                                });
                            }
                        }}
                    >
                        <AddCircleOutlineSharp />
                    </IconButton>
                </Link>
            );
        };
    } else if (props.in == "add") {
        var IconBtn = () => {
            return (
                <IconButton
                    size="large"
                    edge="start"
                    color="error"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        if (window.confirm("确定要取消更改并返回到主页吗？")) {
                            Router.push({
                                pathname: "/main",
                                query: {}
                            });
                        }
                    }}
                    style={{
                        color: "white"
                    }}
                >
                    <ArrowBack />
                </IconButton>
            );
        };
    };
    return (
        <AppBar position="static">
            <Toolbar>{/* Deleted Code
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
                alert("笑死，这根本没用")
            }}
        >
            <Menu />
        </IconButton>*/}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {config.title.en}
                </Typography>{/* Deleted Code
        <Button color="inherit" onClick={() => {
            alert("想不到吧，这玩意也是没用的");
        }}>啊吧啊吧</Button>*/}
                <IconBtn />
            </Toolbar>
        </AppBar>
    );
}
export default MenuBar;