import {Container} from "./style";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";

export const MadeBy = () => {
	const year = new Date().getFullYear();

	return (
		<Container>
			<label>Developed by</label>
			<p>Thiago Galvão</p>
			<footer>
				<AiFillGithub />
				<AiFillGitlab />
				<FaLinkedin />
			</footer>
		</Container>
	);
};
