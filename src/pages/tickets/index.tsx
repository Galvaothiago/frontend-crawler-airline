import {Container, ContainerFilter, ContainerJob, ContainerJobList, ContainerMain, Wrapper} from "./style";
import {TitlePages} from "../../components/TitlePages";
import {Filter} from "../../components/Filter";
import {GiCommercialAirplane} from "react-icons/gi";
import api from "../../service/api";
import {useEffect, useState} from "react";
import {CardTicket} from "../../components/CardTicket";
import {convertDate} from "../../utils/convertDate";
import {Pagination} from "../../components/Pagination";
import {IATAConvert} from "../../utils/IATANameCity";
import {BsPinAngleFill} from "react-icons/bs";

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

export interface IJob {
	id: string;
	arrivalDate: string;
	arrivalAirport: string;
	departureDate: string;
	departureAirport: string;
	createAt: string;
	timesExecuted: number;
	timesToRun: number;
}

const TicketsPage = () => {
	const [tickets, setTickets] = useState<ITicket[]>([]);
	const [loadingTickets, setLoadingTickets] = useState<boolean>(false);
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [loadingJob, setLoadingJob] = useState<boolean>(false);
	const [selectedJob, setSelectedJob] = useState<IJob | null>(jobs[0]);
	const [optionsDate, setOptionsDate] = useState<string>(options[0]);
	const [dataFilterPagination, setDataFilterPagination] = useState<ITicket[]>([]);

	const [pageFilter, setPageFilter] = useState<number>(1);

	const getAllJobs = async () => {
		try {
			setLoadingJob(true);
			const {data} = await api.get("/jobs");

			setJobs(data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoadingJob(false);
		}
	};

	const getAllTickets = async () => {
		try {
			setLoadingTickets(true);
			const {data} = await api.get(`/airline-tickets/${convertDate(optionsDate)}/full`, {
				params: {
					jobId: selectedJob?.id,
				},
			});

			setTickets(data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoadingTickets(false);
		}
	};

	useEffect(() => {
		getAllJobs();
	}, []);

	useEffect(() => {
		setSelectedJob(jobs[0]);
	}, [jobs]);

	useEffect(() => {
		getAllTickets();
	}, [optionsDate, selectedJob]);

	useEffect(() => {
		setDataFilterPagination([]);
		const filterPagination = tickets.slice((pageFilter - 1) * 4, pageFilter * 4);

		setDataFilterPagination(filterPagination);
	}, [pageFilter, tickets]);

	return (
		<Container>
			<TitlePages icon={<GiCommercialAirplane />} title='Tickets' />
			<ContainerFilter>
				<Filter options={options} setOption={setOptionsDate} />
			</ContainerFilter>
			<ContainerMain>
				<ContainerJobList>
					<span>Filter by jobs</span>
					<div>
						{jobs.map(job => {
							const arrivalDateFormat = new Intl.DateTimeFormat("pt-BR", {
								month: "2-digit",
								day: "2-digit",
								year: "2-digit",
							}).format(new Date(job.arrivalDate));
							const departureDateFormat = new Intl.DateTimeFormat("pt-BR", {
								month: "2-digit",
								day: "2-digit",
								year: "2-digit",
							}).format(new Date(job.departureDate));
							return (
								<ContainerJob
									title={`${IATAConvert(job.departureAirport)} x ${IATAConvert(job.arrivalAirport)}`}
									isActive={selectedJob?.id === job.id}
									onClick={() => setSelectedJob(job)}
									key={job.id}
								>
									<div>{`${job.departureAirport} x ${job.arrivalAirport}`}</div>
									<p>{`${arrivalDateFormat} à ${departureDateFormat}`}</p>
									<BsPinAngleFill />
								</ContainerJob>
							);
						})}
					</div>
				</ContainerJobList>
				<Wrapper>
					{tickets.length > 0 ? (
						dataFilterPagination.map(ticket => <CardTicket key={ticket.id} ticket={ticket} />)
					) : (
						<div>is empty</div>
					)}
				</Wrapper>
				<div>
					<Pagination setPage={setPageFilter} total={tickets.length} />
				</div>
			</ContainerMain>
		</Container>
	);
};

export default TicketsPage;
