import {useState} from "react";
import {MadeBy} from "./MadeBy";
import {PositionIndicator} from "./PositionIndicator";
import {Container, Overlay} from "./style";

const backgroundsPath = [
	"assets/airplane2.jpg",
	"assets/airplane1.jpg",
	"assets/airplane3.jpg",
	"assets/airplane4.jpg",
	"assets/airplane5.jpg",
];

export const Banner = () => {
	const [backgroundUrl, setBackgroundUrl] = useState(backgroundsPath[backgroundsPath.length - 1]);
	const [currentImg, setCurrentImg] = useState(0);

	const getUrlImage = () => {
		const indexLimit = backgroundsPath.length - 1;
		setBackgroundUrl(backgroundsPath[currentImg]);

		if (currentImg === indexLimit) {
			setCurrentImg(0);
		} else {
			setCurrentImg(currentImg + 1);
		}
	};

	setTimeout(() => {
		getUrlImage();
	}, 6000);

	return (
		<Container urlImg={backgroundUrl}>
			<Overlay>
				<PositionIndicator size={backgroundsPath.length} positionIndex={currentImg} />
				<MadeBy />
			</Overlay>
		</Container>
	);
};
