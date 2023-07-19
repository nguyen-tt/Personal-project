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

  insert(foods) {
    return this.database.query(
      `insert into ${this.table} (title, img) values (?, ?)`,
      [foods.title, foods.img]
    );
  }

  update(foods) {
    return this.database.query(
      `update ${this.table} set title = ?, img = ?, vote = ? where id = ?`,
      [foods.title, foods.img, foods.vote, foods.id]
    );
  }
}

module.exports = FoodsManager;
