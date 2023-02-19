import {SidebarMenu} from "../SidebarMenu";
import {Container} from "./style";

export const Dashboard = ({children}: any) => {
	return (
		<Container>
			<SidebarMenu />
			<main>{children}</main>
		</Container>
	);
};
