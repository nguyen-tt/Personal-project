const AbstractManager = require("./AbstractManager");

class LoginManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findUser(item) {
    return this.database.query(
      `SELECT id, password, role FROM ${this.table} WHERE email = ?`,
      [item.email]
    );
  }
}

module.exports = LoginManager;
