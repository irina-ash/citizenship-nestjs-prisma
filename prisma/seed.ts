import { PrismaClient } from '@prisma/client';
import { countries } from './data/countries.json';
import { regions } from './data/regions.json';
import { cities } from './data/cities.json';
import { users } from './data/users.json';
import { grades } from './data/grades.json';
import { groups } from './data/groups.json';
import { stack } from './data/stack.json';
const prisma = new PrismaClient();

//Предзаполнение справочников
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

  //добавляем привязки к пользователям
  const requestsUsers = users.map((c) =>
    prisma.user.upsert({
      where: { email: c.email },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsUsers);

  //добавляем грэйды
  const requestsGrades = grades.map((c) =>
    prisma.grade.upsert({
      where: { id: c.id },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsGrades);

  //добавляем группы
  const requestsGroups = groups.map((c) =>
    prisma.developerGroup.upsert({
      where: { id: c.id },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsGroups);

  //добавляем стэки
  const requestsStacks = stack.map((c) =>
    prisma.developerStack.upsert({
      where: { id: c.id },
      update: {},
      create: c,
    }),
  );

  await prisma.$transaction(requestsStacks);
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
