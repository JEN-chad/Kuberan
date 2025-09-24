import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Insert a test user with clerkUserId
  const newUser = await prisma.user.create({
    data: {
      clerkUserId: "clerk_12345",  // ✅ required field
      email: "test@example.com",
      name: "Jenish",
    },
  });
  console.log("Inserted user:", newUser);

  // Fetch all users
  const users = await prisma.user.findMany();
  console.log("Users:", users);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
