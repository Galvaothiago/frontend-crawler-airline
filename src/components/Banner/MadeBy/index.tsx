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
				<a href="https://github.com/Galvaothiago" target="_blank" rel="noreferrer">
					<AiFillGithub />
				</a>
				<a href="https://gitlab.com/Galvaothiago" target="_blank" rel="noreferrer">
					<AiFillGitlab />
				</a>
				<a href="https://www.linkedin.com/in/thiago-galvao-155062208/" target="_blank" rel="noreferrer">
					<FaLinkedin />
				</a>
			</footer>
		</Container>
	);
};
