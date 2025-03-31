import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "Gihub" },
        { name: "Typescript" },
        { name: "Express.js" },
        { name: "Banco de dados" },
    ]);
};
