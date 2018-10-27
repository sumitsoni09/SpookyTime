

const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

// router.get('/new', (req, res)=> {
//   res.send('hello!')
// })

router.post('/', (req, res)=> {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser)=> {
    res.status(201).json({
      status: 201,
      message: 'new user created!'
    })
  })
})

module.exports = router;
