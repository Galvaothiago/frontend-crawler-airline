import styled from "styled-components";
import {colors} from "../../global";

export const Container = styled.div`
	max-width: 35rem;
	width: 100%;
	flex: 1;
	height: 14rem;
	background-color: ${colors.background};
	cursor: pointer;

	display: flex;
	flex-direction: column;
	transition: all 0.2s ease-in-out;
	transform: scale(0.95);

	-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);

	&:hover {
		transform: scale(1);
	}

	> div:nth-child(1) {
		width: 100%;
		flex: 0.75;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
		padding: 1rem;

		img {
			width: 4rem !important;
			height: 4rem !important;
			border-radius: 50%;
			outline: 1px solid ${colors.blueLight};

			object-fit: cover;

			filter: brightness(0.8);
		}

		> div {
			width: fit-content;
			height: 6rem;
			padding: 0 1rem;

			display: flex;
			align-items: flex-start;
			justify-content: center;
			gap: 0.75rem;

			svg {
				width: 3rem;
				height: 3rem;
				margin-top: -0.25rem;

				color: ${colors.blueLight};
			}

			span {
				margin-bottom: 0;
				color: ${colors.grayLight};
			}
		}
	}

	> div:nth-child(2) {
		width: 100%;
		flex: 0.25;
		display: flex;

		padding: 0 1rem;
		align-items: center;
		justify-content: space-between;

		color: ${colors.grayMedium};
	}
`;
