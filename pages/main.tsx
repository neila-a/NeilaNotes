import {
    Box
} from "@mui/material";
import MenuBar from "../components/MenuBar";
import * as React from "react";
import Check from "../components/check"
const mainPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MenuBar in="main" />
            </Box>
            <Check>aaabbbccc</Check>
        </>
    );
};
export default mainPage;