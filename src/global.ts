import styled, {createGlobalStyle} from "styled-components";

export const colors = {
	backgroundMain: "#393d3f",
	background: "#1d1b1b",
	textColor: "#EEEEEE",
	grayLight: "#e6e6e9",
	grayMedium: "#66666e",
	grayDark: "#3d3b3c",
	grayDark2: "#252627",
	blueLight: "#4b88a2",
	blueMedium: "#012a4a",
	blueLightOpacity: "rgba(75, 136, 162, 0.4)",
	redMedium: "#9a031e",
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', 'Inter', sans-serif;
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
        background: ${colors.backgroundMain};
    }
`;

export const ContainerGlobal = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;

	padding: 2.5rem;
	background-color: ${colors.backgroundMain};

	@media (max-height: 768px) {
		padding: 1rem;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1420px;
`;
