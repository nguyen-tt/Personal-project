const AbstractManager = require("./AbstractManager");

class FoodsManager extends AbstractManager {
  constructor() {
    super({ table: "foods" });
  }
}

module.exports = FoodsManager;
