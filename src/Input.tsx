import { Equals } from "phosphor-react";

const Input: React.FC<{ displayValue: string; displayResult: string }> = ({
	displayValue,
	displayResult,
}) => {
	return (
		<div className="text-right font-thin h-1/4 w-full text-white flex items-center overflow-clip">
			<div className=" flex-auto flex-col mx-6">
				<div className=" text-6xl  h-16">{displayValue}</div>
				<div className="flex items-center justify-between">
					<Equals className="text-start" size={20} />
					<div className="  h-10 text-6xl h-16">{displayResult}</div>
				</div>
			</div>
		</div>
	);
};

export default Input;
