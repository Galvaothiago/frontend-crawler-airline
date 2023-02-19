import styled from "styled-components";
import {colors} from "../../global";

export const Container = styled.div`
	width: fit-content;
	height: auto;

	display: flex;
	align-items: center;
	gap: 0.75rem;
	color: ${colors.grayLightOpacity};

	svg {
		width: 1.75rem;
		height: 1.75rem;
	}
`;
