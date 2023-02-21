import styled from "styled-components";
import {colors} from "../../global-style";

export const Container = styled.div`
	width: 100%;
	/* max-height: 100vh; */
	height: 100%;
	display: flex;
	background-color: ${colors.background};

	-webkit-box-shadow: -1px 0px 22px -1px rgba(0, 0, 0, 0.77);
	-moz-box-shadow: -1px 0px 22px -1px rgba(0, 0, 0, 0.77);
	box-shadow: -1px 0px 22px -1px rgba(0, 0, 0, 0.77);
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;
	/* overflow-y: auto; */
	flex: 1;
`;
