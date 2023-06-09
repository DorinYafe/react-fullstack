const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts).status(200);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const post = req.body;
    await Posts.create(post);
    res.json(post).status(201);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

module.exports = router;
