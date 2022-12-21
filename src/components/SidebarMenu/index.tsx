import Link from "next/link";
import {Container, ContainerPulseIcon, FlightOption, Menu, Overlay} from "./style";
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
				<FlightOption>
					<Menu>
						<MdOutlineFlight />
						<span>Jobs</span>
					</Menu>
					<Menu>
						<AiFillHome />
						<span>Home</span>
					</Menu>
					<Menu>
						<AiOutlineSearch />
						<span>Search</span>
					</Menu>
					<Menu>
						<AiOutlineUserAdd />
						<span>User</span>
					</Menu>
				</FlightOption>
			</Container>
		</Overlay>
	);
};
