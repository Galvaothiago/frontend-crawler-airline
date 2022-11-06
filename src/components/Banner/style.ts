import styled from "styled-components";

interface IBackgroundImg {
	urlImg: string;
}

export const Container = styled.div<IBackgroundImg>`
	height: 100%;
	flex: 0.35;

	background-image: ${({urlImg}) => `url(${urlImg})`};
	background-size: cover;
	background-position: center;
`;

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.7);
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;
