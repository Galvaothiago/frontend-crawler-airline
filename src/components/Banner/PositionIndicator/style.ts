import styled from "styled-components";
import {colors} from "../../../global-style";

export const Container = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.6rem;

	span {
		background-color: ${colors.grayMedium};
		width: 5px;
		height: 5px;
		border-radius: 50%;
		font-size: 1.5rem;
		color: #fff;
	}
`;
