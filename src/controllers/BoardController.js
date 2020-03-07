module.exports = {
  Update (req, res) {
    if (req.body.text) {
      console.log(req.body.text)
      res.json({
        status: "success"
      })
    }
  }
}