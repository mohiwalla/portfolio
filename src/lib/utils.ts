import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { API_ENDPOINT } from "./config"
import { BaseResponse } from "@/types/response"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function fetchAPI<T>(
	url: string,
	config: RequestInit = {}
): Promise<T & BaseResponse> {
	config.credentials = "include"
	config.headers = {
		"Content-Type": "application/json",
		...(config.headers || {}),
	}

	try {
		const req = await fetch(API_ENDPOINT + url, config)
		const contentType = req.headers.get("content-type") || ""
		const isJSON = contentType.toLowerCase().includes("application/json")

		const res = await req.json()
		await new Promise((res) => setTimeout(res, 5e2))

		if (!isJSON) {
			throw new Error("Server responded non-JSON.")
		}

		return { ok: res.ok, text: "", ...res } as T & BaseResponse
	} catch (e) {
		console.error(e)

		return {
			ok: false,
			text: "Something went wrong.",
		} as T & BaseResponse
	}
}
