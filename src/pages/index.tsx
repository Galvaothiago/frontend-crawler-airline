import Head from "next/head";
import {Login} from "../components/Login";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Sign in to see your jobs airline tickets' />
			</Head>

			<Login />
		</div>
	);
}
