const AbstractManager = require("./AbstractManager");

class MemberManager extends AbstractManager {
  constructor() {
    super({ table: "member" });
  }

  insert(member) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      member.name,
    ]);
  }

  update(member) {
    return this.database.query(
      `update ${this.table} set name = ?, machine_id = ? where id = ?`,
      [member.name, member.machine_id]
    );
  }
}

module.exports = MemberManager;
