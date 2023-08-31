/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table
      .uuid("user_id")
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"))
      .primary();
    table.string("username", 64).notNullable();
    table.string("password", 64).notNullable();
    table.float("balance").notNullable();
    table.timestamp("created_at").defaultTo(knex.raw("current_timestamp"));
    table.timestamp("updated_at");
    table.timestamp("deleted_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
