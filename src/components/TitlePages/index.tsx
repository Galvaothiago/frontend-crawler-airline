import {Container} from "./style";

interface ITitlePages {
	title: string;
	icon: JSX.Element;
}

export const TitlePages = ({title, icon}: ITitlePages) => {
	return (
		<Container>
			{icon}
			<h1>{title}</h1>
		</Container>
	);
};
