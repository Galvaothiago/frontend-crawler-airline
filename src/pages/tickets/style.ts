import styled from "styled-components";
import {colors} from "../../global-style";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	padding: 2.5rem;
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

	/* margin-top: 2rem; */
	height: max-content;
`;
