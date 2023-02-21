import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	padding: 2.5rem;
`;

export const ContainerFilter = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Main = styled.main`
	width: 100%;
	height: calc(100% -2rem);
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto, 1fr);
	grid-column-gap: 15px;
	grid-row-gap: 15px;

	margin-top: 2rem;

	@media (max-width: 1420px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
`;
