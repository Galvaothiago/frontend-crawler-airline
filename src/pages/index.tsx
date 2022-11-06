import Head from "next/head";
import {Login} from "../components/Login";
import {ContainerGlobal, Wrapper} from "../global";

export default function Home() {
	return (
		<ContainerGlobal>
			<Wrapper>
				<Head>
					<title>Create Next App</title>
					<meta name='description' content='Sign in to see your jobs airline tickets' />
				</Head>

				<Login />
			</Wrapper>
		</ContainerGlobal>
	);
}
