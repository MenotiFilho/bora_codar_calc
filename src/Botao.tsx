import React from "react";

function Botao() {
	const classButton =
		"absolute w-16 h-16 top-50 left-38 bg-gradient-to-b from-[#2D2A37] to-[#2D2A37] bg-gray-900 rounded-full shadow-lg ";

	const classSpan =
		"flex flex-col justify-center items-center h-full text-white font-bold text-lg ";

	return (
		<div className="flex">
			<div className={classButton}>
				<span className={classSpan}>?</span>
			</div>
			<div className={classButton}>
				<span className={classSpan}>?</span>
			</div>
			<div className={classButton}>
				<span className={classSpan}>?</span>
			</div>
			<div className={classButton}>
				<span className={classSpan}>?</span>
			</div>
		</div>
	);
}

export default Botao;
