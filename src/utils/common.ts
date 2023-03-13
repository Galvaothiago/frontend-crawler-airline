import toast from "react-hot-toast";
import {IconType} from "react-icons";
import {colors} from "../global-style";

export const truncateMainText = (text: string) => {
	if (!text) return "";

	const firtPart = text.slice(0, 11);
	const lastPart = text.slice(-11);

	return `${firtPart}...${lastPart}`;
};

export const notify = (message: string, iconType: "SUCCESS" | "ERROR") => {
	return toast(message, {
		icon: iconType === "SUCCESS" ? "🔥" : "🤦‍♂️",
		style: {
			borderRadius: "0",
			background: `${colors.black}`,
			color: `${colors.textColor}`,
		},
	});
};
