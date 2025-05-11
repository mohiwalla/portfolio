import { useState, useCallback, useEffect } from "react"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function useConfirmDialog() {
	const [state, setState] = useState<{
		open: boolean
		title?: string
		description?: string
		resolve?: (val: boolean) => void
	}>({ open: false, title: "" })

	const confirm = useCallback(
		({ title, description }: { title?: string; description?: string }) => {
			return new Promise<boolean>((resolve) => {
				setState({ open: true, title, description, resolve })
			})
		},
		[]
	)

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				setState({
					...state,
					open: false,
				})
				state.resolve?.(false)
			}
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [state])

	function handleClose(result: boolean) {
		state.resolve?.(result)
		setState({ ...state, open: false })
	}

	const Dialog = (
		<AlertDialog open={state.open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						{state.title || "Are you absolutely sure?"}
					</AlertDialogTitle>

					{state.description && (
						<AlertDialogDescription>
							{state.description}
						</AlertDialogDescription>
					)}
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => handleClose(false)}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction onClick={() => handleClose(true)}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)

	return { confirm, Dialog }
}
