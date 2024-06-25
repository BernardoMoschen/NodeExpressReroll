const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(_req, res) {
    const contacts = await ContactsRepository.findAll()
    res.json(contacts)
  }

  async show(req, res) {
    const { id } = req.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return res.status(404).json({
        error: 'User not found',
      })
    }

    return res.json(contact)
    // req.params.id
  }

  store() {}

  update() {}

  delete() {}
}

// Singleton
module.exports = new ContactController()
