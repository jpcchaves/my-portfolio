import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        height: 100%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100%;
        font-family: ${theme.fonts.family.default};
        background-color: ${theme.colors.bgColor};
    }

`;
