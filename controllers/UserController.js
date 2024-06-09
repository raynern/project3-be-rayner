const BaseController = require("./BaseController");

class UserController extends BaseController {
  constructor(model, associations) {
    super(model, associations);
  }

  async insertOne(req, res) {
    const { email } = req.body;
    try {
      const newUser = await this.model.create({
        email: email,
      });
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { userId } = req.params;
    try {
      const output = await this.model.findByPk(userId);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UserController;
