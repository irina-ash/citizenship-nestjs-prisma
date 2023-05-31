import { PrismaClient } from '@prisma/client';
import { countries } from './data/countries.json';
import { regions } from './data/regions.json';
import { cities } from './data/cities.json';
const prisma = new PrismaClient();

async function main() {
  //наполняем страны
  const requestsCountries = countries.map((c) =>
    prisma.country.upsert({
      where: { value: c.value },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsCountries);

  //наполняем регионы
  const requestsRegions = regions.map((c) =>
    prisma.region.upsert({
      where: { value: c.value },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsRegions);

  //наполняем города
  const requestsCities = cities.map((c) =>
    prisma.city.upsert({
      where: { value: c.value },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsCities);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
