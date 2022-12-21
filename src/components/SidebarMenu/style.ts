import styled, {keyframes} from "styled-components";
import {colors} from "../../global";

const transitionDelay = ".6s";

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

	nav {
		display: none;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.55);
		div {
			display: none;
		}

		nav {
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

export const FlightOption = styled.nav`
	width: 100%;
	height: 100%;

	padding-left: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	gap: 0.5rem;
	transition-duration: 1s;
	transition: all 0.6s ease-in-out;

	&:hover {
		backdrop-filter: blur(2px);
		/* background-color: ${colors.blueLight}; */
		a:nth-child(1) {
			opacity: 1;
			transition-delay: ${transitionDelay} * 1;
		}

		a:nth-child(2) {
			opacity: 1;
			transition-delay: ${transitionDelay} * 4;
		}

		a:nth-child(3) {
			opacity: 1;
			transition-delay: ${transitionDelay} * 8;
		}
		a:nth-child(4) {
			opacity: 1;
			transition-delay: ${transitionDelay} * 12;
		}
	}
`;

export const Menu = styled.a`
	width: 3rem;
	height: 3rem;

	border-radius: 3px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding-left: 0.8rem;

	background-color: ${colors.blueLight};
	cursor: pointer;
	transition: all 0.6s ease-in-out;
	/* transition-duration: 2s; */
	opacity: 0;

	-webkit-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
	box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);

	p {
		opacity: 0;
		transition-delay: 1s;
		transition: all 0.6s ease-in-out;
	}

	svg {
		font-size: 1.2rem;
	}

	&:hover {
		width: 10rem;

		p {
			opacity: 1;
			animation: ${textComingEffect} 1s ease-in-out;
		}

		svg {
			font-size: 1.2rem;
		}
	}
`;
