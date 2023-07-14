import React from "react";
import { ThemeProvider } from "styled-components";
// import Register from "./Register";
import DoList from "./DoList";
import Sub from "./Sub";

function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Register /> */}
                <Sub />
                <DoList />
            </ThemeProvider>
        </>
    );
}

const theme = {
    margin: "0 auto",
};

export default Home;
