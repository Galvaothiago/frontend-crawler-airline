import styled, {keyframes} from "styled-components";
import {colors} from "../../global-style";

const airplaneComming = keyframes`
	0% {
		opacity: 0;
		transform: scale(.65) translateX(-300px);
	} 30% {
		opacity: 1;
		transform: scale(.65) translateX(0);
	} 100% {
		opacity: 1;
		transform: scale(.65) translateX(0);
	} 

`;

interface IContainerJob extends React.HTMLAttributes<HTMLSpanElement> {
	isActive: boolean;
}

export const Container = styled.div`
	width: 100%;
	height: 100%;

	padding: 1rem 2.5rem 2.5rem 2.5rem;
	overflow-y: hidden;
`;

export const ContainerFilter = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const ContainerMain = styled.main`
	width: 100%;
	max-height: calc(100% - 5rem);
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;

	padding-bottom: 2rem;
	margin-top: 2rem;

	h1 {
		font-size: 1.5rem;
		color: ${colors.grayMedium};
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto, 1fr);
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;

	height: max-content;
`;

export const ContainerJobList = styled.div`
	width: 100%;
	max-height: 4rem;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${colors.blueLightOpacity};
	border: 1px solid ${colors.blueLight};

	padding: 0.5rem 1rem;

	> span {
		width: 10rem;
		font-size: 0.85rem;
		color: ${colors.textColor};
	}

	> div {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
`;

export const ContainerJob = styled.span<IContainerJob>`
	max-width: 10rem;
	width: 100%;
	font-size: 0.85rem;
	text-align: center;
	font-weight: bold;
	background-color: ${colors.blueLight};

	position: relative;

	padding: 0.25rem 0.5rem;
	transform: ${props => (props.isActive ? "scale(1.05)" : "scale(.95)")};
	transition: all 0.1s ease-in-out;
	cursor: pointer;

	&:hover {
		filter: ${props => (props.isActive ? "" : "brightness(0.9)")};
		transform: ${props => (props.isActive ? "scale(1.05)" : "scale(1)")};
	}
	border: ${props => (props.isActive ? `1px solid ${colors.blueMedium}` : "")};

	svg {
		width: 1.5rem;
		height: 1.5rem;
		display: ${props => (props.isActive ? "block" : "none")};
		position: absolute;
		top: -0.75rem;
		left: 0.25rem;
		color: ${colors.blueMedium};
	}

	p {
		font-size: 0.7rem;
		margin-top: 2px;
	}
`;

export const ContainerEmptyTicket = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		transform: scale(0.65);
		filter: drop-shadow(-18px -5px 14px #000) brightness(0.55);
		animation: ${airplaneComming} 2s ease-in-out;
		transition: all 1s ease-in-out;
	}
`;
