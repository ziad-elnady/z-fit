export default function Button(props) {
	const { onClick, text } = props;

	return (
		<button onClick={onClick} className="mx-auto px-8 py-4 rounded-md bg-slate-950 border-2 border-blue-400 border-solid blueShadow duration-200">
			<p className="capitalize">{text}</p>
		</button>
	);
}
