import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"

export default function BackButton() {
	const navigate = useNavigate()

	return (
		<Button
			variant="ghost"
			size="icon"
			className="group"
			onClick={() =>
				history.length > 1 ? history.back() : navigate("/")
			}
		>
			<ArrowLeft className="group-active:-translate-x-[3px] transition-transform duration-100" />
		</Button>
	)
}
