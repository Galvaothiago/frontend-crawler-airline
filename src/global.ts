import styled, {createGlobalStyle} from "styled-components";

export const colors = {
	background: "#26282A",
	textColor: "#EEEEEE",
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: colors.background;
        color: colors.textColor;
    }
`;
