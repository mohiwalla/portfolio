import { fetchAPI } from "@/lib/utils"
import { Session } from "@/types/session"
import { useEffect, useState } from "react"

export default function useAuth() {
	const [session, setSession] = useState<Session>({
		isAuthenticated: false,
		isLoading: true,
	})

	useEffect(() => {
		fetchAPI("/auth/ping", { credentials: "include" })
			.then(async (res) => {
				setSession({
					isAuthenticated: res.ok && res.text === "pong",
					isLoading: false,
				})
			})
			.catch((e) => console.log("API responsed with error.\n" + e))
	}, [])

	return session
}
