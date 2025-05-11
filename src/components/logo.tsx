import { name } from "@/lib/config"
import { cn } from "@/lib/utils"

export default function Logo({
	className = "",
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			{...props}
			className={cn(
				"font-bold text-xl md:text-2xl flex items-center gap-4",
				className
			)}
		>
			<img src="/images/logo.png" className="h-8 w-full rounded-full" alt="" />
			<span>{name}</span>
		</span>
	)
}
