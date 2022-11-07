import {CardInfo} from "./CardInfo";
import {CardMoreInfo, Container, FormCrendentials, Title} from "./style";
import {GiCommercialAirplane} from "react-icons/gi";
import {AiFillSchedule} from "react-icons/ai";
import {MdAttachMoney} from "react-icons/md";
import {CgSpinnerTwoAlt} from "react-icons/cg";
import {useEffect, useState} from "react";

export const Sign = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [key, setKey] = useState("");

	const handleSendCredentials = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!key) {
			setError(true);
			setErrorMessage("Please, fill the field with your key");
			return;
		}

		setLoading(true);
		setErrorMessage("");
		setError(false);

		// to get response from API here
		setTimeout(() => {
			setLoading(false);
			setError(true);
			setErrorMessage("Invalid credentials");
		}, 2000);
	};

	useEffect(() => {
		setErrorMessage("");
		setError(false);
	}, [key]);

	return (
		<Container>
			<Title>
				<h1>Welcome, travelers!</h1>
			</Title>
			<FormCrendentials errorInputEffect={error}>
				<h3>To get started enter your key:</h3>
				<form onSubmit={event => handleSendCredentials(event)}>
					<input type='password' placeholder='Key' value={key} onChange={event => setKey(event.target.value)} />
					<button type='submit'>{loading ? <CgSpinnerTwoAlt /> : "Let's go!"}</button>
				</form>
				<span>{errorMessage}</span>
			</FormCrendentials>
			<CardMoreInfo>
				<h4>What to do here?</h4>
				<div>
					<CardInfo content='schedule a service to check ticket prices' Icon={GiCommercialAirplane} />
					<CardInfo content='Choose a date and we generate date combinations to be flexible' Icon={AiFillSchedule} />
					<CardInfo content='know the best date and time to buy your tickets' Icon={MdAttachMoney} />
				</div>
			</CardMoreInfo>
		</Container>
	);
};
