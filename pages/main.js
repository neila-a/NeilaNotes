import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from "@mui/material";
import {
    Menu,
    AddCircleOutlineSharp
} from "@mui/icons-material";
import Link from "next/link";
const mainPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NeilaNotes
                    </Typography>{/* Deleted Code
                    <Button color="inherit" onClick={() => {
                        alert("想不到吧，这玩意也是没用的");
                    }}>啊吧啊吧</Button>*/}
                    <Link href="/new">
                        <IconButton
                            size="large"
                            edge="end"
                            color="secondary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <AddCircleOutlineSharp />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default mainPage;