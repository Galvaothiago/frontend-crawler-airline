import styled from "styled-components";
import {colors} from "../../global-style";

export const Container = styled.div`
	max-width: 38rem;
	width: 100%;
	flex: 1;
	height: 12.5rem;
	background-color: ${colors.background};
	cursor: pointer;

	display: flex;
	flex-direction: row;
	transition: all 0.2s ease-in-out;

	border-radius: 1.5rem 0 0 1.5rem;

	> div:nth-child(1) {
		height: 100%;
		flex: 0.25;

		display: grid;
		place-items: center;

		background-color: ${colors.background};
		border-radius: 1.5rem 2rem 2rem 1.5rem;
		position: relative;

		border-right: 3px dashed ${colors.grayMediumOpacity};

		-webkit-box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);
		box-shadow: -4px 0px 14px -1px rgba(0, 0, 0, 0.75);

		img {
			width: 4rem;
			height: 4rem;

			border-radius: 50%;
			object-fit: cover;

			outline-offset: 0.2rem;
			outline: 0.15rem solid ${colors.blueLightOpacity};
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			right: -1.5rem;
			width: 3rem;
			height: 1.5rem;
			background-color: ${colors.background};
			border-bottom-left-radius: 3rem;
			border-bottom-right-radius: 3rem;

			z-index: 2;

			-webkit-box-shadow: inset 0px -136px 74px -129px rgba(0, 0, 0, 0.4);
			-moz-box-shadow: inset 0px -136px 74px -129px rgba(0, 0, 0, 0.4);
			box-shadow: inset 0px -136px 74px -129px rgba(0, 0, 0, 0.4);
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			right: -1.5rem;
			width: 3rem;
			height: 1.5rem;
			background-color: ${colors.background};
			border-top-left-radius: 3rem;
			border-top-right-radius: 3rem;

			z-index: 2;

			-webkit-box-shadow: inset 0px 136px 74px -129px rgba(0, 0, 0, 0.4);
			-moz-box-shadow: inset 0px 136px 74px -129px rgba(0, 0, 0, 0.4);
			box-shadow: inset 0px 136px 74px -129px rgba(0, 0, 0, 0.4);
		}
	}

	> div:nth-child(2) {
		height: 100%;
		flex: 0.75;
		display: flex;
		flex-direction: column;

		padding: 0 1rem;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1rem 1.5rem;

		border-radius: 1.5rem 0.5rem 0.5rem 1.5rem;

		color: ${colors.grayMedium};

		-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
		-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
		box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	}
`;

export const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${colors.grayMedium};

	b {
		font-size: 1.25rem;
	}

	span {
		font-size: 0.95rem;
		font-style: italic;
	}
`;

export const ContainerCenter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 2rem;

	svg {
		width: 3rem;
		height: 3rem;
		color: ${colors.blueLightOpacity};
	}
`;

export const ContainerFooter = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	div:nth-child(1) {
		display: flex;
		flex-direction: column;

		label {
			font-size: 0.85rem;
			font-weight: 500;
			color: ${colors.grayLightOpacity};
		}

		span {
			font-size: 0.85rem;
			color: ${colors.textColor};
			margin-left: 0.5rem;
		}
	}

	div:nth-child(2) {
		display: flex;
		flex-direction: column;

		label {
			font-size: 0.85rem;
			font-weight: 500;
			color: ${colors.grayLightOpacity};
		}

		span {
			font-size: 1.25rem;
			color: ${colors.textColor};
			margin-left: 0.5rem;
			font-weight: bold;
		}
	}
`;
