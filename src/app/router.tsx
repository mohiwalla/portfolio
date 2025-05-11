import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./home"
import NotFound from "./not-found"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Router() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route index path="/" element={<HomePage />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	)
}
