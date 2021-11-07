const router = require("express").router()

router.get("/", (req, res) => {
  User.findAll()
  .then()
})

router.post('')