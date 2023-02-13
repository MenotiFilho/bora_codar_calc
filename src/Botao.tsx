import React, { useState } from "react";
import * as Icon from "phosphor-react";

interface Props {
	value: string;
	buttonValue: string;
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Botao: React.FC<Props> = ({ value, buttonValue, handleClick }) => {
	var classButton = "";
	if (
		!isNaN(parseInt(buttonValue)) ||
		buttonValue === "±" ||
		buttonValue === "←" ||
		buttonValue === "%" ||
		buttonValue === "C" ||
		buttonValue === "."
	) {
		classButton =
			"bg-[#2D2A37] shadow-[_0_2px_4px_rgba(0,0,0,0.6)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white font-bold w-[70px] h-[70px] rounded-full";
	} else if (buttonValue === "=") {
		classButton =
			"bg-[#7F45E2] shadow-[_0_2px_4px_rgba(0,0,0,0.6)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white font-bold w-[70px] h-[70px] rounded-full";
	} else {
		classButton =
			"bg-[#462878] shadow-[_0_2px_4px_rgba(0,0,0,0.6)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white font-bold w-[70px] h-[70px] rounded-full";
	}

	const classSpan =
		"select-none flex flex-col justify-center items-center h-full text-white font-bold text-lg";

	const buttonIcon = () => {
		if (buttonValue === "±") {
			return <Icon.PlusMinus size={32} />;
		}
		if (buttonValue === "←") {
			return <Icon.Backspace size={32} />;
		}
		if (buttonValue === "=") {
			return <Icon.Equals size={32} />;
		}
		if (buttonValue === "%") {
			return <Icon.Percent size={32} />;
		}
		if (buttonValue === ".") {
			return <Icon.Circle size={15} weight="fill" />;
		}
		if (buttonValue === "+") {
			return <Icon.Plus size={32} />;
		}
		if (buttonValue === "-") {
			return <Icon.Minus size={32} />;
		}
		if (buttonValue === "*") {
			return <Icon.X size={32} />;
		}
		if (buttonValue === "/") {
			return <Icon.Divide size={32} />;
		}
		if (buttonValue === "1") {
			return <Icon.NumberOne size={32} />;
		}
		if (buttonValue === "2") {
			return <Icon.NumberTwo size={32} />;
		}
		if (buttonValue === "3") {
			return <Icon.NumberThree size={32} />;
		}
		if (buttonValue === "4") {
			return <Icon.NumberFour size={32} />;
		}
		if (buttonValue === "5") {
			return <Icon.NumberFive size={32} />;
		}
		if (buttonValue === "6") {
			return <Icon.NumberSix size={32} />;
		}
		if (buttonValue === "7") {
			return <Icon.NumberSeven size={32} />;
		}
		if (buttonValue === "8") {
			return <Icon.NumberEight size={32} />;
		}
		if (buttonValue === "9") {
			return <Icon.NumberNine size={32} />;
		}
		if (buttonValue === "0") {
			return <Icon.NumberZero size={32} />;
		}
		if (buttonValue === "C") {
			return <Icon.ArrowUUpLeft color="#975DFA" size={32} />;
		} else return;
	};

	return (
		<div className="flex">
			<div
				className={classButton}
				data-value={buttonValue}
				onClick={handleClick}
			>
				<span className={classSpan}>{buttonIcon()}</span>
			</div>
		</div>
	);
};

export default Botao;
