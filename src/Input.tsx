const Input: React.FC<{ displayValue: string; displayResult: string }> = ({
	displayValue,
	displayResult,
}) => {
	return (
		<div className="text-right h-1/4 w-full text-white font-bold text-7xl flex items-center overflow-clip">
			<div className=" flex-auto flex-col mx-6">
				<div className=" text-6xl mb-5 h-10">{displayValue}</div>
				<div className="flex items-center justify-between">
					<div className="text-start text-4xl h-10 ">=</div>
					<div className=" text-6xl">{displayResult}</div>
				</div>
			</div>
		</div>
	);
};

export default Input;
