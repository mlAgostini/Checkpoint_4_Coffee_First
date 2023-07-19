const AbstractManager = require("./AbstractManager");

class MachineManager extends AbstractManager {
  constructor() {
    super({ table: "machine" });
  }

  insert(machine) {
    return this.database.query(
      `insert into ${this.table} (machine_name) values (?)`,
      [machine.machine_name]
    );
  }

  update(machine) {
    return this.database.query(
      `update ${this.table} set machine_name = ? where id = ?`,
      [machine.machine_name, machine.id]
    );
  }
}

module.exports = MachineManager;
