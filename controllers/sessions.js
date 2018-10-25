const express = require('express');
const router = express.Router();
const Sessions = require('../models/sessions.js')

router.post('/', (req, res)=>{
  Sesssions.create(req.body, (err, createdSession)=>{
    res.json(createdSession);
  })
})

router.get('/', (req, res)=>{
  Sessions.find({}, (err, foundSessions)=>{
    res.json(foundSessions);
  })
})

router.delete('/', (req, res)=>{
  Session.findByIdAndRemove(req.params.id, (err, deletedSession)=>{
    res.json(deletedSession);
  })
})

router.put('/:id', (req,res)=>{
  Sessions.findByIdAndUpdate(req.params.id, {new:true}, (err, updatedSession)=>{
    res.json(updatedSession);
  })
})
