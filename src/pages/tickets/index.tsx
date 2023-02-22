import {Container, ContainerFilter, ContainerMain, Wrapper} from "./style";
import {TitlePages} from "../../components/TitlePages";
import {Filter} from "../../components/Filter";
import {GiCommercialAirplane} from "react-icons/gi";
import api from "../../service/api";
import {useEffect, useState} from "react";
import {CardTicket} from "../../components/CardTicket";
import {convertDate} from "../../utils/convertDate";
import {Pagination} from "../../components/Pagination";

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
	const [dataFilterPagination, setDataFilterPagination] = useState<ITicket[]>([]);

	const [pageFilter, setPageFilter] = useState<number>(1);

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

	useEffect(() => {
		setDataFilterPagination([]);
		const filterPagination = tickes.slice((pageFilter - 1) * 4, pageFilter * 4);

		setDataFilterPagination(filterPagination);
	}, [pageFilter, tickes]);

	console.log({dataFilterPagination});

	return (
		<Container>
			<TitlePages icon={<GiCommercialAirplane />} title='Tickets' />
			<ContainerFilter>
				<Filter options={options} setOption={setOptionsDate} />
			</ContainerFilter>
			<ContainerMain>
				<Wrapper>
					{dataFilterPagination.map(ticket => (
						<CardTicket key={ticket.id} ticket={ticket} />
					))}
				</Wrapper>
				<div>
					<Pagination setPage={setPageFilter} total={tickes.length} />
				</div>
			</ContainerMain>
		</Container>
	);
};

export default TicketsPage;
