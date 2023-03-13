import type {AppProps} from "next/app";
import {Toaster} from "react-hot-toast";
import MyAppLayout from "../components/MyAppLayout";
import {GlobalStyle} from "../global-style";

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<MyAppLayout>
				<Component {...pageProps} />
				<Toaster position='top-center' />
			</MyAppLayout>
			<GlobalStyle />
		</>
	);
}
