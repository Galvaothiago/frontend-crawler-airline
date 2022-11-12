import styled, {keyframes} from "styled-components";
import {colors} from "../../global";

const pulse = keyframes`
   0% {
    transform: scale(.95);
    box-shadow: 0 0 0 0  rgba(75, 136, 162,.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 18px rgba(75, 136, 162,.0);
  }
    100% {
    transform: scale(.95);
    box-shadow: 0 0 0 0  rgba(75, 136, 162,0);
  }
`;

const textComingEffect = keyframes`
	  from {
		opacity: 0;
		transform: translateX(6rem);
	  }
	  to {
		opacity: 1;
		transform: translateX(0);
	  }
`;

interface IBackgroundImgProps {
	url: string;
}

export const Overlay = styled.div<IBackgroundImgProps>`
	height: 100%;
	width: 7rem;

	background-image: ${({url}) => `url(${url})`};
	background-size: cover;
	background-position: center;
	transition: all 0.6s ease-in-out;

	&:hover {
		width: 13rem;
	}
`;

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;

	background: rgba(0, 0, 0, 0.75);
	transition: all 0.6s ease-in-out;

	div:nth-child(2) {
		display: none;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.55);
		div:nth-child(1) {
			display: none;
		}

		div:nth-child(2) {
			display: flex;
		}
	}
`;

export const ContainerPulseIcon = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;

	> span {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: ${colors.blueLight};
		opacity: 0.5;
		box-shadow: 0 0 0 0 rgba(75, 136, 162, 1);
		transform: scale(1);
		animation: ${pulse} 1.5s infinite;

		span {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			background: ${colors.blueMedium};
			opacity: 0.2;
		}
	}
`;

export const ContainerMenu = styled.div`
	width: 100%;
	height: 100%;
	transition: all 0.6s ease-in-out;

	display: flex;
`;

export const FlightOption = styled.ul`
	width: 100%;
	height: 100%;

	padding-left: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	gap: 0.5rem;

	div {
		width: 3rem;
		height: 3rem;

		border-radius: 3px;

		display: flex;
		align-items: center;
		justify-content: flex-start;
		/* place-items: center; */
		/* justify-content: center; */
		/* gap: 0.8rem; */
		padding-left: 0.8rem;

		background-color: ${colors.blueLight};
		cursor: pointer;
		transition: all 0.6s ease-in-out;

		-webkit-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
		box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);

		p {
			/* width: 15rem; */
			opacity: 0;
			transition-delay: 1s;
			transition: all 0.6s ease-in-out;
		}

		svg {
			font-size: 1.2rem;
			/* margin-left: 0.1rem; */
		}

		&:hover {
			width: 10rem;

			p {
				opacity: 1;
				/* width: 100%; */
				/* display: block; */
				animation: ${textComingEffect} 1s ease-in-out;
				/* transition-delay: 0.8s; */
			}

			svg {
				font-size: 1.2rem;
				/* margin-left: 0.1rem; */
			}
		}
	}
`;
