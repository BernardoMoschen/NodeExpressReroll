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
  }

  async store(req, res) {
    const { name, email, phone, category_id } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Name is required.' })
    }

    const contactExists = await ContactsRepository.findByEmail(email)
    if (contactExists) {
      return res.status(404).json({ error: 'This email already exists.' })
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    })

    res.json(contact)
  }

  update() {}

  async delete(req, res) {
    const { id } = req.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return res.status(404).json({
        error: 'User not found',
      })
    }

    await ContactsRepository.delete(id)
    return res.sendStatus(204)
  }
}

// Singleton
module.exports = new ContactController()
