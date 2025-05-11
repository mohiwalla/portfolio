export default function LoadingPage() {
	return (
		<div className="h-screen w-screen grid place-items-center">
			<div className="flex gap-2 justify-center">
				<span className="rounded-full size-3 bg-foreground animate-caret-blink"></span>
				<span className="rounded-full size-3 bg-foreground animate-caret-blink delay-[150ms]"></span>
				<span className="rounded-full size-3 bg-foreground animate-caret-blink delay-[300ms]"></span>
			</div>
		</div>
	)
}
