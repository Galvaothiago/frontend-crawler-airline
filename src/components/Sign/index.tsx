import {CardInfo} from "./CardInfo";
import {CardMoreInfo, Container, FormCrendentials, Title} from "./style";
import {GiCommercialAirplane} from "react-icons/gi";
import {AiFillSchedule} from "react-icons/ai";
import {MdAttachMoney} from "react-icons/md";

export const Sign = () => {
	const handleSendCredentials = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<Container>
			<Title>
				<h1>Welcome, travelers!</h1>
			</Title>
			<FormCrendentials>
				<h3>To get started enter your key:</h3>
				<form onSubmit={event => handleSendCredentials(event)}>
					<input type='password' placeholder='Key' />
					<button type='submit'>Let's go!</button>
				</form>
			</FormCrendentials>
			<CardMoreInfo>
				<h4>What to do here?</h4>
				<div>
					<CardInfo content='schedule a service to check ticket prices' Icon={GiCommercialAirplane} />
					<CardInfo content='Choose a date and we generate date combinations to be flexible' Icon={AiFillSchedule} />
					<CardInfo content='know the best date and time to buy your tickets' Icon={MdAttachMoney} />
				</div>
			</CardMoreInfo>
		</Container>
	);
};
