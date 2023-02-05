import React, { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";

const Calculadora: React.FC = () => {
	const [value, setValue] = useState("");

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const buttonValue = (e.target as HTMLDivElement).textContent;
		if (buttonValue === "C") {
			setValue("");
		} else if (buttonValue === "=") {
			try {
				setValue(eval(value).toString());
			} catch (error) {
				setValue("Error");
			}
		} else {
			setValue(value + buttonValue);
		}
	};

	return (
		<div className=" bg-[#2D2A37] w-[360px] h-[566px] rounded-[40px] shadow-[_5px_5px_5px_rgba(0,0,0,0.6)] flex flex-col items-center">
			<Input displayValue={value} />
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"1"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"2"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"3"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"+"} handleClick={handleClick} />
			</div>
			<div className=" flex gap-2">
				<Botao value={value} buttonValue={"4"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"5"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"6"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"-"} handleClick={handleClick} />
			</div>
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"7"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"8"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"9"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"*"} handleClick={handleClick} />
			</div>
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"C"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"0"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"="} handleClick={handleClick} />
				<Botao value={value} buttonValue={"/"} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Calculadora;

/*import React from "react";
function Calculadora() {
import Botao from "./Botao";
import Input from "./Input";

	return (
		<div className="flex justify-center items-center flex-col">
			<div className=" bg-[#2D2A37] w-[356px] h-[566px] rounded-[40px] shadow-[_5px_5px_5px_rgba(0,0,0,0.6)]">
				<Input />
				<Botao></Botao>
			</div>
		</div>
	);
}

export default Calculadora;
*/
