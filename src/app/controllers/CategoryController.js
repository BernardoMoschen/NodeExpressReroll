const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  async index(req, res) {
    const { orderBy } = req.query
    const categories = await CategoryRepository.findAll(orderBy)
    res.json(categories)
  }

  async show(req, res) {
    const { id } = req.params

    const categories = await CategoryRepository.findById(id)

    if (!categories) {
      return res.status(404).json({
        error: 'Category not found',
      })
    }

    return res.json(categories)
  }

  async store(req, res) {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ error: 'Name is required.' })
    }
    const nameTaken = await CategoryRepository.findByName(name)
    if (nameTaken) {
      return res.status(404).json({ error: 'This name already exists.' })
    }

    const storedCategories = await CategoryRepository.create({
      name,
    })
    res.json(storedCategories)
  }

  async update(req, res) {
    const { id } = req.params
    const { name } = req.body

    const categoriesExists = await CategoryRepository.findById(id)
    if (!categoriesExists) {
      return res.status(404).json({ error: 'Category not found' })
    }

    const categoryByName = await CategoryRepository.findByName(name)
    if (categoryByName && categoryByName.id !== id) {
      return res.status(404).json({ error: 'This name already exists.' })
    }

    const category = await CategoryRepository.update(id, {
      name,
    })

    res.status(200).json(category)
  }

  async delete(req, res) {
    const { id } = req.params

    const category = await CategoryRepository.findById(id)

    if (!category) {
      return res.status(404).json({
        error: 'Category not found',
      })
    }

    await CategoryRepository.delete(id)
    return res.sendStatus(204)
  }
}

// Singleton
module.exports = new CategoryController()
