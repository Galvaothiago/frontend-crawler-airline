import styled from "styled-components";
import {colors} from "../../global";

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

export const FormCrendentials = styled.section`
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
			border: 1px solid ${colors.grayMedium};

			background-color: ${colors.grayDark2};
			color: ${colors.grayLight};
			padding-left: 0.8rem;
			font-size: 1rem;
			margin-right: 0.7rem;
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

			transition: all 0.2s ease-in-out;

			&:active {
				transform: scale(1.15);
			}
		}
	}
`;

export const CardMoreInfo = styled.main`
	width: 100%;
	height: 60%;
	padding: 0 3rem 2.5rem 3rem;

	h4 {
		width: 100%;
		text-align: center;
		font-size: 1rem;
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
