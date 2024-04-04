import Express from 'express'

//Local server. Only used for testing on your local machine with the server:dev script.
//Push changes to github after testing. Make sure to copy/move files in public to the root folder so the
// github page displays correctly.

const app = new Express()

app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.path}`)
  next()
})

app.use(Express.static('public'))

app.listen(5001, () => {
  console.log('Listening on port 5001')
})
