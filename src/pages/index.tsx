import Head from "next/head";
import {Dashboard} from "../components/DashBoard";
import {Login} from "../components/Login";
import {ContainerGlobal, Wrapper} from "../global";

export default function Home() {
	return (
		<ContainerGlobal>
			<Wrapper>
				<Head>
					<title>Airline Tickets - Bot</title>
					<meta name='description' content='Sign in to see your jobs airline tickets' />
				</Head>

				{/* <Login /> */}
				<Dashboard />
			</Wrapper>
		</ContainerGlobal>
	);
}
