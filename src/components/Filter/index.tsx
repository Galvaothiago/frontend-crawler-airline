import {useState} from "react";
import {Button, Container} from "./style";

interface IOptionsProps {
	options: string[];
	setOption: (option: string) => void;
}
export const Filter = ({options, setOption}: IOptionsProps) => {
	const [filter, setFilter] = useState<string>(options[0]);

	return (
		<Container>
			{options.map((option, index) => (
				<Button
					key={index}
					border={option === filter}
					onClick={() => {
						setFilter(option);
						setOption(option);
					}}
				>
					{option}
				</Button>
			))}
		</Container>
	);
};
