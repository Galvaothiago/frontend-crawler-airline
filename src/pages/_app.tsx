import type {AppProps} from "next/app";
import MyAppLayout from "../components/MyAppLayout";
import {GlobalStyle} from "../global";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<MyAppLayout>
				<Component {...pageProps} />
			</MyAppLayout>
			<GlobalStyle />
		</>
	);
}
