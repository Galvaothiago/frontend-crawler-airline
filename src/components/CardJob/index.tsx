import {Job} from "../../pages/jobs";
import {IATAConvert} from "../../utils/IATANameCity";
import {Container, ContainerInfo, ImgSideA, ImgSideB} from "./style";

interface IJob {
	job: Job;
	onSelectedJob?: (job: Job) => void;
	jobSelected?: Job;
}

export const CardJob = ({job, onSelectedJob, jobSelected}: IJob) => {
	const {arrivalAirport, arrivalDate, departureDate, departureAirport, timesExecuted, timesToRun} = job;

	const cityNameArrival = IATAConvert(arrivalAirport);
	const cityNameDeparture = IATAConvert(departureAirport);

	const arrivalDateFormat = new Intl.DateTimeFormat("pt-BR", {month: "short", day: "2-digit"}).format(new Date(arrivalDate));
	const departureDateFormat = new Intl.DateTimeFormat("pt-BR", {month: "short", day: "2-digit"}).format(
		new Date(departureDate),
	);

	const imgs = [`/city/${arrivalAirport.toLowerCase()}.jpg`, `/city/${departureAirport.toLowerCase()}.jpg`];

	const handleClickCard = () => {
		if (onSelectedJob) {
			onSelectedJob(job);
		}
	};

	return (
		<Container onClick={handleClickCard} isJobSelected={job?.id === jobSelected?.id}>
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
