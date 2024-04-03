import Express from 'express'

//Local server. Only used for testing.

const app = new Express()

app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.path}`)
  next()
})

app.use(Express.static('public'))

app.listen(5000, () => {
  console.log('Listening on port 5000')
})
