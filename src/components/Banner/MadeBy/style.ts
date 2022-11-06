import styled from "styled-components";
import {colors} from "../../../global";

export const Container = styled.div`
	height: 12%;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0.8rem;

	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	color: ${colors.grayMedium};

	opacity: 0;

	transition: all 1s ease-in-out;

	&:hover {
		opacity: 1;
	}

	label {
		font-size: 0.8rem;
		font-style: italic;

		transition: all 0.2s ease-in-out;

		&:hover {
			color: ${colors.grayLight};
		}
	}

	p {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${colors.grayLight};
		opacity: 0.7;
		font-size: 1.1rem;
		font-weight: 600;
		letter-spacing: 0.08rem;
	}

	footer {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		svg {
			font-size: 1.4rem;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			&:hover {
				color: ${colors.grayLight};
			}
		}
	}
`;
