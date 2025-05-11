export default function BrowserNav() {
	return (
		<div className="flex justify-between px-4 py-2">
			<div className="flex items-center gap-1.5">
				<div className="size-4 rounded-full bg-red-500 dark:bg-red-600" />
				<div className="size-4 rounded-full bg-yellow-500 dark:bg-yellow-600" />
				<div className="size-4 rounded-full bg-green-500 dark:bg-green-600" />
			</div>

			<div className="h-6 rounded-lg bg-secondary w-32 sm:w-40" />
			<div className="hidden sm:block w-20" />
		</div>
	)
}
