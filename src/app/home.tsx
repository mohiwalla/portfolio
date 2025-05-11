import DraggableSpring from "@/animations/draggable-spring"
import FadeUp from "@/animations/fade-up"
import BrowserNav from "@/components/browser-nav"
import { Button } from "@/components/ui/button"
import { description, name } from "@/lib/config"
import {
	CircleDot,
	Code,
	Copyright,
	Heart,
	Lightbulb,
	MessagesSquare,
	MoreVertical,
	ShieldCheck,
	Smile,
	Stars,
	Timer,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
	return (
		<FadeUp>
			<main className="container mx-auto grid px-8 py-12 md:gap-24 gap-20">
				<section className="grid place-items-center text-center gap-6 md:grid-cols-2">
					<div className="grid place-items-center gap-2">
						<h1 className="sm:text-6xl text-4xl font-black">
							Who is {name}?
						</h1>

						<p className="sm:text-xl text-muted-foreground">
							{description}
						</p>

						<Button
							asChild
							variant="outline"
							size="lg"
							className="mt-4 gap-[5px]"
						>
							<Link
								to="https://google.com/search?q=who+is+mohiwalla"
								target="_blank"
								className="text-lg"
							>
								Ask from{" "}
								<img
									src="/images/google.png"
									alt=""
									className="h-4.5 -mb-1"
								/>
							</Link>
						</Button>
					</div>

					<div className="px-6">
						<DraggableSpring className="rounded-full relative z-10 group">
							<img
								src="/images/thug-life-glasses.png"
								alt=""
								style={{
									transitionTimingFunction: "cubic-bezier(0,.18,0,.98)"
								}}
								className="absolute z-10 pointer-events-none w-8 group-hover:w-28 left-96 -top-20 group-hover:top-[62px] group-hover:left-[94px] rotate-[720deg] group-hover:rotate-[-9deg] transition-all duration-300"
							/>
							<img
								alt=""
								draggable={false}
								src="/images/logo.png"
								className="rounded-full w-80"
							/>
						</DraggableSpring>
					</div>
				</section>

				<section className="grid place-items-center gap-4 text-center">
					<h2 className="text-3xl sm:text-4xl font-extrabold">
						How it started?
					</h2>

					<p className="sm:text-xl text-muted-foreground max-w-screen-md">
						I started programming back in 2022 after I completed my
						schooling from NTC. 14th July was the day of when I
						wrote the first{" "}
						<b>
							<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 inline">
								&apos;Hello World&apos;
							</span>
						</b>{" "}
						of my life.
					</p>
				</section>

				<section className="grid gap-8 place-items-center">
					<h3 className="font-extrabold text-3xl sm:text-4xl">
						Tools I utilise..
					</h3>

					<ul className="flex items-center justify-center flex-wrap gap-4 text-muted-foreground">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-[#3178C6]"
							>
								<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
							</svg>
						</li>

						<li className="hidden sm:block h-4 w-[1px] bg-muted-foreground" />
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-[#0055FF]"
							>
								<path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
							</svg>
						</li>

						<li className="hidden sm:block h-4 w-[1px] bg-muted-foreground" />
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-[#61DAFB]"
							>
								<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
							</svg>
						</li>

						<li className="hidden sm:block h-4 w-[1px] bg-muted-foreground" />
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-[#06B6D4]"
							>
								<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
							</svg>
						</li>

						<li className="hidden sm:block h-4 w-[1px] bg-muted-foreground" />
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-white"
							>
								<path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
							</svg>
						</li>

						<li className="hidden sm:block h-4 w-[1px] bg-muted-foreground" />
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								role="img"
								fill="currentColor"
								className="size-14 p-2 transition duration-150 hover:text-[#007ACC]"
							>
								<path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
							</svg>
						</li>
					</ul>
				</section>

				<section className="grid gap-8 place-items-start lg:px-20 sm:px-10 mx-auto">
					<h3 className="font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 inline">
						#With me
					</h3>

					<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-amber-700">
											<Stars className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Customizable
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Writing fast and customizable code, boosting
								productivity and efficiency with streamlined
								workflows and flexible tools.
							</div>
						</div>

						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-pink-700">
											<Heart className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Communication
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Using the power of collaboration and achieve
								seamless communication, shared resources, and
								real-time project tracking.
							</div>
						</div>

						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-teal-600">
											<Code className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Details
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Writing clean code is a top priority while
								keeping it as optimized as possible.
							</div>
						</div>

						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-sky-900">
											<Smile className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Satisfaction
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Prioritizing customer satisfaction by delivering
								quality products. Ensuring to keep you feeling
								valued and happy.
							</div>
						</div>

						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-purple-700">
											<Lightbulb className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Innovative
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Constantly learning new technologies to ensure
								that clients have access to the best solutions
								in the industry.
							</div>
						</div>

						<div className="relative z-10 flex-1 rounded-2xl border">
							<div className="absolute inset-x-0 inset-y-8 -z-10 border-t" />
							<div className="absolute inset-y-0 inset-x-8 -z-10 border-l" />

							<div className="-mt-0.5">
								<div className="mt-4 mr-2 ml-4 flex items-center gapy-3 pr-4 rounded-full bg-secondary">
									<div className="-m-2">
										<div className="rounded-full p-3.5 bg-green-800">
											<ShieldCheck className="size-5 text-white" />
										</div>
									</div>

									<div className="py-2 pl-4 font-bold text-lg">
										Secure
									</div>
								</div>
							</div>

							<div className="pt-3 pb-4 pr-4 pl-12 text-muted-foreground">
								Your data security and system reliability are
								our top priorities.
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-20 place-items-start lg:px-20 sm:px-10 mx-auto">
					<h3 className="font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 inline">
						#Fun Projects
					</h3>

					<div className="grid lg:grid-cols-2 gap-16">
						<div className="flex items-center gap-4">
							<h4 className="text-3xl relative inline">
								<span className="text-9xl text-secondary font-black absolute-center select-none">
									1
								</span>
								<span className="relative z-10">dtquick</span>
							</h4>

							<span className="text-pretty text-muted-foreground">
								A &apos;sasti-copy&apos; of datatables made an
								initial days of learning JavaScript 🤤
							</span>
						</div>

						<div className="max-w-screen-lg">
							<div className="flex h-full w-full flex-col overflow-hidden rounded-xl border">
								<BrowserNav />

								<div className="border-b pb-4 mt-2">
									<div className="mt-2 flex gap-2 px-3">
										<div className="flex gap-2 items-center rounded-full bg-secondary/50 pl-2 pr-4 text-xs py-1.5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-4 w-4"
											>
												<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
											</svg>
											mohiwalla/dtquick - GitHub
										</div>

										<div className="hidden sm:flex gap-2 items-center rounded-full pl-2 pr-4 text-xs py-1.5">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-4 w-4"
											>
												<title>npm Icon</title>
												<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
											</svg>
											npm install dtquik
										</div>
									</div>
								</div>

								<div className="flex-1">
									<div className="h-full w-full p-4 text-sm bg-slate-900text-slate-400">
										<div className="flex items-center gap-1">
											<div className="mr-1">
												<div className="flex h-4 items-center rounded-md w-4 bg-secondary">
													<img
														src="/images/logo.png"
														alt=""
													/>
												</div>
											</div>

											<div className="-mt-0.5 text-[#1c60eb]">
												<a
													href="https://github.com/mohiwalla/"
													target="_blank"
												>
													mohiwalla
												</a>
												<span className="text-primary px-1">
													/
												</span>
												<a
													target="_blank"
													href="https://github.com/mohiwalla/dtquick"
												>
													dtquick
												</a>
											</div>
											<div className="ml-1 rounded-full border px-2 py-0.5 text-xs">
												public
											</div>
										</div>

										<div className="mt-2 text-muted-foreground">
											dtquick is a lightweight and fast
											JavaScript library that simplifies
											the process of displaying data from
											databases. With minimal code,
											dtquick generates queries
											automatically and saves time. Check
											out the
											<a
												href="https://mohiwalla.000webhostapp.com/dtquick/"
												target="_blank"
												className="text-primary px-1 underline"
											>
												Live Demo
											</a>
											to see it in action!
										</div>

										<div className="mt-6 flex flex-col gap-3">
											<div className="flex items-center gap-2">
												<Copyright className="w-4" />
												<p>MIT license</p>
											</div>

											<div className="flex items-center gap-3">
												<div className="flex items-center gap-1">
													<div className="flex h-4 items-center rounded-md bg-secondary w-5" />
													<div className="flex h-4 items-center rounded-md bg-secondary w-12" />
												</div>

												<div className="flex items-center gap-1">
													<div className="flex h-4 items-center rounded-md bg-secondary w-5" />
													<div className="flex h-4 items-center rounded-md bg-secondary w-14" />
												</div>
											</div>
										</div>

										<div className="grid md:grid-cols-2 mt-6 gap-2">
											<div className="flex h-8 items-center justify-center rounded-lg border">
												<div className="flex items-center gap-1">
													<div className="flex h-4 items-center rounded-md bg-secondary w-5" />
													<div className="flex h-4 items-center rounded-md bg-secondary w-12" />
												</div>
											</div>

											<div className="flex h-8 items-center justify-center rounded-lg border">
												<div className="flex items-center gap-1">
													<div className="flex h-4 items-center rounded-md bg-secondary w-5" />
													<div className="flex h-4 items-center rounded-md bg-secondary w-16" />
												</div>
											</div>
										</div>

										<div className="mt-4 flex border-b gap-3 select-none">
											<label className="-mb-[2px] flex h-12 cursor-pointer text-muted-foreground has-[input:checked]:text-primary transition-all duration-75 border-b-4 has-[input:checked]:border-[#bd4b32] border-transparent">
												<input
													defaultChecked
													type="radio"
													name="github-tabs"
													className="appearance-none"
												/>

												<div className="flex items-center gap-2 px-2">
													<Code className="w-4" />
													Code
												</div>
											</label>

											<label className="-mb-[2px] flex h-12 cursor-pointer text-muted-foreground has-[input:checked]:text-primary transition-all duration-75 border-b-4 has-[input:checked]:border-[#bd4b32] border-transparent">
												<input
													type="radio"
													name="github-tabs"
													className="appearance-none"
												/>

												<div className="flex items-center gap-2 px-2">
													<CircleDot className="w-4" />
													Issues
												</div>
											</label>

											<label className="-mb-[2px] hidden sm:flex h-12 cursor-pointer text-muted-foreground has-[input:checked]:text-primary transition-all duration-75 border-b-4 has-[input:checked]:border-[#bd4b32] border-transparent">
												<input
													type="radio"
													name="github-tabs"
													className="appearance-none"
												/>

												<div className="flex items-center gap-2 px-2">
													<MessagesSquare className="w-4" />
													Discussions
												</div>
											</label>

											<div className="-mb-[2px] flex h-12 ml-auto">
												<div className="flex items-center cursor-pointer px-2 text-muted-foreground hover:text-primary">
													<MoreVertical className="w-4 h-4" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-16">
						<div className="flex items-center gap-4 lg:order-1">
							<h4 className="text-3xl relative inline whitespace-nowrap">
								<span className="text-9xl text-secondary font-black absolute-center select-none">
									2
								</span>
								<span className="relative z-10">
									Plus Point
								</span>
							</h4>

							<span className="text-pretty text-muted-foreground">
								Stunning registeration website for an local
								institute in my city when I learnt Next.JS for
								the first time
							</span>
						</div>

						<div className="max-w-screen-lg border rounded-lg">
							<BrowserNav />

							<div className="sm:p-6 p-4">
								<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
									Plus Point
								</h1>

								<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
									Plus Point Institute in Rajpura offers
									Programming, Web Development, Web Designing,
									Accounts, Physics, Chemistry, Mathematics,
									Spoken English and Microsoft 365 courses.
								</p>

								<div className="flex flex-wrap gap-3">
									<Button asChild variant="outline" size="lg">
										<a
											target="_blank"
											href="https://pluspoint.vercel.app/about"
										>
											Learn more
										</a>
									</Button>

									<Button asChild size="lg">
										<a
											target="_blank"
											href="https://pluspoint.vercel.app/enroll"
										>
											Enroll
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-8 place-items-start md:my-4">
					<blockquote className="md:text-6xl sm:text-4xl text-2xl lg:w-4/5 w-full mx-auto font-bold max-w-5xl md:px-12">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							role="img"
							fill="currentColor"
							className="h-10 text-muted md:-mt-3 md:h-16 lg:h-24 mr-4 inline-block"
						>
							<path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
						</svg>
						Happiness is{" "}
						<p className="text-center mt-4 md:mb-6 mb-4 text-sky-600">
							<Timer className="inline-block md:mr-4 mr-2 md:size-14 sm:size-9 size-8 align-bottom" />
							the interval
						</p>{" "}
						between periods of
						<p className="mt-4 text-right text-destructive-foreground">
							unhappiness.
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								role="img"
								fill="currentColor"
								className="h-10 text-muted md:-mt-3 md:h-16 lg:h-24 inline-block ml-4 rotate-180"
							>
								<path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
							</svg>
						</p>
					</blockquote>
				</section>
			</main>
		</FadeUp>
	)
}
