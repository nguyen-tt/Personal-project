const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  create(email, password, role) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, password, role) VALUES (?, ?, ?)`,
      [email, password, role]
    );
  }
}

module.exports = UsersManager;
