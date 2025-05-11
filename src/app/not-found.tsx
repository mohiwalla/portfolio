import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"
import FadeUp from "@/animations/fade-up"

export default function NotFound() {
	const navigate = useNavigate()

	return (
		<FadeUp>
			<main className="h-[calc(100vh-69px)] grid place-items-center">
				<div className="flex flex-col gap-4 p-6 text-center max-w-[300px]">
					<hgroup>
						<h1 className="text-6xl font-bold">404</h1>
						<p className="text-muted-foreground">Page not found</p>
					</hgroup>

					<p>
						The page you're looking for doesn't exist or has been
						moved.
					</p>

					<div className="flex gap-3 sm:flex-row flex-col mt-6">
						<Button
							variant="outline"
							className="gap-1.5 grow"
							onClick={() =>
								history.length > 1
									? history.back()
									: navigate("/")
							}
						>
							<ArrowLeft /> Go back
						</Button>

						<Button asChild className="gap-1.5 grow">
							<Link to="/">
								<Home /> Return Home
							</Link>
						</Button>
					</div>
				</div>
			</main>
		</FadeUp>
	)
}
