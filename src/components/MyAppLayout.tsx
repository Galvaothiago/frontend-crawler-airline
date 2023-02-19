import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useCallback, useState} from "react";
import {ContainerGlobal, Wrapper} from "../global";
import {Dashboard} from "./DashBoard";
import {Login} from "./Login";

function MyAppLayout({children}: {children: React.ReactNode}) {
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
				{hasCredentials ? <Dashboard children={children} /> : <Login onLogin={handleLogin} />}
			</Wrapper>
		</ContainerGlobal>
	);
}

export default MyAppLayout;
