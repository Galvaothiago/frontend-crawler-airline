import styled, {keyframes} from "styled-components";
import {colors} from "../../global";

interface IInputProp {
	errorInputEffect: boolean;
}

const spinEffect = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}

`;

const shakeEffect = keyframes`
	0% {
		transform: translate(1px, 1px) rotate(0deg);
	}
	10% {
		transform: translate(-1px, -2px) rotate(-1deg);
	}
	20% {
		transform: translate(-3px, 0px) rotate(1deg);
	}
	30% {
		transform: translate(3px, 2px) rotate(0deg);
	}
	40% {
		transform: translate(1px, -1px) rotate(1deg);
	}
	50% {
		transform: translate(-1px, 2px) rotate(-1deg);
	}
	60% {
		transform: translate(-3px, 1px) rotate(0deg);
	}
	70% {
		transform: translate(3px, 1px) rotate(-1deg);
	}
	80% {
		transform: translate(-1px, -1px) rotate(1deg);
	}
	90% {
		transform: translate(1px, 2px) rotate(0deg);
	}
	100% {
		transform: translate(1px, -2px) rotate(-1deg);
	}
`;

export const Container = styled.div`
	height: 100%;
	flex: 0.65;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	width: 100%;
	height: 15%;
	padding: 2.5rem 3rem;

	color: ${colors.grayLight};

	h1 {
		font-size: 2.7rem;
		font-weight: normal;
	}
`;

export const FormCrendentials = styled.section<IInputProp>`
	width: 100%;
	height: 35%;
	padding: 2.5rem 3rem;
	color: ${colors.grayLight};

	h3 {
		font-size: 1rem;
		font-weight: 300;
	}

	form {
		margin-top: 1rem;
		display: flex;
		align-items: center;

		input {
			width: 19rem;
			height: 3rem;
			border-radius: 4px;
			border: ${({errorInputEffect}) =>
				errorInputEffect ? ` 1px solid ${colors.redMedium}` : `1px solid ${colors.grayMedium}`};

			background-color: ${colors.grayDark2};
			color: ${colors.grayLight};
			padding-left: 0.8rem;
			font-size: 1rem;
			margin-right: 0.7rem;

			animation: ${({errorInputEffect}) => (errorInputEffect ? shakeEffect : "")} 0.4s;
		}

		button {
			width: 5rem;
			height: 3rem;
			cursor: pointer;
			border-radius: 4px;
			border: 0;
			outline: none;
			color: ${colors.grayDark};
			font-weight: 600;
			background-color: ${colors.blueLight};

			display: grid;
			place-items: center;

			transition: all 0.2s ease-in-out;

			svg {
				font-size: 1.5rem;
				animation: ${spinEffect} 1s linear infinite;
			}

			&:active {
				transform: scale(1.15);
			}

			&:hover {
				filter: brightness(0.85);
			}
		}
	}
	span {
		font-size: 1rem;
		font-style: italic;
		color: ${colors.redMedium};
	}
`;

export const CardMoreInfo = styled.main`
	width: 100%;
	height: 60%;
	padding: 0 3rem 2.5rem 3rem;

	h4 {
		width: 100%;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 300;
		color: ${colors.grayMedium};
	}

	> div {
		width: 100%;
		height: 90%;

		gap: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
