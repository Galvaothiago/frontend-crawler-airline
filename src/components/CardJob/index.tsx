import {Job} from "../../pages/jobs";
import {IATAConvert} from "../../utils/IATATONameCity";
import {Container, ContainerInfo, ImgSideA, ImgSideB} from "./style";

export const CardJob = ({job}: any) => {
	const {arrivalAirport, arrivalDate, departureDate, departureAirport, timesExecuted, timesToRun} = job;

	const cityNameArrival = IATAConvert(arrivalAirport);
	const cityNameDeparture = IATAConvert(departureAirport);

	const arrivalDateFormat = new Intl.DateTimeFormat("en", {month: "short", day: "2-digit"}).format(new Date(arrivalDate));
	const departureDateFormat = new Intl.DateTimeFormat("en", {month: "short", day: "2-digit"}).format(new Date(departureDate));

	const imgs = [`/city/${arrivalAirport.toLowerCase()}.jpg`, `/city/${departureAirport.toLowerCase()}.jpg`];
	return (
		<Container>
			<ImgSideA src={imgs[1]} />
			<ContainerInfo completed={timesExecuted >= timesToRun}>
				<div>
					<h3>{departureAirport}</h3>
					<span>{cityNameDeparture}</span>
				</div>
				<div>
					<span>
						<b>Times</b>
						<p>executed</p>
					</span>
					<span>{`${timesExecuted}/${timesToRun}`}</span>
					<span>{`${departureDateFormat} to ${arrivalDateFormat}`}</span>
				</div>
				<div>
					<h3>{arrivalAirport}</h3>
					<span>{cityNameArrival}</span>
				</div>
			</ContainerInfo>
			<ImgSideB src={imgs[0]} />
		</Container>
	);
};
