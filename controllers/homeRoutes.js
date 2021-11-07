const router = require('express').Router();
const { User } = require('../models')

router.get("/post/:id", (req, res) => {
  const data;
  res.render("home", data)
})

// home > clicks on post > takes to post page with comments
// home > user clicks write a post > takse to create post page
// home > user not auth > redirect to login