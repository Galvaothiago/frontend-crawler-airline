import {Container, SignIn} from "./style";

export const Sign = () => {
	return (
		<Container>
			<SignIn>
				<label>Login</label>
				<input type='text' placeholder='Enter your login' />
				<br />
				<label>Password</label>
				<input type='password' placeholder='Enter your password' />
			</SignIn>
		</Container>
	);
};
