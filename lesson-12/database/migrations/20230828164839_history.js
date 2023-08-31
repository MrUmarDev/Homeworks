/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("history", (table) => {
    table
      .uuid("id")
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"))
      .primary();
    table.string("history_title", 64).notNullable();
    table.float("history_amount", 64).notNullable();
    table.text("statusComing").notNullable();
    table.uuid("user_id").notNullable().references("users.user_id");
    table.timestamp("created_at").defaultTo(knex.raw("current_timestamp"));
    table.timestamp("updated_at")
    table.timestamp("deleted_at")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
