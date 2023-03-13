import styled from "styled-components";
import {colors} from "../../global-style";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	padding: 2.5rem;
`;
export const ContainerCardInsert = styled.div`
	width: fit-content;
	max-height: 20rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 2rem;
	padding: 1rem;

	background-color: ${colors.background};

	-webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

	> button {
		width: 100%;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		background-color: ${colors.blueLightOpacity};
		color: ${colors.textColor};
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		font-size: 1rem;

		&:hover {
			background-color: ${colors.blueLight};
		}
	}
`;

export const Group = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-bottom: 1rem;

	label {
		font-size: 1rem;
		opacity: 0.8;
		color: ${colors.grayLightOpacity};
	}

	input {
		width: 100%;
		height: 2.5rem;
		padding: 0.5rem;
		border: none;
		background-color: ${colors.black};
		color: ${colors.textColor};
		font-size: 1rem;
		margin-top: 0.5rem;
	}

	input[type="date"] {
		&::-webkit-calendar-picker-indicator {
			background-image: url("/calender.png");
			background-size: 25px 25px;
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	select {
		width: 100%;
		height: 2.5rem;
		padding: 0.5rem;
		background-color: ${colors.black};
		color: ${colors.textColor};
		border: none;
		margin-bottom: -7px;
	}
`;

export const InlineGroup = styled.div`
	min-width: 35rem;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 0.75rem;
	margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 1rem;
`;

export const ContainerOtherInfo = styled.div`
	width: 100%;
	max-height: 20rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	padding: 2rem;

	h2 {
		font-size: 1.15rem;
		color: ${colors.grayLightOpacity};
		margin-bottom: 0.5rem;
	}

	div {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 1rem;

		span {
			width: fit-content;
			height: auto;
			padding: 0.5rem;
			font-size: 0.95rem;
			background-color: ${colors.blueLightOpacity};
			border: 1px solid ${colors.blueLight};
			color: ${colors.grayLightOpacity};

			margin-top: 1rem;
		}

		h3 {
			font-size: 1rem;
			font-style: italic;
			color: ${colors.blueLight};
		}

		> div {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0.25rem;

			label {
				color: ${colors.grayLightOpacity};
				font-size: 0.95rem;
			}
		}
	}
`;
