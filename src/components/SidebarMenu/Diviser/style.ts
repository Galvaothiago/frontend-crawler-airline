import styled from "styled-components";
import {colors} from "../../../global";

export const Container = styled.div`
	width: 100%;
	height: auto;
	padding-bottom: 0.15rem;
	padding-left: 0.15rem;
	margin-top: 2rem;
	border-bottom: 1px solid ${colors.grayLightOpacity};

	transition: opacity 0.4s ease-in-out;
	opacity: 0;

	> span {
		color: ${colors.grayLightOpacity};
		font-size: 0.75rem;
	}
`;
