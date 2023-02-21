import {Container, ContainerFilter, ContainerMain, Wrapper} from "./style";
import {TitlePages} from "../../components/TitlePages";
import {Filter} from "../../components/Filter";
import {GiCommercialAirplane} from "react-icons/gi";
import api from "../../service/api";
import {useEffect, useState} from "react";
import {CardTicket} from "../../components/CardTicket";
import {convertDate} from "../../utils/convertDate";

const options = ["Today", "Yesterday", "2 days ago"];

export interface ITicket {
	id: string;
	departureDate: string;
	arrivalDate: string;
	company: string;
	priceWithoutTax: number;
	priceTax: number;
	priceTotal: number;
	createdAt: Date;
}

const TicketsPage = () => {
	const [tickes, setTickets] = useState<ITicket[]>([]);
	const [optionsDate, setOptionsDate] = useState<string>(options[0]);

	const getAllTickets = async () => {
		try {
			const {data} = await api.get(`/airline-tickets/${convertDate(optionsDate)}/full`);

			setTickets(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getAllTickets();
	}, [optionsDate]);

	return (
		<Container>
			<TitlePages icon={<GiCommercialAirplane />} title='Tickets' />
			<ContainerFilter>
				<Filter options={options} setOption={setOptionsDate} />
			</ContainerFilter>
			<ContainerMain>
				<h1>Less price</h1>
				<Wrapper>
					{tickes.map(ticket => (
						<CardTicket key={ticket.id} ticket={ticket} />
					))}
				</Wrapper>
			</ContainerMain>
		</Container>
	);
};

export default TicketsPage;
