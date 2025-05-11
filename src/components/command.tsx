import { Fragment, useEffect, useState } from "react"
import {
	BadgeDollarSign,
	Settings,
	TableProperties,
	UserRoundPlus,
	UserRoundSearch,
	UsersRound,
} from "lucide-react"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { CommandSeparator } from "cmdk"

const commandGroups = [
	{
		title: "Quick links",
		items: [
			{
				href: "/admin/dashboard",
				icon: <UsersRound />,
				title: "Dashboard",
			},
			{
				href: "/admin/employees",
				icon: <UserRoundSearch />,
				title: "Employees",
			},
			{
				href: "/admin/attendance",
				icon: <TableProperties />,
				title: "Attendance",
			},
			{
				href: "/admin/payrolls",
				icon: <BadgeDollarSign />,
				title: "Payrolls",
			},
			{
				href: "/admin/settings",
				icon: <Settings />,
				title: "Settings",
			},
		],
	},
	{
		title: "Quick commands",
		items: [
			{
				href: "/admin/employees?action=new-employee",
				icon: <UserRoundPlus />,
				title: "New employee",
			},
		],
	},
]

const triggerKeys = ["k", "K", "p", "P"]

export function GlobalCommandSearch() {
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (triggerKeys.includes(e.key) && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<Button
				className="text-sm gap-10 px-3"
				variant="outline"
				onPointerDown={() => setOpen(true)}
			>
				Search links...
				<kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
					<span className="text-xs py-0.5">⌘</span>
					{triggerKeys[0].toUpperCase()}
				</kbd>
			</Button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />

				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					{commandGroups.map((group, i, groups) => (
						<Fragment key={"group-" + i}>
							<CommandGroup heading={group.title}>
								{group.items.map(({ href, icon, title }, i) => (
									<CommandItem
										key={"item-" + i}
										className="!py-1.5"
										onSelect={() => {
											navigate(href)
											setOpen(false)
										}}
									>
										{icon}
										<span>{title}</span>
									</CommandItem>
								))}

								{i !== groups.length && <CommandSeparator />}
							</CommandGroup>
						</Fragment>
					))}
				</CommandList>
			</CommandDialog>
		</>
	)
}
