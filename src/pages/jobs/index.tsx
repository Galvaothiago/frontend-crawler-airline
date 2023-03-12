import {BsGearFill} from "react-icons/bs";
import {FaRunning} from "react-icons/fa";
import {MdOutlineDone} from "react-icons/md";
import {BiReset} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";

import {Container, ContainerFilter, ContainerInfoJobs, Main, Wrapper} from "./style";
import {TitlePages} from "../../components/TitlePages";
import {Filter} from "../../components/Filter";
import {CardJob} from "../../components/CardJob";
import api from "../../service/api";
import {useCallback, useEffect, useState} from "react";
import {IATAConvert} from "../../utils/IATANameCity";
import {formatDatePTBR} from "../../utils/convertDate";

const options = ["to execute", "done", "all"];

export interface Job {
	id: string;
	arrivalDate: string;
	arrivalAirport: string;
	departureDate: string;
	departureAirport: string;
	createAt: string;
	timesExecuted: number;
	timesToRun: number;
}

const JobsPage = () => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [selectedJob, setSelectedJob] = useState<Job>({} as Job);

	const finishedJob = selectedJob?.timesExecuted === selectedJob?.timesToRun;

	const getAllJobs = async () => {
		try {
			const {data} = await api.get("/jobs");

			setJobs(data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSelectJob = useCallback((job: Job) => {
		setSelectedJob(job);
	}, [jobs]);

	const deleteJob = async (id: string) => {
		try {
			await api.delete(`/jobs/${id}`);
			getAllJobs();
			setSelectedJob({} as Job);
		} catch (err) {
			console.log(err);
		}
	};

	const resetJob = async (id: string) => {
		try {
			await api.patch(`/jobs/${id}`);
			getAllJobs();
			handleSelectJob(jobs.find(job => job.id === id) as Job);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getAllJobs();
	}, []);

	return (
		<Container>
			<TitlePages title='Jobs' icon={<BsGearFill />} />
			<ContainerFilter>
				<Filter options={options} setOption={() => {}} />
			</ContainerFilter>
			<Main>
				<Wrapper>
					{jobs.map(job => (
						<CardJob key={job.id} job={job} onSelectedJob={handleSelectJob} jobSelected={selectedJob} />
					))}
				</Wrapper>
			</Main>
			{selectedJob?.id && (
				<ContainerInfoJobs completed={finishedJob}>
					<span>{`ID: ${selectedJob?.id}`}</span>
					<div>
						<span>{`${IATAConvert(selectedJob?.departureAirport)} X ${IATAConvert(
							selectedJob?.arrivalAirport,
						)}`}</span>
						<span>{`${formatDatePTBR(selectedJob?.departureDate)} à ${formatDatePTBR(
							selectedJob?.arrivalDate,
						)}`}</span>
						<div>
							<div>
								{finishedJob ? <MdOutlineDone /> : <FaRunning />}
								<p>{finishedJob ? `Job finished` : `In progress...`}</p>
							</div>
							<div>
								<button onClick={() => deleteJob(selectedJob?.id)}>
									Delete
									<RiDeleteBin6Line />
								</button>
								{finishedJob && (
									<button onClick={() => resetJob(selectedJob?.id)}>
										Reset
										<BiReset />
									</button>
								)}
							</div>
						</div>
					</div>
				</ContainerInfoJobs>
			)}
		</Container>
	);
};

export default JobsPage;
