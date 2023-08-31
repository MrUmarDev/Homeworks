/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("incoming_category", (table) => {
    table
      .uuid("incoming_id")
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"))
      .primary();
    table.string("title", 64).notNullable();
    table.float("amount").notNullable();
    table.timestamp("updated_at")
    table.timestamp("deleted_at")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
