const AbstractManager = require("./AbstractManager");

class FoodsManager extends AbstractManager {
  constructor() {
    super({ table: "foods" });
  }

  findAllFoods() {
    return this.database.query(
      `select * from  ${this.table} ORDER BY vote DESC`
    );
  }

  update(foods) {
    return this.database.query(
      `update ${this.table} set vote = ? where id = ?`,
      [foods.vote, foods.id]
    );
  }
}

module.exports = FoodsManager;
