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

  update(title, img, vote, id) {
    const setParts = [];
    const requestParams = [];
    if (title) {
      setParts.push("title = ?");
      requestParams.push(title);
    }
    if (img) {
      setParts.push("img = ?");
      requestParams.push(img);
    }
    if (vote) {
      setParts.push("vote = ?");
      requestParams.push(vote);
    }
    requestParams.push(id);
    return this.database.query(
      `update ${this.table} set ${setParts.join(", ")} where id = ?`,
      requestParams
    );
  }
}

module.exports = FoodsManager;
