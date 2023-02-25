import {CgArrowsExchangeAlt} from "react-icons/cg";
import {ITicket} from "../../pages/tickets";
import {truncateMainText} from "../../utils/common";
import {Container, ContainerCenter, ContainerFooter, WrapperText} from "./style";

interface ICardTicketProp {
	ticket: ITicket;
}

export const CardTicket = ({ticket}: ICardTicketProp) => {
	const logo = [`/assets/${ticket.company?.toLowerCase()}.png`];

	const {arrivalDate, priceTotal, departureDate, id} = ticket;

	const dayWeekDeparture = departureDate.split(" ")[0];
	const dayWeekArrival = arrivalDate.split(" ")[0];

	const dateExtractedDeparture = departureDate.split(" ")[1];
	const dateExtractedArrival = arrivalDate.split(" ")[1];

	const idTruncate = truncateMainText(id);

	const visitedDateFormated = new Date(ticket.createdAt).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		minute: "numeric",
		hour: "numeric",
		second: "numeric",
	});

	const totalValue = priceTotal.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<Container>
			<div>
				<img src={logo[0]} alt='logo da gol airlines' />
			</div>
			<div>
				<span title={id}>ID: {idTruncate}</span>
				<ContainerCenter>
					<WrapperText>
						<b>{dayWeekDeparture}</b>
						<span>{dateExtractedDeparture}</span>
					</WrapperText>
					<CgArrowsExchangeAlt />
					<WrapperText>
						<b>{dayWeekArrival}</b>
						<span>{dateExtractedArrival}</span>
					</WrapperText>
				</ContainerCenter>
				<ContainerFooter>
					<div>
						<label>Visited at:</label>
						<span>{visitedDateFormated}</span>
					</div>
					<div>
						<label>Price:</label>
						<span>{totalValue}</span>
					</div>
				</ContainerFooter>
			</div>
		</Container>
	);
};
