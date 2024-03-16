import express from 'express'
import cors from 'cors'

import graphqlRouter from './graphql/router.ts'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/graphql', graphqlRouter)

app.use('/', (req, res) => {
  console.log(req.body)
  res.json({status: true})
})

app.listen(3000, () => {
    console.log('Server starts!')
})
