"use client";

import React, { useState } from "react";
import Link from "next/link";

function HoverPrefetchLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const [active, setActive] = useState(false);

	return (
		<Link
			href={href}
			prefetch={active ? null : false}
			onMouseEnter={() => setActive(true)}>
			{children}
		</Link>
	);
}

export default HoverPrefetchLink;
