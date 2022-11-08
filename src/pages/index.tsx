import Head from "next/head";
import {useCallback, useState} from "react";
import {Dashboard} from "../components/DashBoard";
import {Login} from "../components/Login";
import {ContainerGlobal, Wrapper} from "../global";

export default function Home() {
	const [hasCredentials, setHasCredentials] = useState<boolean>(false);

	const handleLogin = useCallback((statusApi: boolean) => {
		setHasCredentials(statusApi);
	}, []);

	return (
		<ContainerGlobal>
			<Wrapper>
				<Head>
					<title>Airline Tickets - Bot</title>
					<meta name='description' content='Sign in to see your jobs airline tickets' />
				</Head>

				{!hasCredentials ? <Dashboard /> : <Login onLogin={handleLogin} />}
			</Wrapper>
		</ContainerGlobal>
	);
}
