import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DraggableSpring({
	children,
	className,
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
	const [drag, setDrag] = useState(false)

	useEffect(() => {
		setDrag(true)
	}, [setDrag])

	return (
		<motion.div
			drag={drag}
			dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
			whileDrag={{
				scale: 1.2,
			}}
			dragTransition={{
				bounceStiffness: 250,
				bounceDamping: 14,
			}}
			dragElastic={1}
			className={cn("cursor-grab active:cursor-grabbing z-50", className)}
		>
			{children}
		</motion.div>
	)
}
