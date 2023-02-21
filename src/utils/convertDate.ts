export const convertDate = (date: string) => {
	if (!date) return "";

	switch (date.toLowerCase()) {
		case "today":
			return new Date().toISOString().split("T")[0];
		case "yesterday":
			return new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0];
		case "2 days ago":
			return new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split("T")[0];
		default:
			return date;
	}
};
