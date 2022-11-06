import {Container} from "./style";
import {IconType} from "react-icons";

interface ICardInfo {
	content: string;
	Icon: IconType;
}

export const CardInfo = ({content, Icon}: ICardInfo) => {
	return (
		<Container>
			<Icon />
			<p>{content}</p>
		</Container>
	);
};
