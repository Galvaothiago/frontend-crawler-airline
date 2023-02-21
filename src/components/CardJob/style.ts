import styled from "styled-components";
import {colors} from "../../global-style";

interface IContainerInfo {
	completed?: boolean;
}

export const Container = styled.div`
	height: 6rem;
	max-width: 45rem;
	width: 100%;
	flex: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	background-color: ${colors.background};

	-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
`;

export const ImgSideA = styled.img`
	width: 8rem;
	height: 100%;

	filter: brightness(0.5);
	object-fit: cover;
	object-position: center;

	position: absolute;
	top: 0;
	left: 0;
`;

export const ImgSideB = styled.img`
	width: 8rem;
	height: 100%;

	filter: brightness(0.5);
	object-fit: cover;
	object-position: center;

	position: absolute;
	top: 0;
	right: 0;
`;

export const ContainerInfo = styled.div<IContainerInfo>`
	max-width: 33rem;
	width: 100%;
	height: 100%;
	background-color: ${colors.background};

	display: flex;
	align-items: center;
	justify-content: space-between;

	transform: skewX(-20deg);
	position: relative;

	z-index: 1;

	-webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.42);
	-moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.42);
	box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.42);

	div:nth-child(1) {
		position: absolute;
		top: 0.3rem;
		left: -0.35rem;
		text-align: left;

		transform: skewX(20deg);

		h3 {
			font-size: 1.75rem;
			color: ${colors.blueLight};
		}

		span {
			font-size: 1rem;
			margin-left: 0.5rem;
			color: ${colors.blueLightOpacity};
			font-weight: bold;
		}
	}

	div:nth-child(2) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		padding: 0.25rem 0;

		span:nth-child(1) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			transform: skewX(20deg);
			color: ${colors.blueLight};

			b,
			p {
				font-size: 0.9rem;
				margin-bottom: 0;
			}
		}

		span:nth-child(2) {
			width: auto;
			padding: 0.15rem 0.5rem;

			background-color: ${({completed}) => (completed ? colors.greenMediumOpacity : colors.orangeMediumOpacity)};
			border: 1px solid ${({completed}) => (completed ? colors.greenMedium : colors.orangeMedium)};
			color: ${colors.textColor};

			font-weight: bold;
			margin-left: 1rem;
			font-size: 0.9rem;
		}

		span:nth-child(3) {
			font-size: 0.85rem;
			color: ${colors.grayLightOpacity};
			font-weight: bold;
			margin-left: 2rem;
		}
	}

	div:nth-child(3) {
		position: absolute;
		bottom: 1rem;
		right: -0.75rem;
		text-align: right;

		transform: skewX(20deg);

		h3 {
			font-size: 1.75rem;
			color: ${colors.blueLight};
		}

		span {
			font-size: 1rem;
			margin-right: 1.5rem;
			color: ${colors.blueLightOpacity};
			font-weight: bold;
		}
	}
`;
