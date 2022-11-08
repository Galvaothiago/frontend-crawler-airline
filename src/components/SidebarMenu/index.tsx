import {Container, Overlay} from "./style";

export const SidebarMenu = () => {
	const urls = ["assets/airplane3.jpg", "assets/airplane2.jpg"];
	return (
		<Overlay url={urls[0]}>
			<Container>
				<div>
					<span>
						<span></span>
					</span>
				</div>
				<div></div>
			</Container>
		</Overlay>
	);
};
