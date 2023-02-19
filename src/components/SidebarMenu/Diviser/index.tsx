import {Container} from "./style";

interface IDiviser {
	title: string;
}

export const Diviser = ({title}: IDiviser) => {
	return (
		<Container>
			<span>{title}</span>
		</Container>
	);
};
