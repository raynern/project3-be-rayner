const flattenExpenses = require("../utils.js");

const BaseController = require("./BaseController");

class TransactionController extends BaseController {
  constructor(model, associations) {
    super(model, associations);
  }

  async insertTransaction(req, res) {
    const {
      user_id,
      date_start,
      date_end,
      income_expense,
      amount,
      category_id,
    } = req.body;
    try {
      const newTransaction = await this.model.create({
        user_id: user_id,
        date_start: date_start,
        date_end: date_end,
        income_expense: income_expense,
        amount: amount,
        category_id: category_id,
      });
      return res.json(newTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editTransaction(req, res) {
    const { transactionId } = req.params;
    const {
      user_id,
      date_start,
      date_end,
      income_expense,
      amount,
      category_id,
    } = req.body;
    try {
      const updatedTransaction = await this.model.update(
        {
          user_id: user_id,
          date_start: date_start,
          date_end: date_end,
          income_expense: income_expense,
          amount: amount,
          category_id: category_id,
        },
        {
          where: {
            id: transactionId,
          },
        }
      );
      return res.json(updatedTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteTransaction(req, res) {
    const { transactionId } = req.params;
    try {
      const deletedTransaction = await this.model.destroy({
        where: {
          id: transactionId,
        },
      });
      return res.json(deletedTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getUserTransactions(req, res) {
    const { userId } = req.params;
    try {
      const output = await this.model.findAll({
        where: {
          user_id: userId,
        },
      });
      console.log(flattenExpenses(output));
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = TransactionController;
