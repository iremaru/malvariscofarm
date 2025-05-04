import React from 'react'

interface Props {
	params: {
		product: string;
	};
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default function ProductPage({ params, searchParams }: Props) {
	const { product } = params;

	return (
		<div>
			<h2>
				ProductPage {product}
			</h2>
			<p>Search Params:</p>
			<ul>
				{Object.entries(searchParams).map(([key, value]) => (
					<li key={key}>
						{key}: {Array.isArray(value) ? value.join(", ") : value}
					</li>
				))}
			</ul>
		</div>

	)
}

