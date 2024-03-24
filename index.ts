const server = Bun.serve({
	port: 3000,
	fetch: (request) => {
		return new Response('Hello, World!', {
			headers: {
				'Content-Type': 'text/plain'
			}
		})
	}
})

console.log('Web Server Active')
