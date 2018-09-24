const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
const app = express();


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
//console.log("LA ROOT DIRECTORY DI NODES",rootDir)
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req

  next()
})


router.post('/testJson', (req, res) => {
  console.log('[API] - SAVE PROFILE POST')
  req.session.profile=req.body.profile
  return res.json({
    status: 'success'
  })
})

module.exports = {
  path: '/api',
  handler: router
}