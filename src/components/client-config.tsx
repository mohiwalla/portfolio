import { useEffect } from "react"

export default function ClientConfig() {
	useEffect(() => {
		window.addEventListener("mousedown", preventTextDrag, { passive: true })
		window.addEventListener("dragstart", preventDrags)

		return (): void => {
			window.removeEventListener("mousedown", preventTextDrag)
			window.removeEventListener("dragstart", preventDrags)
		}
	})

	return <></>
}

function preventTextDrag(): void {
	window?.getSelection()?.empty()
	window?.getSelection()?.removeAllRanges()
}

function preventDrags(e: DragEvent): void {
	e.preventDefault()
	e.stopPropagation()
}
