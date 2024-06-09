class TransactionRouter {
  constructor(express, controller) {
    this.express = express;
    this.controller = controller;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll.bind(this.controller));
    router.get(
      "/:userId",
      this.controller.getUserTransactions.bind(this.controller)
    );
    router.post("/", this.controller.insertTransaction.bind(this.controller));
    router.put(
      "/:transactionId",
      this.controller.editTransaction.bind(this.controller)
    );
    router.delete(
      "/:transactionId",
      this.controller.deleteTransaction.bind(this.controller)
    );
    return router;
  }
}

module.exports = TransactionRouter;
