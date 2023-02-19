import {Banner} from "../Banner";
import {Sign} from "../Sign";
import {Container} from "./style";

export const Login = ({onLogin}: any) => {
	return (
		<Container>
			<Banner />
			<Sign onLogin={onLogin} />
		</Container>
	);
};
