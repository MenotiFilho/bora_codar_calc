const Input: React.FC<{ displayValue: string }> = ({ displayValue }) => {
	return (
		<div className="text-right h-1/4 w-full text-white font-bold text-7xl flex items-center overflow-clip">
			<div
				style={{
					fontSize: "7xl",
					flex: "1 1 auto",
					minWidth: 0,
					textOverflow: "ellipsis",
				}}
			>
				<div>{displayValue}</div>
			</div>
		</div>
	);
};

export default Input;
