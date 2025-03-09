import { ReactNode } from "react";
import { IconType } from "react-icons";

const Button = ({
	title,
	id,
	rightIcon,
	leftIcon,
	containerClass,
}: {
	title: string;
	id: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	containerClass: string;
}) => {
	return (
		<button
			id={id}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
		>
			{leftIcon}

			<span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
				<div>{title}</div>
			</span>
		</button>
	);
};

export default Button;
