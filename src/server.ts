import Fastify from 'fastify'

const server = Fastify({
    logger: true
})

server.get('/', async function handler(request, reply) {
    return { hello: 'World!' }
})

const start = async () => {
    try {
        await server.listen({ port: 3000 })

        const address = server.server.address()
        const port = typeof address === 'string' ? address : address?.port
    }
    catch(err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()