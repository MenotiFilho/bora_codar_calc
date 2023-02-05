import React, { useState } from "react";

interface Props {
	value: string;
	buttonValue: string;
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Botao: React.FC<Props> = ({ value, buttonValue, handleClick }) => {
	const classButton =
		"bg-[#2D2A37] shadow-[_0_2px_4px_rgba(0,0,0,0.6)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white font-bold w-20 h-20 rounded-full mt-5";

	const classSpan =
		"select-none flex flex-col justify-center items-center h-full text-white font-bold text-lg";

	return (
		<div className="flex">
			<div className={classButton} onClick={handleClick}>
				<span className={classSpan}>{buttonValue}</span>
			</div>
		</div>
	);
};

export default Botao;
