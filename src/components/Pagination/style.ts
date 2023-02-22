import styled from "styled-components";
import {colors} from "../../global-style";

interface IButtonColor {
	showColor?: boolean;
}

export const Container = styled.div`
	width: fit-content;
	height: auto;

	display: flex;
	align-items: center;
	gap: 1rem;
	color: ${colors.background};

	span {
		width: 3rem;
		height: 3rem;

		display: grid;
		place-items: center;

		color: ${colors.textColor};
	}
`;

export const Button = styled.button<IButtonColor>`
	width: 3rem;
	height: 3rem;

	display: grid;
	place-items: center;

	background-color: inherit;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	-webkit-box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);
	box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);

	svg {
		width: 1.5rem;
		height: 1.5rem;

		color: ${props => (!props.showColor ? colors.blueLight : colors.blueLightOpacity)};
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	&:active {
		transform: scale(1.1);
	}
`;
