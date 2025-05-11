import ClientConfig from "@/components/client-config"
import Router from "@/app/router"
import React from "react"
import ReactDOM from "react-dom/client"
import "@/app/global.css"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toaster } from "sonner"
import Cursor from "@/animations/cursor"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="bg-black">
			<ScrollArea className="bg-background w-screen h-screen rounded-lg overflow-hidden">
				<Router />
			</ScrollArea>
		</div>

		<Cursor />
		<ClientConfig />
		<Toaster theme="system" className="select-none" richColors />
	</React.StrictMode>
)
