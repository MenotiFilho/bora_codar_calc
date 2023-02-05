const Input: React.FC<{ displayValue: string }> = ({ displayValue }) => {
	return (
		<div className="text-right h-1/4 text-white font-bold text-7xl flex items-center overflow-hidden">
			<div
				style={{
					fontSize: "7xl",
					flex: "1 1 auto",
					minWidth: 0,
					textOverflow: "ellipsis",
				}}
			>
				{displayValue}
			</div>
		</div>
	);
};

export default Input;
