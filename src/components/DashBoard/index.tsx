import {Toaster} from "react-hot-toast";
import {SidebarMenu} from "../SidebarMenu";
import {Container, Main} from "./style";

export const Dashboard = ({children}: any) => {
	return (
		<Container>
			<SidebarMenu />
			<Main>{children}</Main>
		</Container>
	);
};
