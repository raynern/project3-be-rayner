class BaseController {
  constructor(model, associations = []) {
    this.model = model;
    this.associations = associations;
  }

  async getAll(req, res) {
    console.log(this.model);
    try {
      const output = await this.model.findAll({ include: this.associations });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
