import faker from 'faker';

export default () => ({
  id: faker.random.number(),
  name: faker.random.words(),
  startDate: faker.date.past(),
  endDate: faker.date.future()
});
