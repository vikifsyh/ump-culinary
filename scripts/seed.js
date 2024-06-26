const { db } = require("@vercel/postgres");
const { users, stalls } = require("../app/libs/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedStalls(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS stalls (
        id SERIAL PRIMARY KEY,
        stall VARCHAR(255) NOT NULL,
        nomor VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        img VARCHAR(255),
        makanan JSONB NOT NULL
      );
    `;

    console.log(`Created "stalls" table`);

    const insertedStalls = await Promise.all(
      stalls.map(async (stall) => {
        const formattedMakanan = stall.makanan.map((food) => {
          return {
            id: food.id,
            name: food.name,
            price: food.price,
            image: food.image,
          };
        });
        return client.sql`
          INSERT INTO stalls (stall, nomor, location, img, makanan)
          VALUES (${stall.stall}, ${stall.nomor}, ${stall.location}, ${
          stall.img
        }, ${JSON.stringify(formattedMakanan)})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedStalls.length} stalls`);

    return {
      createTable,
      stalls: insertedStalls,
    };
  } catch (error) {
    console.error("Error seeding stalls:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedStalls(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
