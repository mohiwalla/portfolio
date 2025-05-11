import { motion } from "framer-motion"

export default function FadeUp({
	children,
	delay = 0,
	duration = 0.6,
	className = "",
}: {
	delay?: number
	duration?: number
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				y: 20,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				delay,
				duration,
				ease: "backInOut",
			}}
		>
			{children}
		</motion.div>
	)
}
