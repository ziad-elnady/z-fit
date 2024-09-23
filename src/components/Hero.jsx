import Button from './Button';

export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p className="uppercase">it{`'`}s time to get</p>
				<h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:-text-7xl">
					Z<span className="text-blue-400">Fitness</span>
				</h1>
			</div>
			<p className="text:small md:text-base font-light">
				I hereby acknowledgement that I may become <span className="text-blue-400 font-medium">unbelievably lorem</span> and accept all risks of becoming the local
				<span className="text-blue-400 font-medium"> mass monstrosity</span>, afflicted with serve body dimorphic, unable to fit through doors
			</p>
			<Button
				onClick={() => {
					window.location.href = '#generate';
				}}
				text={'accept & begin'}
			/>
		</div>
	);
}
