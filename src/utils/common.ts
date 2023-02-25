export const truncateMainText = (text: string) => {
	if (!text) return "";

	const firtPart = text.slice(0, 11);
	const lastPart = text.slice(-11);

	return `${firtPart}...${lastPart}`;
};
