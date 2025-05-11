import LoadingPage from "@/app/loading"
import useAuth from "@/hooks/use-auth"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function ProtectedPages() {
	const route = useLocation().pathname
	const { isAuthenticated, isLoading } = useAuth()

	if (isLoading) {
		return <LoadingPage />
	}

	if (!isAuthenticated) {
		return <Navigate to={`/?redirect=${route}`} />
	}

	return <Outlet />
}
