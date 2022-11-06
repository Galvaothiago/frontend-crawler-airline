import styled from "styled-components";
import {colors} from "../../../global";

export const Container = styled.div`
	width: 12rem;
	height: 16rem;
	padding: 1.5rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	border-radius: 14px;

	background-color: ${colors.background};

	-webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);

	svg {
		font-size: 2rem;
		color: ${colors.blueLight};
	}

	p {
		width: 100%;
		font-size: 0.95rem;
		color: ${colors.grayMedium};
		text-align: center;
	}
`;