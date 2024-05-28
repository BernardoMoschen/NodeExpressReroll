class ContactController {
  index(_req, res) {
    res.send('Sent from contactController')
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

// Singleton
module.exports = new ContactController()
