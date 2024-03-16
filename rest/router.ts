import express from 'express'

const router = express.Router()

router.get('/api', (req, res) => {
  res.json({ foo: 'bar' })
})

export default router
