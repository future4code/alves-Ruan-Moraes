import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDatabase {
  private static connection: Knex;
  protected getConnection() {
    BaseDatabase.connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true,
      },
    });
    return BaseDatabase.connection;
  }
}