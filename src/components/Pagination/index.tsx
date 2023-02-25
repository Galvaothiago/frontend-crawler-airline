import {Button, Container} from "./style";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from "react";

export const Pagination = ({total, setPage}: any) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [disablePrevious, setDisablePrevious] = useState<boolean>(true);
	const [disableNext, setDisableNext] = useState<boolean>(false);

	const limit = Math.ceil(total / 4);

	const handleIncrementPage = () => {
		if (currentPage > 0) {
			setDisablePrevious(false);
		}
		setCurrentPage(oldState => oldState + 1);
		setPage(currentPage + 1);

		if (currentPage >= 2) {
			setDisablePrevious(false);
		}

		if (currentPage === limit - 1) {
			setDisableNext(true);
		}
	};

	const handleDecrementPage = () => {
		if (currentPage >= 1) {
			setCurrentPage(oldState => oldState - 1);
			setPage(currentPage - 1);
			setDisableNext(false);
		}

		if (currentPage === 2) {
			setDisablePrevious(true);
		}
	};

	useEffect(() => {
		if (total === 0) {
			setDisableNext(true);
		} else {
			setDisableNext(false);
		}
	}, [total]);

	return (
		<Container>
			<Button onClick={handleDecrementPage} disabled={disablePrevious} showColor={disablePrevious}>
				<IoIosArrowBack />
			</Button>
			<span>
				<p>page</p>
				<b>{currentPage}</b>
			</span>
			<Button onClick={handleIncrementPage} disabled={disableNext} showColor={disableNext}>
				<IoIosArrowForward />
			</Button>
		</Container>
	);
};
