import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cities = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Lucknow"
];

const prefixes = [
  "National",
  "Global",
  "Premier",
  "Modern",
  "Central",
  "Indian",
  "United",
  "Techno"
];

const suffixes = [
  "Institute of Technology",
  "Engineering College",
  "School of Engineering",
  "Technical University",
  "Institute of Engineering"
];

const streams = [
  "Engineering",
  "Management",
  "Medicine",
  "Law",
];

const courseLevels = [
"Undergrad",
"PhD",
"Diploma",
];

function randomItem<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomFee() {
  return Math.floor(Math.random() * 350000) + 50000;
}

function randomRating() {
  return +(Math.random() * 1.5 + 3.2).toFixed(1);
}

function generateOverview(name: string) {
  return `${name} is a reputed institution known for quality education, experienced faculty, modern infrastructure, and strong student development programs.`;
}

async function main() {
  await prisma.college.deleteMany();

  const colleges = [];

  for (let i = 0; i < 200; i++) {
    const name =
      `${randomItem(prefixes)} ${randomItem(suffixes)}`;

    colleges.push({
      name,
      location: randomItem(cities),
      fees: randomFee(),
      rating: randomRating(),
      overview: generateOverview(name),
      stream: randomItem(streams),
      courseLevel: randomItem(courseLevels),
    });
  }

  await prisma.college.createMany({
    data: colleges,
  });

  console.log(`Seeded ${colleges.length} colleges`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());