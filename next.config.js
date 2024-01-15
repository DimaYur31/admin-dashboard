/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img3.fonwall.ru'
			}
		]
	}
}

module.exports = nextConfig
