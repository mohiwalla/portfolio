import { Button } from "./ui/button"
import { FileText, MoveUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "./logo"
import { email } from "@/lib/config"

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur">
			<nav>
				<div className="container py-4 px-8 mx-auto flex flex-wrap items-center justify-between">
					<Link to="/">
						<Logo />
					</Link>

					<ul className="hidden md:flex flex-row gap-4">
						<li>
							<Button asChild variant="ghost">
								<Link
									target="_blank"
									to="https://github.com/mohiwalla/"
								>
									GitHub
									<MoveUpRight />
								</Link>
							</Button>
						</li>

						<li>
							<Button asChild variant="ghost">
								<Link
									target="_blank"
									to="https://linkedin.com/in/mohiwalla"
								>
									LinkedIn
									<MoveUpRight />
								</Link>
							</Button>
						</li>

						<li>
							<Button asChild variant="ghost">
								<Link target="_blank" to={`mailto:${email}`}>
									Email
									<MoveUpRight />
								</Link>
							</Button>
						</li>
					</ul>

					<div className="flex gap-3 items-center">
						<Button asChild>
							<a
								target="_blank"
								className="flex"
								href="/resume.pdf"
							>
								Resume
								<FileText className="size-5" />
							</a>
						</Button>
					</div>
				</div>
			</nav>
		</header>
	)
}
