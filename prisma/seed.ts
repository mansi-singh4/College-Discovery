import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "ABES Engineering College",
        location: "Ghaziabad",
        fees: 135000,
        rating: 4.2,
        overview: "One of the leading engineering colleges in NCR.",
      },
      {
        name: "AKGEC",
        location: "Ghaziabad",
        fees: 140000,
        rating: 4.1,
        overview: "Known for placements and technical societies.",
      },
      {
        name: "KIET Group of Institutions",
        location: "Ghaziabad",
        fees: 145000,
        rating: 4.3,
        overview: "Strong academics and placement record.",
      },
      {
        name: "JSS Academy",
        location: "Noida",
        fees: 150000,
        rating: 4.0,
        overview: "Popular engineering college in Noida.",
      },
    ],
  });

  console.log("Seeded successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });