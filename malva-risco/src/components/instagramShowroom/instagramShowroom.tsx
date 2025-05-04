import Image from 'next/image'
import React from 'react'

export const InstagramShowroom = () => {

	const instagramPosts = [
		{
			'url': 'https://www.instagram.com/p/CySi7TGoLAn/?igsh=MWx3MnJ5NTZoZ240ag==',
			'img': '/farm.webp',
			'text': 'Malva Risco',
			'date': '2023-10-01',
			'likes': 100,
			'comments': 10,
		},
		{
			'url': 'https://www.instagram.com/p/CySi7TGoLAn/?igsh=MWx3MnJ5NTZoZ240ag==',
			'img': '/farm.webp',
			'text': 'Malva Risco',
			'date': '2023-10-01',
			'likes': 100,
			'comments': 10,
		},
		{
			'url': 'https://www.instagram.com/p/CySi7TGoLAn/?igsh=MWx3MnJ5NTZoZ240ag==',
			'img': '/farm.webp',
			'text': 'Malva Risco',
			'date': '2023-10-01',
			'likes': 100,
			'comments': 10,
		},
	]

	const instaImg = (url: string) => <div
		className="instagram-hover rounded-lg overflow-hidden shadow-md transition duration-300"
		onClick={() => window.open(url, '_blank')}
	>
		<Image src="/"
			alt="Instagram Post" className="w-full h-64 object-cover"
			width={500}
			height={300} />
		<div className="p-4 bg-white">
			<div className="flex items-center">
				<i className="fab fa-instagram text-pink-600 mr-2"></i>
				<span className="text-gray-700">@malvarisco</span>
			</div>
		</div>
	</div>;
	return (<>
		<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Síguenos en Instagram para ver el día a día en nuestra finca y conocer nuestros productos de temporada.</p>

		<div>
			{instagramPosts.map((post) => instaImg(post.url))}
		</div>

		<div className="text-center mt-12">
			<a href="https://instagram.com" target="_blank" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition duration-300">
				<i className="fab fa-instagram mr-2"></i> Ver más en Instagram
			</a>
		</div>
	</>
	)
}
