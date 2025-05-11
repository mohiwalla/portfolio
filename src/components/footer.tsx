import { email } from "@/lib/config"
import { MoveUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer className="container mx-auto p-8 mt-8">
			<div className="flex items-center sm:justify-end">
				<ul className="flex flex-wrap items-center text-sm font-medium text-muted-foreground gap-4 md:gap-6">
					<li>
						<Link
							target="_blank"
							className="flex gap-2 items-center hover:underline underline-offset-4 hover:text-primary"
							to="https://github.com/mohiwalla/"
						>
							GitHub
							<MoveUpRight className="size-4" />
						</Link>
					</li>

					<li>
						<Link
							target="_blank"
							className="flex gap-2 items-center hover:underline underline-offset-4 hover:text-primary"
							to="https://linkedin.com/in/mohiwalla"
						>
							LinkedIn
							<MoveUpRight className="size-4" />
						</Link>
					</li>

					<li>
						<Link target="_blank"
						className="flex gap-2 items-center hover:underline underline-offset-4 hover:text-primary" to={`mailto:${email}`}>
							Email
							<MoveUpRight className="size-4" />
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}
