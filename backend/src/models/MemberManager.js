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
      `update ${this.table} set  machine_id = ? where id = ?`,
      [member.machine_id, member.id]
    );
  }
}

module.exports = MemberManager;
