import styled from "styled-components";
import {colors} from "../../global-style";

interface IBorderProp {
	border?: boolean;
}

export const Container = styled.div`
	width: auto;
	height: auto;

	-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button<IBorderProp>`
	padding: 0.5rem 1rem;
	border: none;
	background: ${colors.background};
	color: #f1f1f1;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: filter 0.1s ease-in-out;

	border-bottom: ${({border}) => (border ? `3px solid ${colors.blueLightOpacity}` : "")};

	&:hover {
		filter: brightness(0.9);
	}
`;

export const InputCalender = styled.input`
	width: fit-content;
	height: 2rem;

	padding: 0.5rem 1rem;
	margin-left: 0.5rem;

	border: none;

	color: ${colors.textColor};
	font-size: 1rem;
	background-color: ${colors.background};

	&::-webkit-calendar-picker-indicator {
		background-image: url("/calender.png");
		background-size: 25px 25px;
		background-repeat: no-repeat;
		background-position: center;
	}
`;
