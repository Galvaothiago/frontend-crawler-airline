export const convertDate = (date: string) => {
	if (!date) return "";

	switch (date.toLowerCase()) {
		case "today":
			return new Date().toLocaleDateString().replaceAll("/", "-");
		case "yesterday":
			return new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString().replaceAll("/", "-");
		case "2 days ago":
			return new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString().replaceAll("/", "-");
		default:
			const fragmentsArr = date.split("-");
			date = `${fragmentsArr[1]}-${fragmentsArr[2]}-${fragmentsArr[0]}`;
			return date;
	}
};
