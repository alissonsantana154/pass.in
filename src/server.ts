import fastify from "fastify"

const app = fastify()

app.get('/', () => {
  return 'Hello NLW unite'
})
app.get('/teste', () => {
  return 'Hello teste'
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!")
})