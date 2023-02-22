import {BsGearFill} from "react-icons/bs";

import {Container, ContainerFilter, Main, Wrapper} from "./style";
import {TitlePages} from "../../components/TitlePages";
import {Filter} from "../../components/Filter";
import {CardJob} from "../../components/CardJob";
import api from "../../service/api";
import {useEffect, useState} from "react";

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

	const getAllJobs = async () => {
		try {
			const {data} = await api.get("/jobs");

			setJobs(data);
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
						<CardJob key={job.id} job={job} />
					))}
				</Wrapper>
			</Main>
		</Container>
	);
};

export default JobsPage;
