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

interface IBackgroundImgProps {
	url: string;
}

export const Overlay = styled.div<IBackgroundImgProps>`
	height: 100%;
	width: 9rem;

	background-image: ${({url}) => `url(${url})`};
	background-size: cover;
	background-position: center;
	transition: all 0.6s ease-in-out;

	&:hover {
		width: 18rem;
	}
`;

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;

	background: rgba(0, 0, 0, 0.75);
	transition: all 0.6s ease-in-out;

	div:nth-child(1) {
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
	}

	div:nth-child(2) {
		display: none;
	}

	&:hover {
		background: rgba(0, 0, 0, 0.55);
		div:nth-child(1) {
			display: none;
		}
	}
`;
