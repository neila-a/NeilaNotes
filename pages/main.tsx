import {
    Box
} from "@mui/material";
import MenuBar from "../components/MenuBar";
import * as React from "react";
const mainPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MenuBar in="main" />
        </Box>
    );
};
export default mainPage;