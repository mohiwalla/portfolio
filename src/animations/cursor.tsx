import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function Cursor() {
	const x = useMotionValue(-50)
	const y = useMotionValue(-50)
	const scale = useMotionValue(1)
	const opacity = useMotionValue(1)

	const smoothX = useSpring(x, { stiffness: 1000, damping: 80 })
	const smoothY = useSpring(y, { stiffness: 1000, damping: 80 })
	const smoothScale = useSpring(scale, { stiffness: 500, damping: 40 })
	const smoothOpacity = useSpring(opacity, { stiffness: 500, damping: 40 })

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			x.set(e.clientX)
			y.set(e.clientY)

			const target = document.elementFromPoint(e.clientX, e.clientY)
			const isPointer = target?.closest("a") || target?.closest("button")

			scale.set(isPointer ? 1.5 : 0.5)
		}

		window.addEventListener("mousemove", moveCursor, { passive: true })

		function preventTextDrag() {
			window?.getSelection()?.empty()
			window?.getSelection()?.removeAllRanges()
		}

		function preventDrags(e: DragEvent) {
			e.preventDefault()
			e.stopPropagation()
		}

		window.addEventListener("mousedown", preventTextDrag, { passive: true })
		window.addEventListener("dragstart", preventDrags)

		return () => {
			window.removeEventListener("mousedown", preventTextDrag)
			window.removeEventListener("dragstart", preventDrags)
			window.removeEventListener("mousemove", moveCursor)
		}
	}, [x, y, scale, opacity])

	return (
		<motion.span
			style={{
				x: smoothX,
				y: smoothY,
				scale: smoothScale,
				opacity: smoothOpacity,
			}}
			id="cursor"
			className="mix-blend-exclusion z-[999999] bg-white fixed -top-3 -left-3 rounded-full pointer-events-none size-6"
		/>
	)
}
