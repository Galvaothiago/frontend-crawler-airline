import Link from "next/link";
import {Container, ContainerPulseIcon, FlightOption, GroupMenu, Menu, Overlay} from "./style";
import {MdOutlineFlight} from "react-icons/md";
import {AiFillHome, AiOutlineFileText, AiOutlineSearch, AiOutlineUserAdd} from "react-icons/ai";
import {BsGearFill} from "react-icons/bs";
import {Diviser} from "./Diviser";
import {useState} from "react";

const urls = ["assets/airplane3.jpg", "assets/airplane2.jpg"];

const options1 = [
	{
		icon: <BsGearFill />,
		title: "Jobs",
		link: "/jobs",
	},
	{
		icon: <MdOutlineFlight />,
		title: "Tickets",
		link: "/tickets",
	},
	{
		icon: <AiOutlineFileText />,
		title: "Logs",
		link: "/logs",
	},
];

const options2 = [
	{
		icon: <AiOutlineSearch />,
		title: "New Ticket",
		link: "/newTicket",
	},
	{
		icon: <AiOutlineUserAdd />,
		title: "New job",
		link: "/newJob",
	},
];
export const SidebarMenu = () => {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const handleSelectOption = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<Overlay url={urls[0]}>
			<Container>
				<img src='/airplane.png' alt='Imagem de um avião azul e branco' />
				<ContainerPulseIcon>
					<span>
						<span></span>
					</span>
				</ContainerPulseIcon>
				<FlightOption>
					<Diviser title='Searches' />
					<GroupMenu>
						{options1.map((option, index) => (
							<Link href={option.link} key={index} legacyBehavior>
								<Menu selected={option.title === selectedOption} onClick={() => handleSelectOption(option.title)}>
									{option.icon}
									<span>{option.title}</span>
								</Menu>
							</Link>
						))}
					</GroupMenu>
					<Diviser title='Schedule' />
					<GroupMenu>
						{options2.map((option, index) => {
							return (
								<Link href={option.link} key={index} legacyBehavior>
									<Menu
										selected={option.title === selectedOption}
										onClick={() => handleSelectOption(option.title)}
									>
										{option.icon}
										<span>{option.title}</span>
									</Menu>
								</Link>
							);
						})}
					</GroupMenu>
				</FlightOption>
			</Container>
		</Overlay>
	);
};
