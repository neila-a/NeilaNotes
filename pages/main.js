import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from "@mui/material";
import {
    Menu
} from "@mui/icons-material";
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
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        alert("想不到吧，这玩意也是没用的");
                    }}></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default mainPage;