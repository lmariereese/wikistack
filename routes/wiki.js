const express = require('express');
const router = express.Router();
const db = require('../models');
const addPage = require('../views/addPage');
const { Page } = require("../models");


router.get('/', async (req, res, next) => {
  res.send('this worked on wiki');
});

router.post('/', async (req, res, next) => {


  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status

  })
  try {
    // await page.save();
    console.log(page);
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
  res.send(addPage())
});



module.exports = router;
