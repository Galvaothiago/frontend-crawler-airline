import {useState} from "react";
import {Button, Container, InputCalender} from "./style";

interface IOptionsProps {
	options: string[];
	setOption: (option: string) => void;
	isButtonDate?: boolean;
}
export const Filter = ({options, setOption, isButtonDate}: IOptionsProps) => {
	const [filter, setFilter] = useState<string>(options[0]);
	const [] = useState<Date>();

	console.log("filter", filter);

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
			{isButtonDate && (
				<InputCalender
					type='date'
					onChange={e => {
						setOption(e.target.value);
					}}
				/>
			)}
		</Container>
	);
};
