import {CgArrowsExchangeAlt} from "react-icons/cg";
import {ITicket} from "../../pages/tickets";
import {Container} from "./style";

interface ICardTicketProp {
	ticket: ITicket;
}

export const CardTicket = ({ticket}: ICardTicketProp) => {
	const logo = [`/assets/${ticket.company?.toLowerCase()}.png`];

	const {arrivalDate, priceTotal, departureDate} = ticket;

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
				<div>
					<span>{departureDate}</span>
					<CgArrowsExchangeAlt />
					<span>{arrivalDate}</span>
				</div>
			</div>
			<div>
				<span>{`Visited at: ${visitedDateFormated}`}</span>
				<span>
					Price: <b>{totalValue}</b>
				</span>
			</div>
		</Container>
	);
};
