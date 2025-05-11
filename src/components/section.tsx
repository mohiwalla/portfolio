import { cn } from "@/lib/utils"

export default function Section({
	children,
	className,
	gradient = false,
	...props
}: {
	gradient?: boolean
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cn(
				"relative py-12 md:py-16 overflow-hidden bg-background",
				className
			)}
			{...props}
		>
			{gradient && (
				<>
					<div className="absolute pointer-events-none inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
					<div className="absolute pointer-events-none -top-24 -right-24 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
					<div className="absolute pointer-events-none -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
				</>
			)}

			{children}
		</section>
	)
}
