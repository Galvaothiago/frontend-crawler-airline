import Link from "next/link";
import {Container, ContainerMenu, ContainerPulseIcon, FlightOption, Overlay} from "./style";
import {MdOutlineFlight} from "react-icons/md";
import {AiFillHome, AiOutlineSearch, AiOutlineUserAdd} from "react-icons/ai";

export const SidebarMenu = () => {
	const urls = ["assets/airplane3.jpg", "assets/airplane2.jpg"];
	return (
		<Overlay url={urls[0]}>
			<Container>
				<ContainerPulseIcon>
					<span>
						<span></span>
					</span>
				</ContainerPulseIcon>
				<ContainerMenu>
					<FlightOption>
						<div>
							<MdOutlineFlight />
							<span>Agende Jobs</span>
						</div>
						<div>
							<AiFillHome />
							<span>Home</span>
						</div>
						<div>
							<AiOutlineSearch />
							<span>pesquise seu job</span>
						</div>
						<div>
							<AiOutlineUserAdd />
						</div>
					</FlightOption>
				</ContainerMenu>
			</Container>
		</Overlay>
	);
};
