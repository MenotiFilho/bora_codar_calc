import React from "react";

function Botao() {
	const classButton =
		"bg-[#2D2A37]  shadow-[_0_2px_4px_rgba(0,0,0,0.6)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white font-bold w-16 h-16 rounded-full ml-2 mt-5";

	const classSpan =
		"select-none flex flex-col justify-center items-center h-full text-white font-bold text-lg ";

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
