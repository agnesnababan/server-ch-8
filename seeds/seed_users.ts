import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  const SALT = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync("admin123", SALT);

  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      username: "superadmin",
      email: "superadmin@cars-rental.com",
      password,
      role: "superadmin",
    },
  ]);
}