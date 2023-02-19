import styled, {keyframes} from "styled-components";
import {colors} from "../../global";

const transitionDelay = 0.1;

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

interface IBackgrounSelected {
	selected: boolean;
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

	position: relative;

	background: rgba(0, 0, 0, 0.75);
	transition: all 0.6s ease-in-out;

	img {
		width: 4.5rem;
		height: 4.5rem;
		filter: brightness(0.5);

		position: absolute;
		top: 0.5rem;
		transform: translateX(-50%, -50%);
		transition: all 0.6s ease-in-out;
	}

	nav {
		display: none;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.55);
		> div {
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

	display: flex;
	flex-direction: column;

	/* justify-content: flex-start; */
	/* align-items: flex-start; */
	padding-top: 4.5rem;

	&:hover {
		> div {
			opacity: 1;
		}
	}
`;

export const Menu = styled.a<IBackgrounSelected>`
	width: 100%;
	height: 2.5rem;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	background-color: ${({selected}) => (selected ? colors.blueLightOpacity : "transparent")};

	-webkit-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
	box-shadow: -8px -1px 9px -6px rgba(0, 0, 0, 0.75);
	/* transition-delay: 0.5s; */

	span {
		font-size: 1.15rem;
		color: ${colors.grayLight};
	}

	svg {
		width: 1.1rem;
		height: 1.1rem;
		margin-left: 1rem;

		color: ${colors.grayLight};
	}

	&:hover {
		background-color: ${colors.blueLightOpacity};
	}
`;

export const GroupMenu = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.1rem;
	transition: opacity 1.5s ease-in-out;

	opacity: 0;
`;
