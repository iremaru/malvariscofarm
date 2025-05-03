import Link from 'next/link';
import React from 'react'

export const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<nav className="navbar category">
				<ul>
					<li>
						<Link href="/store/">Home</Link>
					</li>
					<li>
						<Link href="/store/vegetable">Vegetales</Link>
					</li>
					<li>
						<Link href="/store/fruit">Frutas</Link>
					</li>
				</ul>
			</nav>
			{children}
		</main>
	)
}

export default layout;