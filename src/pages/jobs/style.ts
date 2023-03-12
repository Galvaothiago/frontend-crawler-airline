import styled from "styled-components";
import {colors} from "../../global-style";

type IContainerStatus = {
	completed?: boolean;
};

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

export const ContainerInfoJobs = styled.div<IContainerStatus>`
	width: 100%;
	max-height: 10rem;
	height: 100%;
	flex-flow: column;
	margin-top: 2rem;
	padding: 1rem;

	background-color: ${colors.blueLightOpacity};

	span {
		color: ${colors.blueLight};
	}

	> div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		margin-top: 1rem;

		span:nth-child(1) {
			font-size: 1.15rem;
			font-weight: bold;
			color: ${colors.grayLight};
			margin-bottom: 0.5rem;
		}

		span:nth-child(2) {
			font-size: 0.95rem;
			font-weight: bold;
			color: ${colors.grayLight};
			margin-bottom: 0.5rem;
		}

		> div {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			div:nth-child(1) {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				p {
					color: ${colors.grayLight};
				}

				svg {
					color: ${({completed}) => (completed ? colors.greenMedium : colors.orangeMedium)};
				}
			}

			div:nth-child(2) {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				padding-bottom: 0.5rem;

				button {
					display: flex;
					align-items: center;
					gap: 0.25rem;
					border: none;
					cursor: pointer;
					padding: 0.5rem;

					svg {
						font-size: 1rem;
					}
				}

				button:nth-child(1) {
					color: ${colors.grayLight};
					background-color: ${colors.redMediumOpacity};
					border: 1px solid ${colors.redMedium};
				}

				button:nth-child(2) {
					color: ${colors.grayLight};
					background-color: ${colors.orangeMediumOpacity};
					border: 1px solid ${colors.orangeMedium};
				}
			}
		}
	}
`;
