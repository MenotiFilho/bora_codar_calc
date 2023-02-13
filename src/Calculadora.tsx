import React, { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";

const Calculadora: React.FC = () => {
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const buttonValue = e.currentTarget.dataset.value;
		if (buttonValue === "C") {
			setResult("");
			setValue("");
		} else if (buttonValue === "=") {
			try {
				setResult(eval(value).toString());
			} catch (error) {
				setResult("Error");
			}
		} else if (buttonValue === "±") {
			setValue(value.charAt(0) === "-" ? value.substring(1) : "-" + value);
		} else if (buttonValue === "←") {
			setValue(value.length > 0 ? value.substring(0, value.length - 1) : "");
		} else if (buttonValue === ".") {
			if (!value.includes(".")) {
				setValue(value + ".");
			}
		} else if (buttonValue === "%") {
			const percentage = (eval(value) / 100).toString();
			if (percentage === "NaN") {
				return;
			} else setResult(percentage);
		} else {
			setValue(value + buttonValue);
		}
	};

	return (
		<div className=" bg-[#2D2A37] gap-2 w-[360px] h-[566px] rounded-[40px] shadow-[_5px_5px_5px_rgba(0,0,0,0.6)] flex flex-col items-center">
			<Input displayValue={value} displayResult={result} />
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"C"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"←"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"%"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"/"} handleClick={handleClick} />
			</div>
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"1"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"2"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"3"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"*"} handleClick={handleClick} />
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
				<Botao value={value} buttonValue={"+"} handleClick={handleClick} />
			</div>
			<div className="flex gap-2">
				<Botao value={value} buttonValue={"±"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"0"} handleClick={handleClick} />
				<Botao value={value} buttonValue={"."} handleClick={handleClick} />
				<Botao value={value} buttonValue={"="} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Calculadora;
