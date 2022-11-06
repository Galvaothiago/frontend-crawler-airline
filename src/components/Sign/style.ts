import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	flex: 0.65;
	padding: 1rem;
	display: grid;
	place-items: center;
`;
export const SignIn = styled.form`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;

	label {
		font-size: 1rem;
		letter-spacing: 0.07rem;

		margin-bottom: 0.3rem;
	}

	input {
		height: 2.3rem;
		border-radius: 10px;
		outline: none;
		border: 3px solid #ccc;

		padding: 0.5rem;
		font-size: 0.9rem;

		&::placeholder {
			color: #999;
			font-style: italic;
		}
	}
`;
