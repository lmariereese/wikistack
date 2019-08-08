const express = require('express');
const router = express.Router();
const db = require('../models');
const addPage = require('../views/addPage');
const { Page } = require("../models");
const wikiPage = require("../views/wikipage");


router.get('/', async (req, res, next) => {
  res.send('this worked on wiki');
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content

  })
  try {
    await page.save();
    res.redirect(`${page.slug}`);
  } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
  res.send(addPage())
});

router.get('/:slug', async (req, res, next) => {
  const foundPage = await Page.findOne({
    where: {slug: req.params.slug}
  });
  res.send(wikiPage(foundPage));
  // res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
