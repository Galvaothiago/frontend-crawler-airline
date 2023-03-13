import {TitlePages} from "../../components/TitlePages";
import {IoCreateOutline} from "react-icons/io5";
import {Container, ContainerCardInsert, ContainerOtherInfo, Group, InlineGroup, Wrapper} from "./style";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {notify} from "../../utils/common";
import Error from "next/error";
import api from "../../service/api";
import {formatDateToAPI} from "../../utils/convertDate";

const NewJob = () => {
	const [departureInput, setDepartureInput] = useState<string>("");
	const [arrivalInput, setArrivalInput] = useState<string>("");
	const [departureDateInput, setDepartureDateInput] = useState<string>("");
	const [arrivalDateInput, setArrivalDateInput] = useState<string>("");
	const [timesToExecute, setTimesToExecute] = useState<number>(25);

	const [check1, setCheck1] = useState(true);
	const [check2, setCheck2] = useState(false);
	const [check3, setCheck3] = useState(false);

	const [messageLabel, setMessageLabel] = useState<string>("");

	const inputs = {
		departureAirport: departureInput,
		arrivalAirport: arrivalInput,
		departureDate: formatDateToAPI(departureDateInput),
		arrivalDate: formatDateToAPI(arrivalDateInput),
		timesToRun: timesToExecute,
	};

	const handleSendJob = async () => {
		try {
			if (!validateEmptyField()) return;

			await api.post("/jobs", inputs);
			notify("Job created successfully", "SUCCESS");
			cleanAllFields();
		} catch (err: any) {
			notify(err.message, "ERROR");
		}
	};

	const validateEmptyField = () => {
		if (departureInput === "" || arrivalInput === "" || departureDateInput === "" || arrivalDateInput === "") {
			notify("All fields are required", "ERROR");
			return false;
		}
		return true;
	};

	const cleanAllFields = () => {
		setDepartureInput("");
		setArrivalInput("");
		setDepartureDateInput("");
		setArrivalDateInput("");
		setTimesToExecute(25);
	};

	useEffect(() => {
		if (check1) {
			setMessageLabel("generates dates decrementing one day at a time");
		} else if (check2) {
			setMessageLabel("generates dates decrementing two day at a times");
		} else if (check3) {
			setMessageLabel("generates dates decrementing three day at a time");
		}
	}, [check1, check2, check3]);

	return (
		<Container>
			<TitlePages title='New Job' icon={<IoCreateOutline />} />
			<Wrapper>
				<ContainerCardInsert>
					<form>
						<InlineGroup>
							<Group>
								<label>Departure:</label>
								<input
									type='text'
									placeholder='City name or code...'
									value={departureInput}
									required
									onChange={e => setDepartureInput(e.target.value)}
								/>
							</Group>
							<Group>
								<label>Arrival:</label>
								<input
									type='text'
									placeholder='City name or code...'
									value={arrivalInput}
									required
									onChange={e => setArrivalInput(e.target.value)}
								/>
							</Group>
						</InlineGroup>
						<InlineGroup>
							<Group>
								<label>Departure Date:</label>
								<input
									type='date'
									required
									value={departureDateInput}
									onChange={e => setDepartureDateInput(e.target.value)}
								/>
							</Group>
							<Group>
								<label>Arrival date:</label>
								<input
									type='date'
									required
									value={arrivalDateInput}
									onChange={e => setArrivalDateInput(e.target.value)}
								/>
							</Group>
							<Group>
								<label>Times to execute:</label>
								<select onChange={e => setTimesToExecute(Number(e.target.value))}>
									<option value={25}>25 times</option>
									<option value={50}>50 times</option>
									<option value={150}>150 times</option>
									<option value={250}>250 times</option>
								</select>
							</Group>
						</InlineGroup>
					</form>
					<button onClick={handleSendJob}>
						Create
						<IoCreateOutline />
					</button>
				</ContainerCardInsert>
				<ContainerOtherInfo>
					<h2>from the original dates, we will generate some others to make the search more flexible.</h2>
					<div>
						<h3>There are three ways to generate the alternative dates:</h3>
						<span>{messageLabel}</span>

						<div>
							<input
								type='checkbox'
								id='check1'
								checked={check1}
								onChange={() => {
									setCheck2(false);
									setCheck3(false);
									setCheck1(true);
								}}
							/>
							<label htmlFor='check1'>standard A</label>
						</div>
						<div>
							<input
								type='checkbox'
								id='check2'
								checked={check2}
								onChange={() => {
									setCheck1(false);
									setCheck3(false);
									setCheck2(true);
								}}
							/>
							<label htmlFor='check2'>standard B</label>
						</div>
						<div>
							<input
								type='checkbox'
								id='check3'
								onChange={() => {
									setCheck1(false);
									setCheck2(false);
									setCheck3(true);
								}}
								checked={check3}
							/>
							<label htmlFor='check3'>standard C</label>
						</div>
					</div>
				</ContainerOtherInfo>
			</Wrapper>
		</Container>
	);
};

export default NewJob;
