import figlet from 'figlet'

const server = Bun.serve({
	port: 3000,
	fetch: (request) => {
		const body = figlet.textSync('Hello, World!')

		return new Response(body)
	}
})

console.log('Web Server Active')
