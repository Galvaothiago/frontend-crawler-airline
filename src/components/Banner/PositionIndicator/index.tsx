import {useEffect, useState} from "react";
import {colors} from "../../../global";
import {Container} from "./style";

interface IPositionIndicator {
	positionIndex: number;
	size: number;
}

export const PositionIndicator = ({positionIndex, size}: IPositionIndicator) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(positionIndex);
	}, [positionIndex, size]);
	return (
		<Container>
			{[...Array(size)].map((_, i) => {
				const backgroundIndex = positionIndex === i ? `${colors.grayLight}` : `${colors.grayMedium}`;
				return <span key={i} style={{backgroundColor: backgroundIndex}}></span>;
			})}
		</Container>
	);
};
