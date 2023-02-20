import styled from "styled-components";
import {colors} from "../../global";

export const Container = styled.div`
	max-width: 35rem;
	width: 100%;
	flex: 1;
	height: 14rem;
	border-radius: 0.5rem;
	background-color: ${colors.background};
	cursor: pointer;

	display: flex;
	flex-direction: column;

	-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);
	box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.55);

	> div:nth-child(1) {
		width: 100%;
		flex: 0.75;

		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.5rem 1rem;

		img {
			width: 6rem;
			height: 6rem;
			border-radius: 50%;
			outline: 1px solid ${colors.blueLight};

			object-fit: cover;

			filter: brightness(0.8);
		}

		div {
			width: 100%;
			height: 6rem;
			padding: 0 1rem;

			display: flex;
			align-items: flex-start;
			justify-content: space-between;

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
