"use client";
import { ArrowLeft, FileDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const navigation = [
		{ name: "Projects", href: "/projects" },
		{ name: "Experience", href: "/experience" }, // Added Experience item
		{ name: "Contact", href: "/contact" },
		{ name: "Resume", href: "/Aman_resume.pdf", download: true, icon: FileDown },
	];

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{navigation.map((item) => (
							pathname !== item.href && (
								<Link
									key={item.href}
									href={item.href}
									className="duration-200 text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
									{...(item.download ? { download: true } : {})}
								>
									{item.name}
									{item.icon && <item.icon className="w-4 h-4" />}
								</Link>
							)
						))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};