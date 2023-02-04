import React from "react";
import Botao from "./Botao";

function Calculadora() {
	return (
		<div className="flex justify-center items-center flex-col">
			<div className="bg-[#2D2A37] w-[356px] h-[566px] rounded-[40px] shadow-xl">
				<Botao></Botao>
			</div>
		</div>
	);
}

export default Calculadora;
