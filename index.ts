import figlet from 'figlet'

const server = Bun.serve({
	port: 3000,
	fetch: (request) => {
		const url = new URL(request.url)

		if (url.pathname === '/') {
			const body = figlet.textSync(
				'Hello, World! Something in the way Not '
			)

			return new Response(body)
		}

		if (url.pathname === '/about') {
			return new Response('About Me!')
		}

		if (url.pathname === '/contacts') {
			return new Response('Contact Me!')
		}

		return new Response('404! Not Found', { status: 404 })
	}
})

console.log('Web Server Active')
