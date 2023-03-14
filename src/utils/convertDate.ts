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

export const formatDatePTBR = (date: string) => {
	if (!date) return "";
	const newDate = new Intl.DateTimeFormat("pt-BR", {month: "short", day: "2-digit", year: "2-digit"}).format(new Date(date));

	return newDate;
};

export const formatDateToAPI = (date: string) => {
	if (!date) return "";
	const dates = date.split("-");

	return `${dates[2]}-${dates[1]}-${dates[0]}`;
};
